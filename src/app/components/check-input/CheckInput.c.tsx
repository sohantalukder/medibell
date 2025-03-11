import {View, Text, ViewStyle} from 'react-native';
import React from 'react';
import CustomSwitch from '../switch/CustomSwitch';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {globalStyles} from '../../assets/styles/global.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import rs from '../../assets/styles/responsiveSize.style.asset';
interface props {
  label?: string;
  style?: ViewStyle;
  defaultValue?: boolean;
  name?: string;
  onChange?: (params1: boolean, params2: string) => void;
}
const CheckInput: React.FC<props> = ({
  label,
  style,
  onChange,
  defaultValue,
  name,
}) => {
  return (
    <View
      style={[
        globalStyles.rowBetween,
        {
          borderBottomWidth: rs(1.1),
          borderBottomColor: customTheme.colors.light2,
          paddingBottom: rs(14),
        },
        style,
      ]}>
      <Text
        style={[
          typographies.interMedium16,
          globalStyles.flexShrink1,
          {color: customTheme.colors.black},
        ]}>
        {label}
      </Text>
      <CustomSwitch name={name} value={defaultValue} onPress={onChange} />
    </View>
  );
};

export default CheckInput;
