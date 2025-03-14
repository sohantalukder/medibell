import {statusBar} from '../assets/styles/properties.asset';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';

interface ContainerProps {
  children: React.CElement;
  containerStyle?: StyleProp<ViewStyle>;
  bg?: ColorValue;
  showActivity?: boolean;
  showHeader?: boolean;
  statusBarStyle?: statusBar;
  statusBarBg?: ColorValue;
  activityBgColor?: ColorValue;
  ph?: number;
}

interface SplashContainerProps {
  children: React.CElement;
  containerStyle?: StyleProp<ViewStyle>;
  barStyle?: statusBar;
  showHeader?: boolean;
}
export type {ContainerProps, SplashContainerProps};
