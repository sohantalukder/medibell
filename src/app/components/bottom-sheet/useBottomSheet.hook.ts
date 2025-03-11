import {useImperativeHandle, useRef} from 'react';
import {Animated, PanResponder, PanResponderGestureState} from 'react-native';
import rs from '@styles/responsiveSize.style.asset';
import {nativeDriver} from '../../assets/styles/properties.asset';
import {BottomSheetProps} from './interface';

const MINIMUM_HEIGHT = rs('hf') + 10;
const GESTURE_THRESHOLD = rs(60);

const useBottomSheetHook = <T>({
  ref,
  backDropHandler,
  extraProps,
}: Omit<BottomSheetProps<T>, 'Component'>) => {
  const positionRef = useRef<any>(new Animated.Value(MINIMUM_HEIGHT)).current;
  const opacityRef = useRef(new Animated.Value(0)).current;
  const velocityRef = useRef(new Animated.Value(0)).current;

  // Track if bottom sheet is being dragged
  const isDragging = useRef(false);
  const startPositionY = useRef(0);

  const animate = (
    toPosition: number,
    toOpacity: number,
    duration: number = 300,
    callback?: () => void,
  ) => {
    Animated.parallel([
      Animated.timing(positionRef, {
        toValue: toPosition,
        duration,
        useNativeDriver: nativeDriver(),
      }),
      Animated.timing(opacityRef, {
        toValue: toOpacity,
        duration,
        useNativeDriver: nativeDriver(),
      }),
    ]).start(callback);
  };

  const handleShowComponent = () => {
    animate(0, 1, 300, () => {
      if (extraProps?.onOpen) {
        extraProps.onOpen();
      }
    });
  };

  const handleHideComponent = () => {
    animate(MINIMUM_HEIGHT, 0, 300, () => {
      if (backDropHandler) {
        backDropHandler();
      }
    });
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        const {dy} = gestureState;
        return Math.abs(dy) > 10;
      },
      onPanResponderGrant: () => {
        isDragging.current = true;
        startPositionY.current = positionRef._value as unknown as any;
      },
      onPanResponderMove: (_, gestureState: PanResponderGestureState) => {
        const {dy, vy} = gestureState;
        const newPosition = Math.max(0, startPositionY.current + dy);

        positionRef.setValue(newPosition);
        velocityRef.setValue(vy);

        // Update opacity based on position
        const opacity = Math.max(
          0,
          Math.min(1, 1 - newPosition / MINIMUM_HEIGHT),
        );
        opacityRef.setValue(opacity);
      },
      onPanResponderRelease: (_, gestureState: PanResponderGestureState) => {
        const {dy, vy} = gestureState;
        isDragging.current = false;

        if (dy > GESTURE_THRESHOLD || vy > 0.5) {
          // Close if dragged down past threshold or with high velocity
          handleHideComponent();
        } else {
          // Return to opened position
          animate(0, 1, 200);
        }
      },
    }),
  ).current;

  useImperativeHandle(ref, () => ({
    show: handleShowComponent,
    close: handleHideComponent,
  }));

  return {
    positionRef,
    opacityRef,
    handleHideComponent,
    panResponder,
  };
};

export default useBottomSheetHook;
