import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {customPadding} from '../../assets/styles/global.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';

interface ClickableTextProps {
  text: string;
  onPress?: () => void;
  hasUnderline?: boolean;
  style?: TextStyle;
  disabled?: boolean;
}
const ClickableText: React.FC<ClickableTextProps> = ({
  text = '',
  onPress = () => {},
  hasUnderline = false,
  style = {},
  disabled = false,
}) => {
  return (
    <Text
      onPress={onPress}
      disabled={disabled}
      style={[styles.text, hasUnderline ? styles.underline : {}, style]}>
      {text}
    </Text>
  );
};

export default ClickableText;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'flex-start',
    ...customPadding(0, 5, 0, 5),
    ...typographies.interNormal12,
    color: customTheme.colors.grey,
  },
  underline: {textDecorationLine: 'underline'},
});
