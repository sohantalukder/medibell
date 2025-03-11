import React, {useLayoutEffect, useState} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import CheckboxActiveIcon from '../../assets/icons/CheckBoxActive.icon.asset';
import CheckboxInactiveIcon from '../../assets/icons/CheckBoxInactive.icon.asset';
import CheckboxActiveFillIcon from '../../assets/icons/CheckBoxActiveFill.icon.asset';

interface _props {
  style?: ViewStyle;
  defaultValue?: boolean;
  onChange?: (a: boolean) => void;
  fill?: boolean;
  size?: number;
}

const Checkbox: React.FC<_props> = ({
  defaultValue = false,
  onChange = () => {},
  style,
  fill = false,
  size = 24,
}) => {
  const [isSelect, setIsSelect] = useState(defaultValue);
  const handleOnPress = () => {
    setIsSelect(!isSelect);
    onChange && onChange(!isSelect);
  };
  useLayoutEffect(() => {
    setIsSelect(defaultValue);
  }, [defaultValue]);
  return (
    <TouchableOpacity activeOpacity={0.7} style={style} onPress={handleOnPress}>
      {isSelect ? (
        fill ? (
          <CheckboxActiveFillIcon height={size} width={size} />
        ) : (
          <CheckboxActiveIcon height={size} width={size} />
        )
      ) : (
        <CheckboxInactiveIcon height={size} width={size} />
      )}
    </TouchableOpacity>
  );
};
export default Checkbox;
