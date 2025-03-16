import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  globalStyles,
  themedGlobalStyles,
  customPadding,
} from '@styles/global.style.asset';
import {howOftenArray} from '../constant/medicine.constant';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import rs from '@styles/responsiveSize.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import TimeInput from '@components/date-time/time-input/TimeInput.component';
import Animated, {FadeInDown, FadeInUp} from 'react-native-reanimated';

const HowOften = () => {
  const colors = useTheme().colors as Colors;
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <View>
      <Text
        style={[
          typographies(colors).bodyLargeSemibold,
          {...customPadding(0, 0, 5)},
        ]}>
        How Often
      </Text>
      <View style={[globalStyles.flexRow, {flexWrap: `${'wrap'}`}]}>
        {howOftenArray.map((item, index) => (
          <Animated.View
            key={item.id}
            entering={FadeInDown.duration(index * 100)
              .springify()
              .damping(10)}>
            <RippleButton
              onPress={() => setSelected(item.id)}
              borderRadius={10}>
              <View
                style={[
                  globalStyles.alignJustifyCenter,
                  themedGlobalStyles(colors).shadow,
                  {
                    width: rs('wf') / 3 - 20,
                    backgroundColor:
                      selected === item.id ? colors.default1 : colors.default,
                    borderRadius: rs(10),
                    gap: rs(10),
                    padding: rs(10),
                  },
                ]}>
                <item.icon
                  width={rs(24)}
                  height={rs(24)}
                  fill={selected === item.id ? colors.default : colors.default1}
                />
                <Text
                  style={[
                    typographies(colors).bodyMediumSemibold,
                    {
                      color:
                        selected === item.id ? colors.default : colors.default1,
                    },
                  ]}
                  numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            </RippleButton>
          </Animated.View>
        ))}
        {selected === 5 && (
          <Animated.View
            entering={FadeInUp.duration(100).springify().damping(10)}
            exiting={FadeInDown.duration(50).springify(50).damping(50)}
            style={{
              marginTop: rs(24),
            }}>
            <TimeInput onChange={() => {}} />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

export default HowOften;
