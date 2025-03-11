import {Animated, Easing} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Colors} from '../../assets/styles/colors.style.asset';
import {BottomTabInterface} from './interface';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {useTheme} from '@react-navigation/native';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';
import {customPadding} from '@styles/global.style.asset';

const BottomTabBarIcon: React.FC<
  Omit<BottomTabInterface, 'Component' | 'route'> & {focused: boolean}
> = ({Icon, focused}) => {
  const colorAnimation = useRef(new Animated.Value(focused ? 1 : 0)).current;
  const colors = useTheme().colors as Colors;
  // Animate color change based on the focused prop
  useEffect(() => {
    Animated.timing(colorAnimation, {
      toValue: focused ? 1 : 0,
      duration: 250,
      delay: 100,
      easing: Easing.out(Easing.cubic), // Smooth easing function
      useNativeDriver: false,
    }).start();
  }, [focused, colorAnimation]);

  // Interpolate the background color based on the animated value
  const backgroundColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [
      colors.transparent as string,
      hexOpacityToColor(colors.primary, 0.8),
    ],
  });

  return (
    <Animated.View
      style={[
        {
          padding: rs(4.2),
          borderRadius: rs(500),
          ...customPadding(4, 16, 4, 16),
        },
        {backgroundColor},
      ]}>
      <Icon fill={focused ? colors.white : colors.default1} />
    </Animated.View>
  );
};

export default BottomTabBarIcon;
