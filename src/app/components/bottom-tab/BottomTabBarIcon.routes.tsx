import React, {useEffect, useMemo} from 'react';
import {Colors} from '../../assets/styles/colors.style.asset';
import {BottomTabInterface} from './interface';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {useTheme} from '@react-navigation/native';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';
import {customPadding} from '@styles/global.style.asset';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolateColor,
  FadeIn,
  FadeOut,
} from 'react-native-reanimated';

const BottomTabBarIcon: React.FC<
  Omit<BottomTabInterface, 'Component' | 'route'> & {focused: boolean}
> = ({Icon, FillIcon, focused}) => {
  const colorAnimation = useSharedValue(focused ? 1 : 0);
  const colors = useTheme().colors as Colors;

  // Precompute the hexOpacityToColor value outside the animation
  const activeBackgroundColor = useMemo(
    () => hexOpacityToColor(colors.primary, 0.2),
    [colors.primary],
  );

  // Animate color change based on the focused prop
  useEffect(() => {
    colorAnimation.value = withTiming(focused ? 1 : 0, {
      duration: 250,
      easing: Easing.out(Easing.cubic),
    });
  }, [focused, colorAnimation]);

  // Interpolate the background color based on the animated value
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        colorAnimation.value,
        [0, 1],
        [colors.transparent as string, activeBackgroundColor],
      ),
    };
  });

  return (
    <Animated.View
      style={[
        {
          padding: rs(4.2),
          borderRadius: rs(10),
          ...customPadding(4, 4, 4, 4),
        },
        animatedStyle,
      ]}>
      <Animated.View
        entering={FadeIn.delay(10).springify().damping(10)}
        exiting={FadeOut}>
        {focused ? <FillIcon /> : <Icon />}
      </Animated.View>
    </Animated.View>
  );
};

export default BottomTabBarIcon;
