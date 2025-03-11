import {statusBar} from '../assets/styles/properties.asset';
// import {customTheme} from '../assets/styles/colors.style.asset';
import {StyleProp, ViewStyle} from 'react-native';

interface ContainerProps {
  children: React.CElement;
  containerStyle?: StyleProp<ViewStyle>;
  bg?: colors;
  showActivity?: boolean;
  showHeader?: boolean;
  statusBarStyle?: statusBar;
  statusBarBg?: colors;
  activityBgColor?: colors;
  ph?: number;
}

interface SplashContainerProps {
  children: React.CElement;
  containerStyle?: StyleProp<ViewStyle>;
  barStyle?: statusBar;
  showHeader?: boolean;
}
export type {ContainerProps, SplashContainerProps};
