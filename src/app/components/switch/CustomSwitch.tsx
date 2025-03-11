/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Animated, Pressable, StyleSheet} from 'react-native';
import {nativeDriver} from '../../assets/styles/properties.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
interface _customSwitch {
  value?: boolean;
  onPress?: (params1: boolean, params2: string) => void;
  activeColor?: string;
  name?: string;
  bgColor?: string;
}
const CustomSwitch: React.FC<_customSwitch> = ({
  value = false,
  activeColor = customTheme.colors.primary,
  onPress = () => {},
  name,
  bgColor = customTheme.colors.transparent,
}) => {
  const valueRef = useRef(false);
  const [show, setShow] = useState<boolean>(value);
  const translateRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    value ? handleSwitch(true) : handleSwitch(false);
    setShow(value);
  }, [value]);

  const handleSwitch = (flag = false) => {
    Animated.timing(translateRef, {
      toValue: flag ? 19 : 0,
      duration: 300,
      delay: 100,
      useNativeDriver: nativeDriver(),
    }).start(() => {
      valueRef.current = flag;
    });
  };

  const backgroundColor = translateRef.interpolate({
    inputRange: [0, 19],
    outputRange: [bgColor, activeColor],
    extrapolate: 'clamp',
  });
  const borderColor = translateRef.interpolate({
    inputRange: [0, 19],
    outputRange: [customTheme.colors.outline, activeColor],
    extrapolate: 'clamp',
  });
  const circleBG = translateRef.interpolate({
    inputRange: [0, 19],
    outputRange: [customTheme.colors.outline, customTheme.colors.elevation1],
    extrapolate: 'clamp',
  });
  const circleSize = translateRef.interpolate({
    inputRange: [0, 19],
    outputRange: [22, 24],
    extrapolate: 'clamp',
  });
  const paddingHorizontal = translateRef.interpolate({
    inputRange: [0, 19],
    outputRange: [4, 2],
    extrapolate: 'clamp',
  });
  const handlePress = () => {
    setShow(!show);
    onPress && onPress(!show, name ? name?.trim() : '');
    !show ? handleSwitch(true) : handleSwitch(false);
  };
  return (
    <Pressable onPress={handlePress}>
      <Animated.View
        style={[
          styles.containerStyle,
          {backgroundColor, paddingHorizontal, borderColor},
        ]}>
        <Animated.View
          style={[
            styles.circleStyle,
            {backgroundColor: circleBG, height: circleSize, width: circleSize},
            {
              transform: [
                {
                  translateX: translateRef,
                },
              ],
            },
            styles.shadowValue,
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  circleStyle: {
    borderRadius: 24,
  },
  containerStyle: {
    width: rs(52),
    height: rs(32),
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 2,
  },
  shadowValue: {
    shadowColor: customTheme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
