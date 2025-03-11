import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  Keyboard,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, {ReactElement, useCallback, useState} from 'react';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import ArrowDownIcon from '../../assets/icons/ArrowDown.icon.assets';
import MultipleSelect from '../bottom-sheet/select/MultipleSelect.bottomSheet';
import isEmpty from '../../helper/utilities/isEmpty.utility';
interface _props {
  label?: string;
  placeholder?: string;
  defaultValue?: Array<any>;
  onChange?: (props: any, params2: string) => void;
  data: Array<any>;
  formatter?: (params: string) => void;
  titleField?: string;
  name: string;
  titleFieldFormatter?: (params?: string) => string;
  labelStyle?: StyleProp<TextStyle>;
  icon?: ReactElement;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
const CustomMultipleSelect: React.FC<_props> = ({
  label,
  placeholder = '',
  defaultValue = [],
  style,
  containerStyle,
  onChange,
  titleField = 'FULL__DATA',
  data,
  formatter,
  name,
  titleFieldFormatter,
  labelStyle,
  icon,
}) => {
  const [values, setValues] = useState<Array<any>>(defaultValue);
  const handleOnChange = (_value: any, filed: string) => {
    setValues((prevData: any) => {
      let updatedArray;
      if (prevData?.includes(_value)) {
        updatedArray = prevData.filter((_i: any) => _i !== _value);
      } else {
        updatedArray = [...prevData, _value];
      }
      onChange && onChange(updatedArray, filed);
      return updatedArray;
    });
  };
  const onPress = () => {
    if (Keyboard.isVisible()) {
      Keyboard.dismiss();
    }
    global.showBottomSheet({
      flag: true,
      component: MultipleSelect as any,
      componentProps: {
        onChange: handleOnChange,
        data,
        title: label,
        titleField,
        titleFieldFormatter,
        checked: values,
        name,
        formatter,
      },
    });
  };
  const generateValues = useCallback((_data: any) => {
    return _data
      ?.map((___i: any) =>
        titleFieldFormatter
          ? titleFieldFormatter(___i)
          : titleField === 'FULL__DATA'
          ? ___i
          : ___i?.[titleField],
      )
      ?.join(', ');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <View style={style}>
      {label && (
        <View style={[globalStyles.flexRow, {gap: rs(8), marginBottom: rs(8)}]}>
          <Text
            style={[
              typographies.interMedium14,
              {color: customTheme.colors.black},
              labelStyle,
            ]}>
            {label}
          </Text>
          {icon}
        </View>
      )}
      <TouchableOpacity
        style={[styles.textContainer, containerStyle]}
        onPress={onPress}
        activeOpacity={0.6}>
        <Text
          style={[
            typographies.interNormal16,
            globalStyles.flexShrink1,
            globalStyles.flexGrow1,
            {
              color: isEmpty(values)
                ? customTheme.colors.grey4
                : customTheme.colors.black,
            },
          ]}
          numberOfLines={1}>
          {!isEmpty(values) ? generateValues(values) : placeholder}
        </Text>
        <View style={{transform: [{rotate: '270deg'}]}}>
          <ArrowDownIcon
            height={20}
            width={20}
            fill={customTheme.colors.pink}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomMultipleSelect;

const styles = StyleSheet.create({
  textContainer: {
    borderWidth: 1,
    borderColor: customTheme.colors.grey3,
    flexDirection: 'row',
    gap: 8,
    ...customPadding(17, 16, 17, 16),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: rs(16),
    height: 56,
  },
});
