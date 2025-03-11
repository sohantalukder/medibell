import React, {useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {customPadding} from '../../../assets/styles/global.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import {inputStyles} from '../styles/input.styles';
import {typographies} from '@styles/typographies.style.asset';

interface MultiTextInputProps extends Omit<TextInputProps, 'onChangeText'> {
  label?: string | number;
  onChangeText?: (text: string, name: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  containerStyle?: ViewStyle;
  labelColor?: string;
  labelStyle?: TextStyle;
  inputStyle?: ViewStyle;
  numberOfLines?: number;
  height?: number;
  name?: string;
  onChangeValue?: (text: string, value: string) => void;
}

const MultiTextInput = ({
  label = '',
  containerStyle,
  labelStyle = {},
  inputStyle = {},
  numberOfLines = 5,
  height = rs(150),
  name = '',
  placeholder,
  onChangeValue,
  defaultValue,
  ...props
}: MultiTextInputProps) => {
  const colors = useTheme().colors as Colors;
  const styles = inputStyles({colors});
  const containerRef = useRef<TextInput>(null);

  const onChangeText = (text: string) => {
    onChangeValue ? onChangeValue(text, name) : () => {};
  };
  const onFocusHandler = () => {
    props?.onFocus ? props?.onFocus() : () => {};
    console.log('first');
    containerRef.current?.setNativeProps({
      style: {...styles.activeContainer},
    });
  };

  const onBlurHandler = () => {
    props?.onBlur ? props?.onBlur() : () => {};
    containerRef.current?.setNativeProps({
      style: {...styles.multiLineContainer},
    });
  };

  return (
    <View
      style={[styles.multiLineContainer, containerStyle]}
      ref={containerRef}>
      <Text
        style={[
          typographies(colors).bodyLargeSemibold,
          {...customPadding(0, 0, 5)},
          labelStyle,
        ]}>
        {label}
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={numberOfLines}
        placeholder={placeholder}
        placeholderTextColor={colors.gray4}
        style={[styles.input, {height}, inputStyle]}
        defaultValue={defaultValue?.toString()}
        selectionColor={colors.default1}
        textAlignVertical="center"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        {...props}
        onChangeText={text => onChangeText(text)}
      />
    </View>
  );
};
export default MultiTextInput;
