import {View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  FadeInDown,
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {useTheme} from '@react-navigation/native';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {Colors} from '@styles/colors.style.asset';
import {customPadding} from '@styles/global.style.asset';
import {globalStyles} from '@styles/global.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import RadioActive from '@icons/RadioActive.icon';
import RadioInActive from '@icons/RadioInActive.icon';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import rs from '@styles/responsiveSize.style.asset';
import {Gender} from '../SelectGender';

const EachGender = ({
  item,
  index,
  select,
  setSelect,
}: {
  item: Gender;
  index: number;
  select: number;
  setSelect: (select: number) => void;
}) => {
  const colors = useTheme().colors as Colors;
  const progress = useSharedValue(select === item.id ? 1 : 0);
  const scaleValue = useSharedValue(select === item.id ? 1 : 0);

  useEffect(() => {
    // Animate background and color transition
    progress.value = withTiming(select === item.id ? 1 : 0, {
      duration: 300,
    });

    // Animate scale transition
    scaleValue.value = withTiming(select === item.id ? 1 : 0, {
      duration: 200,
    });
  }, [select, item.id, progress, scaleValue]);

  // Background color animation
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.card.toString(), colors.primary.toString()],
    ),
  }));

  // Text color animation
  const animatedTextStyle = useAnimatedStyle(() => ({
    color: interpolateColor(
      progress.value,
      [0, 1],
      [colors.default1.toString(), colors.white.toString()],
    ),
  }));

  // Scale animation for icon
  const scaleStyle = useAnimatedStyle(() => ({
    transform: [{scale: scaleValue.value * 0.2 + 0.8}],
  }));
  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)
        .springify()
        .damping(10)}>
      <RippleButton
        onPress={() => {
          setSelect(item.id);
        }}
        borderRadius={rs(16)}>
        <Animated.View
          style={[
            globalStyles.rowBetween,
            animatedStyle,
            {
              ...customPadding(16, 16, 16, 16),
              borderRadius: rs(16),
            },
          ]}>
          <View style={globalStyles.flexRow}>
            <item.icon
              fill={select === item.id ? colors.white : colors.default1}
            />
            <Animated.Text
              style={[typographies(colors).bodyLargeBold, animatedTextStyle]}>
              {item.label}
            </Animated.Text>
          </View>
          <Animated.View style={scaleStyle}>
            {select === item.id ? (
              <RadioActive fill={colors.white} />
            ) : (
              <RadioInActive fill={colors.default1} />
            )}
          </Animated.View>
        </Animated.View>
      </RippleButton>
    </Animated.View>
  );
};

export default EachGender;
