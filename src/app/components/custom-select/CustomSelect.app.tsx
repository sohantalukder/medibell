import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, {ReactElement, useEffect, useState} from 'react';
import BottomSheetSelect from '../bottom-sheet/select';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import DownArrowIcon from '@icons/DownArrow.icon';
interface _props {
  label?: string;
  placeholder?: string;
  defaultValue?: string;
  data?: Array<any>;
  onChange?: (props: any, name: string) => void;
  titleField?: string;
  name: string;
  titleFieldFormatter?: (params?: string) => string;
  formatter?: (params: string) => void;
  labelStyle?: StyleProp<TextStyle>;
  icon?: ReactElement;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  component?: React.ReactElement;
}
const CustomSelect: React.FC<_props> = ({
  label,
  placeholder = '',
  defaultValue,
  data = [],
  onChange,
  style,
  titleField = 'FULL__DATA',
  name,
  titleFieldFormatter,
  formatter,
  labelStyle,
  icon,
  component,
}) => {
  const [value, setValue] = useState<any>(null);
  const colors = useTheme().colors as Colors;
  const handleChange = (item: any) => {
    onChange && onChange(item._id, name);
    setValue(item);
  };
  useEffect(() => {
    if (defaultValue) {
      const _i = data.find((item: any) => {
        return (
          (item?._id ||
            (titleField !== 'FULL__DATA' ? item?.[titleField] : item)) ===
          defaultValue
        );
      });
      if (_i) {
        setValue(_i);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);
  const onPress = () => {
    global.showBottomSheet({
      flag: true,
      component: component ? component : (BottomSheetSelect as any),
      componentProps: {
        options: {
          data,
          selectedValue: value,
          titleField,
          titleFieldFormatter,
          formatter,
          title: label,
        },
        onChange: handleChange,
      },
    });
  };
  return (
    <View style={style}>
      {label && (
        <View style={[globalStyles.flexRow, {gap: rs(8), marginBottom: rs(8)}]}>
          <Text
            style={[
              typographies(colors).bodyLargeRegular,
              {color: colors.black},
              labelStyle,
            ]}>
            {label}
          </Text>
          {icon}
        </View>
      )}
      <TouchableOpacity
        style={styles(colors).textContainer}
        onPress={onPress}
        activeOpacity={0.6}>
        <Text
          style={[
            typographies(colors).bodyLargeRegular,
            globalStyles.flexShrink1,
            globalStyles.flexGrow1,
            {
              color: !value ? colors.gray4 : colors.black,
            },
          ]}
          numberOfLines={1}>
          {(titleFieldFormatter
            ? titleFieldFormatter(value)
            : titleField === 'FULL__DATA'
            ? value
            : value?.[titleField]) || placeholder}
        </Text>
        <View style={{transform: [{rotate: '270deg'}]}}>
          <DownArrowIcon height={20} width={20} fill={colors.default1} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSelect;

const styles = (colors: Colors) =>
  StyleSheet.create({
    textContainer: {
      borderWidth: 1,
      borderColor: colors.gray3,
      flexDirection: 'row',
      gap: 8,
      ...customPadding(17, 16, 17, 16),
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: rs(16),
      height: 56,
    },
  });
