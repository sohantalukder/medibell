import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MedicineIcon from '@icons/Medicine.icon';
import SettingIcon from '@icons/Setting.icon';
import CalenderIcon from '@icons/Calender.icon';
import TimeIcon from '@icons/Time.icon';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import {customMargin, globalStyles} from '@styles/global.style.asset';
import Animated, {FadeInDown} from 'react-native-reanimated';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import LinearGradient from 'react-native-linear-gradient';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';

const QuickActions = () => {
  const colors = useTheme().colors as Colors;
  const actions = [
    {
      title: 'Medicines',
      icon: MedicineIcon,
      colors: [colors.secondary, hexOpacityToColor(colors.secondary1, 0.9)],
      onPress: () => {},
    },
    {
      title: 'Calender View',
      icon: CalenderIcon,
      colors: [colors.tertiary, hexOpacityToColor(colors.tertiary1, 0.9)],
      onPress: () => {},
    },
    {
      title: 'History Log',
      icon: TimeIcon,
      colors: [colors.quaternary, hexOpacityToColor(colors.quaternary1, 0.9)],
      onPress: () => {},
    },
    {
      title: 'Refill Tracker',
      icon: SettingIcon,
      colors: [colors.quinary, hexOpacityToColor(colors.quinary1, 0.9)],
      onPress: () => {},
    },
  ];
  const styles = quickActionsStyles(colors);
  return (
    <View>
      <Text
        style={[typographies(colors).heading6, {...customMargin(16, 0, 16)}]}>
        Quick Actions
      </Text>
      <View style={styles.container}>
        {actions.map((item, index) => (
          <Animated.View
            key={item.title}
            entering={FadeInDown.delay(index * 100)
              .springify()
              .damping(10)}
            style={{width: rs('wf') / 2 - rs(25)}}>
            <LinearGradient
              locations={[0, 1]}
              colors={item.colors as string[]}
              style={{
                borderRadius: rs(16),
              }}>
              <RippleButton
                onPress={item.onPress}
                style={[globalStyles.widthFull]}>
                <View
                  style={{
                    padding: rs(16),
                    borderRadius: rs(16),
                    gap: rs(6),
                  }}>
                  <View style={styles.icon}>
                    <item.icon height={24} width={24} fill={colors.white} />
                  </View>
                  <Text
                    style={[
                      typographies(colors).bodyLargeBold,
                      {color: colors.white},
                    ]}>
                    {item.title}
                  </Text>
                </View>
              </RippleButton>
            </LinearGradient>
          </Animated.View>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;

const quickActionsStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      ...globalStyles.flexRow,
      flexWrap: 'wrap',
      ...globalStyles.flexGrow1,
    },
    icon: {
      backgroundColor: hexOpacityToColor(colors.white, 0.3),
      padding: rs(7),
      borderRadius: rs(12),
      alignSelf: 'flex-start',
    },
  });
