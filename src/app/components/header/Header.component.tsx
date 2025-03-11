import React from 'react';
import IconButton from '../button/icon-button/IconButton.component';
import {useNavigation, useTheme} from '@react-navigation/native';
import {
  ColorValue,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {
  customPadding,
  globalStyles,
} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import LeftArrowIcon from '@icons/LeftArrow.icon';
import {IconProps} from '@entity-models/iconProps.types';
import {Colors} from '@styles/colors.style.asset';
interface _props {
  style?: StyleProp<ViewStyle>;
  rightComponent?: React.ReactElement;
  text?: string;
  textStyle?: TextStyle;
  iconStyle?: ViewStyle;
  iconFill?: ColorValue;
  leftControl?: () => void;
  showLeft?: boolean;
  LeftIcon?: React.FC<IconProps>;
}
const Header: React.FC<_props> = ({
  style,
  text,
  rightComponent,
  iconStyle,
  textStyle,
  iconFill,
  leftControl,
  showLeft = true,
  LeftIcon = LeftArrowIcon,
}) => {
  const colors = useTheme().colors as Colors;
  const navigation = useNavigation();
  return (
    <View
      style={[
        globalStyles.rowBetween,
        {...customPadding(0, 18, 0, 18)},
        globalStyles.widthFull,
        style,
      ]}>
      {showLeft && (
        <IconButton
          style={iconStyle}
          icon={<LeftIcon fill={iconFill || colors.default1} />}
          borderRadius={50}
          onPress={() =>
            leftControl
              ? leftControl()
              : navigation.canGoBack()
              ? navigation.goBack()
              : undefined
          }
        />
      )}
      {text && (
        <Text
          style={[styles(colors).text, textStyle, globalStyles.flexShrink1]}>
          {text}
        </Text>
      )}
      <View>{rightComponent}</View>
    </View>
  );
};

export default Header;

const styles = (colors: Colors) =>
  StyleSheet.create({
    text: {
      ...typographies(colors).heading5,
      marginBottom: -3,
      width: '100%',
    },
  });
