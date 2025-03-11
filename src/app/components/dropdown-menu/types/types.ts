import {ColorValue, StyleProp, ViewStyle} from 'react-native';

interface DropdownMenuProps extends DropdownMenuStylesProps {
  show: boolean;
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  position?: {top: number; right: number; bottom: number; left: number};
}
interface DropdownMenuStylesProps {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  bgColor?: ColorValue;
  shadowColor?: ColorValue;
}
export type {DropdownMenuProps, DropdownMenuStylesProps};
