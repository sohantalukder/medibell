import {StyleSheet, View} from 'react-native';
import React from 'react';
import rs from '../../../assets/styles/responsiveSize.style.asset';
import RippleButton from '../ripple/CustomRipple.c';
import {IconButtonProps} from '../types/interface';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  bgColor,
  style,
  disabled,
  borderRadius = rs(500),
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <RippleButton
      borderRadius={borderRadius}
      disabled={disabled}
      onPress={onPress}>
      <View
        style={[
          styles.container,
          {backgroundColor: bgColor || colors.transparent, borderRadius},
          style,
        ]}>
        {icon}
      </View>
    </RippleButton>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: rs(48),
    width: rs(48),
    padding: 0,
    borderRadius: rs(5000),
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 0,
    backgroundColor: 'red',
  },
});
