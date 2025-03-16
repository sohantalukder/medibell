import {View, Text, Animated} from 'react-native';
import React, {useState} from 'react';
import {globalStyles, themedGlobalStyles} from '@styles/global.style.asset';
import {howOftenArray} from '../constant/medicine.constant';
import RippleButton from '@components/button/ripple/CustomRipple.c';
import rs from '@styles/responsiveSize.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';

const HowOften = () => {
  const colors = useTheme().colors as Colors;
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <View style={[globalStyles.flexRow, {flexWrap: `${'wrap'}`}]}>
      {howOftenArray.map(item => (
        <Animated.View key={item.id}>
          <RippleButton onPress={() => setSelected(item.id)}>
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
    </View>
  );
};

export default HowOften;
