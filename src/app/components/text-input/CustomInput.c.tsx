import React, {useRef} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {CustomInputProps} from './interface/inputInterface';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {inputStyles} from './styles/input.styles';
import {typographies} from '@styles/typographies.style.asset';
import {customPadding, globalStyles} from '@styles/global.style.asset';

const CustomInput: React.FC<CustomInputProps> = ({
  rightHandler,
  leftIcon,
  rightIcon,
  placeholder = '',
  onChangeText,
  defaultValue = '',
  name,
  validationRules = undefined,
  inputProps = {},
  style = {},
  label,
  wrapperStyle,
  labelStyle,
}) => {
  const colors = useTheme().colors as Colors;
  const colorScheme = useColorScheme();
  const styles = inputStyles({colors, mode: colorScheme});
  const containerRef = useRef<TextInput>(null);
  const handleOnChange = (text: string) => {
    if (name && name?.trim() !== '') {
      onChangeText(text, name, validationRules);
    } else {
      onChangeText(text, undefined, validationRules);
    }
  };
  const handleOnFocus = () => {
    containerRef.current?.setNativeProps({
      style: {...styles.activeContainer},
    });
  };
  const handleOnBlur = () => {
    containerRef.current?.setNativeProps({
      style: {...styles.container},
    });
  };
  return (
    <View
      style={[globalStyles.widthFull, globalStyles.flexShrink1, wrapperStyle]}>
      {label && (
        <Text
          style={[
            typographies(colors).bodyLargeSemibold,
            {...customPadding(0, 0, 5)},
            labelStyle,
          ]}>
          {label}
        </Text>
      )}
      <View style={[styles.container, style]} ref={containerRef}>
        {leftIcon && <View>{leftIcon}</View>}
        <TextInput
          style={styles.input}
          numberOfLines={1}
          onChangeText={handleOnChange}
          placeholder={placeholder}
          placeholderTextColor={colors.gray4}
          defaultValue={defaultValue?.toString()}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          {...inputProps}
        />
        {rightIcon && (
          <TouchableOpacity activeOpacity={0.5} onPress={rightHandler}>
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
