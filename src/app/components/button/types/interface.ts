import {IconProps} from '@entity-models/iconProps.types';
import {ReactElement} from 'react';
import {TextStyle, StyleProp, ViewStyle, ColorValue} from 'react-native';

interface ButtonProps {
  text: string;
  bgColor?: ColorValue;
  wrapStyle?: StyleProp<ViewStyle>;
  borderRadius?: number;
  textColor?: ColorValue;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  icon?: ReactElement<IconProps>;
  isLoading?: boolean;
  disabled?: boolean;
  rippleColor?: ColorValue;
  variant?: 'primary' | 'secondary' | 'disable' | 'error' | 'outline';
  iconPosition?: 'left' | 'right';
  activityColor?: ColorValue;
}
interface GradientButtonProps {
  text: string;
  gradient?: string[];
  style?: StyleProp<ViewStyle>;
  borderRadius?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;
  onPress?: () => void;
  icon?: ReactElement<IconProps>;
  isLoading?: boolean;
  disabled?: boolean;
}
interface IconButtonProps {
  icon: ReactElement<IconProps>;
  onPress?: () => void;
  bgColor?: ColorValue;
  borderColor?: ColorValue;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  rippleColor?: ColorValue;
  borderRadius?: number;
}
interface RippleButtonProps {
  children: React.ReactElement;
  borderRadius?: number;
  onPress?: () => void;
  rippleScale?: number;
  duration?: number;
  overflow?: boolean;
  rippleColor?: ColorValue;
  rippleOpacity?: number;
  disabled?: boolean;
  haptic?: boolean;
}

export type {
  ButtonProps,
  RippleButtonProps,
  GradientButtonProps,
  IconButtonProps,
};
