import * as React from 'react';
import {ColorValue, StyleSheet, View, ViewProps} from 'react-native';
import {State, TapGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import hexToRgbA from './hexaToRgba';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {RippleButtonProps} from '../types/interface';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

type ValueOf<T> = T[keyof T];

const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  borderRadius,
  onPress = () => {},
  rippleScale = 1,
  duration = 250,
  overflow = false,
  rippleColor,
  rippleOpacity = 0.1,
  disabled,
  haptic = false,
  style,
}) => {
  const [radius, setRadius] = React.useState(-1);
  const child = React.Children.only(children) as React.ReactElement<ViewProps>;
  const scale = useSharedValue(0);
  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const state = useSharedValue<ValueOf<typeof State>>(State.UNDETERMINED);
  const colors = useTheme().colors as Colors;
  const isFinished = useSharedValue(false);
  const uas = useAnimatedStyle(
    () => ({
      top: positionY.value - radius,
      left: positionX.value - radius,
      transform: [
        {
          scale: scale.value,
        },
      ],
    }),
    [radius],
  );
  const styles = rippleStyles(
    rippleColor || colors.rippleColor,
    radius,
    rippleOpacity,
    borderRadius || 0,
    overflow,
  );
  return (
    <TapGestureHandler
      maxDurationMs={9999999999}
      onHandlerStateChange={event => {
        if (disabled) {
          return;
        }
        state.value = event.nativeEvent.state;
        positionX.value = event.nativeEvent.x;
        positionY.value = event.nativeEvent.y;

        scale.value =
          event.nativeEvent.state !== State.FAILED
            ? withTiming(
                rippleScale,
                {duration, easing: Easing.bezier(0, 0, 0.8, 0.4)},
                finished => {
                  if (finished) {
                    isFinished.value = true;
                    scale.value = withTiming(0, {duration: 0});
                  }
                  if (state.value === State.BEGAN && finished) {
                    scale.value = withTiming(1, {duration: 0});
                  }
                },
              )
            : 0;

        if (event.nativeEvent.state === State.BEGAN) {
          isFinished.value = false;
        }

        if (event.nativeEvent.state === State.END) {
          if (isFinished.value) {
            scale.value = withTiming(0, {duration: 0});
          }
          if (!disabled) {
            onPress();
            haptic && ReactNativeHapticFeedback.trigger('impactLight');
          }
        }
      }}>
      <Animated.View {...child.props} style={[child.props.style, style]}>
        <View
          style={styles.container}
          onLayout={({
            nativeEvent: {
              layout: {width, height},
            },
          }) => {
            setRadius(Math.sqrt(width ** 2 + height ** 2));
          }}>
          {radius !== -1 && <Animated.View style={[uas, styles.button]} />}
        </View>
        {child.props.children}
      </Animated.View>
    </TapGestureHandler>
  );
};

export default RippleButton;

const rippleStyles = (
  rippleColor: ColorValue,
  radius: number,
  rippleOpacity: number,
  borderRadius: number,
  overflow?: boolean,
) =>
  StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      borderRadius,
      overflow: !overflow ? 'hidden' : undefined,
    },
    button: {
      position: 'absolute',
      width: radius * 2,
      height: radius * 2,
      borderRadius: radius,
      backgroundColor: hexToRgbA(rippleColor, rippleOpacity),
    },
  });
