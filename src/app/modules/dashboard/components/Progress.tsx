import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps,
} from 'react-native-reanimated';
import rs from '@styles/responsiveSize.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';
import {typographies} from '@styles/typographies.style.asset';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress = ({progress = 12}) => {
  const size = rs('wf') / 2;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const colors = useTheme().colors as Colors;
  const animatedProgress = useSharedValue(0);

  useEffect(() => {
    animatedProgress.value = withTiming(progress, {duration: 1000});
  }, [progress, animatedProgress]);

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset:
      circumference - (circumference * animatedProgress.value) / 100,
  }));

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>
        {/* Background Circle */}
        <Circle
          stroke={hexOpacityToColor(colors.white, 0.3)}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
        />
        {/* Animated Circle */}
        <AnimatedCircle
          stroke={colors.white}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          animatedProps={animatedProps}
        />
      </Svg>
      {/* Percentage Text */}
      <View style={styles.textContainer}>
        <Text
          style={[
            typographies(colors).heading3,
            {color: colors.white},
          ]}>{`${progress}%`}</Text>
        <Text
          style={[
            typographies(colors).bodySmallMedium,
            {marginTop: rs(4), color: colors.white},
          ]}>
          1 of 8 doses
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
});

export default CircularProgress;
