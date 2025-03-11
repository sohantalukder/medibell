import React, {useState, useRef, useEffect} from 'react';
import {
  Modal,
  StyleSheet,
  Animated,
  BackHandler,
  Pressable,
  View,
  Easing,
} from 'react-native';
import useIsMountHook from '../../helper/hooks/useIsMount.hook';
import {_showModalProps} from './types';
import {customTheme} from '../../assets/styles/colors.style.asset';

declare global {
  var showModal: ({
    flag,
    component,
    componentProps,
    modalProps,
    style,
  }: _showModalProps) => void;
}
const CustomModal = () => {
  const isMount = useIsMountHook();
  const ref = useRef<any>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const reloadRef = useRef<any>(null);
  const componentRef = useRef<any>(null);
  const propsRef = useRef<any>(null);
  const scaleValue = useRef(new Animated.Value(0)).current; // Initial scale value

  // Function to open the modal with animation (Quick Open)
  const openModal = () => {
    setIsShow(true);
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 120, // Quick open duration (in milliseconds)
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  };

  // Function to close the modal with smooth animation
  const closeModal = () => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 300, // Slightly longer duration for a smooth close
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start(() => setIsShow(false)); // After animation, hide the modal
  };
  global.showModal = ({
    flag,
    component = null,
    componentProps = {},
    modalProps = {},
    style,
  }) => {
    if (flag && isShow) {
      reloadRef.current = {
        component: component,
        propsRef: {
          componentProps,
          modalProps,
          style,
        },
      };
      closeModal();
      return;
    }
    if (flag) {
      componentRef.current = component;
      propsRef.current = {
        componentProps,
        modalProps,
        style,
      };
      openModal();
      reloadRef.current = null;
      return;
    }
    closeModal();
  };
  useEffect(() => {
    if (!isMount) {
      return;
    }
    if (isShow) {
      openModal();
    } else {
      if (reloadRef.current) {
        componentRef.current = reloadRef.current.component;
        propsRef.current = {...reloadRef.current.propsRef};
        reloadRef.current = null;
        openModal();
        return;
      }
      componentRef.current = null;
      propsRef.current = null;
      reloadRef.current = null;
    }
    const backAction = () => {
      if (propsRef?.current?.onClose) {
        global.showModal({flag: false});
        return true;
      } else {
        return false;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShow]);
  if (!isShow) {
    return null;
  }
  const Component = componentRef.current;
  return (
    <Modal
      transparent={true}
      ref={ref}
      visible={isShow}
      onRequestClose={closeModal}>
      <View style={styles.container}>
        <Pressable
          onPress={closeModal}
          style={[styles.modalContainer, propsRef.current?.style]}
        />
        <Animated.View
          style={[styles.modalView, {transform: [{scale: scaleValue}]}]}>
          {Component && <Component {...propsRef.current?.componentProps} />}
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  modalView: {
    backgroundColor: customTheme.colors.elevation1,
    borderRadius: 4,
    width: '90%',
    padding: 16,
    shadowColor: customTheme.colors.pureBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default CustomModal;
