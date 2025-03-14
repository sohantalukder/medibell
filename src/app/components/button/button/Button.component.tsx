import {
  Text,
  StyleSheet,
  ActivityIndicator,
  ColorValue,
  View,
} from 'react-native';
import React from 'react';
import {typographies} from '../../../assets/styles/typographies.style.asset';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import {ButtonProps} from '../types/interface';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import CustomRipple from '../ripple/CustomRipple.c';

const Button: React.FC<ButtonProps> = ({
  text = '',
  borderRadius = 16,
  bgColor,
  textColor,
  textStyle = {},
  onPress = () => {},
  icon,
  isLoading,
  disabled,
  rippleColor,
  wrapStyle,
  iconPosition = 'left',
  variant = 'primary',
  activityColor,
}) => {
  const colors = useTheme().colors as Colors;
  const styles = buttonStyles(borderRadius, bgColor || colors.primary, colors);
  const handlePress = () => {
    if (!isLoading) {
      onPress();
    }
  };
  const renderButton = () => {
    return (
      <View style={styles.iconGap}>
        {iconPosition === 'left' && icon}
        {text && (
          <Text
            style={[
              typographies(colors).bodyLargeBold,
              {color: textColor || styles[variant].color || colors.default},
              textStyle,
            ]}
            numberOfLines={1}>
            {text}
          </Text>
        )}
        {iconPosition === 'right' && icon}
      </View>
    );
  };
  return (
    <CustomRipple
      onPress={handlePress}
      disabled={disabled}
      borderRadius={borderRadius}
      rippleColor={rippleColor}>
      <View style={[styles.container, styles[variant], wrapStyle]}>
        {isLoading ? (
          <ActivityIndicator color={activityColor || colors.default} />
        ) : (
          renderButton()
        )}
      </View>
    </CustomRipple>
  );
};
export default Button;

const buttonStyles = (
  borderRadius: number,
  bgColor: ColorValue,
  colors: Colors,
) =>
  StyleSheet.create({
    container: {
      borderRadius,
      backgroundColor: bgColor,
      flexShrink: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: rs(58),
      width: '100%',
      flexDirection: 'row',
    },
    iconGap: {flexDirection: 'row', gap: 10},
    primary: {
      backgroundColor: colors.primary,
      color: colors.white,
    },
    secondary: {
      backgroundColor: colors.default,
      color: colors.gray0,
    },
    disable: {
      backgroundColor: colors.gray9,
      color: colors.gray6,
    },
    error: {
      backgroundColor: colors.error1,
      color: colors.white,
    },
    outline: {
      backgroundColor: colors.transparent,
      color: colors.default1,
      borderWidth: 1,
      borderColor: colors.gray7,
    },
  });
