import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {customPadding, globalStyles} from '@styles/global.style.asset';
import {typographies} from '@styles/typographies.style.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
interface badge {
  text: string;
  style?: ViewStyle;
  onPress?: () => void;
  textStyle?: TextStyle;
  textColor?: string;
  bgColor?: string;
  isLoading?: boolean;
}
const Badge: React.FC<badge> = ({
  text = '',
  style = {},
  onPress = () => {},
  textStyle = {},
  textColor,
  bgColor,
}) => {
  const colors = useTheme().colors as Colors;
  const styles = badgeStyles(
    textColor || colors.white,
    bgColor || colors.primary,
  );
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text
        style={[
          typographies(colors).bodyXLargeBold,
          styles.text,
          globalStyles.flexShrink1,
          textStyle,
        ]}
        numberOfLines={1}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Badge;

const badgeStyles = (textColor: string, bgColor: string) =>
  StyleSheet.create({
    container: {
      ...customPadding(2, 6, 2, 6),
      borderRadius: 100,
      alignItems: 'center',
      alignContent: 'center',
      backgroundColor: bgColor,
      alignSelf: 'flex-start',
    },
    text: {
      textAlign: 'center',
      textAlignVertical: 'center',
      color: textColor,
      width: '100%',
    },
  });
