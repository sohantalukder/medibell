import {Text, ViewStyle, TextStyle, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Checkbox from '../check-box/CheckBox.component';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';

interface _props {
  text: string;
  defaultValue?: boolean;
  callBack?: (a: boolean) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}
const ItemSelect: React.FC<_props> = ({
  text,
  defaultValue,
  callBack,
  style,
  textStyle,
}) => {
  const [isSelect, setIsSelect] = useState<boolean>(defaultValue || false);
  useLayoutEffect(() => {
    setIsSelect(defaultValue || false);
  }, [defaultValue]);
  const onPress = () => {
    setIsSelect(!isSelect);
    callBack && callBack(!isSelect);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        globalStyles.flexRow,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          borderColor: isSelect
            ? customTheme.colors.pink
            : customTheme.colors.grey3,
          borderWidth: 1,
          ...customPadding(9, 16, 9, 16),
          borderRadius: 16,
        },
        style,
      ]}>
      <Checkbox size={rs(24)} defaultValue={isSelect} onChange={onPress} />
      <Text style={[typographies.interNormal14, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ItemSelect;
