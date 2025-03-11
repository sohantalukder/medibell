import React, {useMemo, useRef, useCallback} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  StyleProp,
} from 'react-native';
import {customPadding} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';

interface OTPInputProps {
  length?: number;
  callback?: (params: string) => void;
  style?: StyleProp<ViewStyle>;
}

const OTPInput: React.FC<OTPInputProps> = ({length = 6, callback, style}) => {
  const colors = useTheme().colors as Colors;
  const inputRefs = useRef<Array<TextInput | null>>(Array(length).fill(null));
  const values = useRef<Record<number, string>>({});

  const componentStyles = useMemo(() => styles(colors), [colors]);

  const handleFillUp = useCallback(() => {
    const number = Array.from({length})
      .map((_, i) => values.current[i] || '')
      .join('');

    if (number.length === length) {
      callback?.(number);
    }
  }, [callback, length]);

  const handleOnFocus = useCallback(
    (index: number) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]?.setNativeProps({
          style: componentStyles.focus,
        });
      }
    },
    [componentStyles.focus],
  );

  const handleOnBlur = useCallback(
    (index: number) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index]?.setNativeProps({
          style: componentStyles.input,
        });
      }
    },
    [componentStyles.input],
  );

  const setInputValue = useCallback((index: number, value: string) => {
    values.current[index] = value;
    inputRefs.current[index]?.setNativeProps({text: value});
  }, []);

  const handlePaste = useCallback(
    (text: string, currentIndex: number) => {
      // Clean the pasted text to only include numbers
      const cleanText = text.replace(/[^0-9]/g, '');

      // Handle each character of the pasted text
      for (
        let i = 0;
        i < Math.min(cleanText.length, length - currentIndex);
        i++
      ) {
        const targetIndex = currentIndex + i;
        setInputValue(targetIndex, cleanText[i]);
      }

      // Focus the next empty input or the last input
      const nextFocusIndex = Math.min(
        currentIndex + cleanText.length,
        length - 1,
      );
      inputRefs.current[nextFocusIndex]?.focus();

      // Check if OTP is complete after a short delay to ensure all values are set
      if (currentIndex + cleanText.length >= length) {
        setTimeout(handleFillUp, 50);
      }
    },
    [length, handleFillUp, setInputValue],
  );

  const handleBackspace = useCallback(
    (index: number) => {
      // If current input is empty and not the first input, move to previous
      if (!values.current[index] && index > 0) {
        setInputValue(index - 1, '');
        inputRefs.current[index - 1]?.focus();
        handleOnBlur(index);
      } else {
        // Clear current input
        setInputValue(index, '');
      }
    },
    [handleOnBlur, setInputValue],
  );

  const handleKeyPress = useCallback(
    (
      event: NativeSyntheticEvent<TextInputKeyPressEventData>,
      index: number,
    ) => {
      const {key} = event.nativeEvent;

      if (key === 'Backspace') {
        // Prevent default behavior
        event.preventDefault?.();
        handleBackspace(index);
      }
    },
    [handleBackspace],
  );

  const renderInputs = useMemo(
    () =>
      Array.from({length}).map((_, index) => (
        <TextInput
          key={index}
          ref={el => (inputRefs.current[index] = el)}
          style={componentStyles.input}
          maxLength={index === length - 1 ? 1 : undefined}
          inputMode="numeric"
          keyboardType="number-pad"
          placeholder="0"
          autoComplete="one-time-code"
          placeholderTextColor={colors.gray7}
          selectionColor={colors.primary}
          selectTextOnFocus
          onFocus={() => handleOnFocus(index)}
          onBlur={() => handleOnBlur(index)}
          textAlignVertical="center"
          onKeyPress={e => handleKeyPress(e, index)}
          onChangeText={text => {
            // Handle backspace through text change
            if (text === '') {
              handleBackspace(index);
              return;
            }

            // Check if this might be a paste operation
            if (text.length > 1) {
              handlePaste(text, index);
            } else {
              // Handle single digit input
              setInputValue(index, text);
              if (text && index < length - 1) {
                inputRefs.current[index + 1]?.focus();
              }
              if (index === length - 1 && text) {
                handleFillUp();
              }
            }
          }}
        />
      )),
    [
      colors.gray7,
      colors.primary,
      componentStyles.input,
      handleOnFocus,
      handleOnBlur,
      handleKeyPress,
      handlePaste,
      handleBackspace,
      length,
      setInputValue,
      handleFillUp,
    ],
  );

  return <View style={[componentStyles.container, style]}>{renderInputs}</View>;
};

export default OTPInput;

const styles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: rs(12),
    },
    input: {
      borderRadius: rs(15),
      ...typographies(colors).heading2,
      backgroundColor: colors.transparent,
      ...customPadding(7, 10, 7, 9),
      textAlign: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      height: rs(60),
      width: rs(45),
      borderColor: colors.gray6,
      gap: 9,
    },
    focus: {
      borderColor: colors.primary,
      backgroundColor: hexOpacityToColor(colors.primary, 0.1),
    },
  });
