import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '@layouts/Container.layout';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  withTiming,
  useSharedValue,
  interpolateColor,
} from 'react-native-reanimated';
import ManIcon from '@icons/Man.icon';
import WomanIcon from '@icons/Woman.icon';
import OthersIcon from '@icons/Others.icon';
import {IconProps} from '@entity-models/iconProps.types';
import {
  customMargin,
  customPadding,
  globalStyles,
} from '@styles/global.style.asset';
import RadioActive from '@icons/RadioActive.icon';
import RadioInActive from '@icons/RadioInActive.icon';
import rs from '@styles/responsiveSize.style.asset';
import RippleButton from '@components/button/ripple/CustomRipple.c';
interface Gender {
  id: number;
  label: string;
  icon: React.FC<IconProps>;
}
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
    transform: [{scale: scaleValue.value * 0.2 + 0.8}], // Scale from 0.8 to 1
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
const SelectGender = () => {
  const colors = useTheme().colors as Colors;
  const genderArray: Gender[] = [
    {id: 1, label: 'Male', icon: ManIcon},
    {id: 2, label: 'Female', icon: WomanIcon},
    {id: 3, label: 'Other', icon: OthersIcon},
  ];
  const [select, setSelect] = useState<number>(0);
  return (
    <Container ph={20}>
      <Text
        style={[typographies(colors).bodyLargeSemibold, styles.skipText]}
        onPress={() => console.log('object')}>
        Skip
      </Text>
      <Text
        style={[typographies(colors).heading5, {...customMargin(80, 0, 24)}]}>
        Select Your Gender
      </Text>
      <Animated.View style={styles.genderContainer}>
        {genderArray.map((item, index) => (
          <EachGender
            item={item}
            key={item.id}
            index={index}
            select={select}
            setSelect={setSelect}
          />
        ))}
      </Animated.View>
    </Container>
  );
};

export default SelectGender;

const styles = StyleSheet.create({
  skipText: {
    textAlign: 'right',
  },
  genderContainer: {
    gap: 16,
  },
});
