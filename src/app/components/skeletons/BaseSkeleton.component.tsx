import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import React, {useEffect, useRef} from 'react';
import {Animated, DimensionValue, Platform, ViewStyle} from 'react-native';

interface baseSkeletonProps {
  width?: DimensionValue;
  height?: DimensionValue;
  borderRadius?: number;
  bgColor?: string;
  style?: ViewStyle;
}
const nativeDriver = (flag = true) => {
  return Platform.OS === 'android' ? flag : false;
};
const BaseSkeleton: React.FC<baseSkeletonProps> = ({
  width = 50,
  height = 30,
  borderRadius = 0,
  bgColor,
  style,
}) => {
  const opacity = useRef(new Animated.Value(0.3));
  const colors = useTheme().colors as Colors;
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity.current, {
          toValue: 1,
          useNativeDriver: nativeDriver(),
          duration: 500,
        }),
        Animated.timing(opacity.current, {
          toValue: 0.3,
          useNativeDriver: nativeDriver(),
          duration: 800,
        }),
      ]),
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          opacity: opacity.current,
          height: height,
          width: width,
          backgroundColor: bgColor ? bgColor : colors.gray6,
          borderRadius: borderRadius,
        },
        style as ViewStyle,
      ]}
    />
  );
};

export default BaseSkeleton;
