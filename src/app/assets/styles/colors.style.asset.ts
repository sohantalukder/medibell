import hexToRgbA from '@components/button/ripple/hexaToRgba';
import {
  DarkTheme,
  DefaultTheme,
  Theme,
} from '@react-navigation/native';
import {ColorValue} from 'react-native';

type ColorMode = 'light' | 'dark';
interface Colors {
  primary: ColorValue;
  secondary: ColorValue;
  badgeColor: ColorValue;
  black: ColorValue;
  white: ColorValue;
  transparent: ColorValue;
  default: ColorValue;
  default1: ColorValue;
  whiteOpacity: ColorValue;
  gray0: ColorValue;
  gray1: ColorValue;
  gray2: ColorValue;
  gray3: ColorValue;
  gray4: ColorValue;
  gray5: ColorValue;
  gray6: ColorValue;
  gray7: ColorValue;
  gray8: ColorValue;
  gray9: ColorValue;
  gray10: ColorValue;
  background: ColorValue;
  success1: ColorValue;
  success2: ColorValue;
  success3: ColorValue;
  error1: ColorValue;
  error2: ColorValue;
  error3: ColorValue;
  info1: ColorValue;
  gray2Opacity2: ColorValue;
  card: ColorValue;
  text: ColorValue;
  border: ColorValue;
  notification: ColorValue;
  rippleColor: ColorValue;
  placeHolderBg: ColorValue;
  placeHolder: ColorValue;
  shadow: ColorValue;
}

interface ThemeColors extends Omit<Theme, 'colors'> {
  colors: Colors;
}

const navigationTheme = (colors: Colors, isDark: boolean): Theme => ({
  dark: isDark,
  colors: {
    ...isDark ? DarkTheme.colors : DefaultTheme.colors,
    primary: colors.primary as string,
    background: colors.background as string,
    card: colors.card as string,
    text: colors.text as string,
    border: colors.border as string,
    notification: colors.notification as string,
  },
  fonts: DefaultTheme.fonts
});

const appColors: Record<ColorMode, ThemeColors> & { getNavigationTheme: (mode: ColorMode) => Theme } = {
  light: {
    ...DefaultTheme,
    colors: {
      primary: '#006DF5',
      secondary: '#F4F4F4',
      badgeColor: '#E8191C',
      black: '#000000',
      white: '#ffffff',
      default: '#FAFAFB',
      default1: '#1B1D20',
      transparent: 'transparent',
      whiteOpacity: '#FF573300',
      gray0: '#1B1D20',
      gray1: '#323436',
      gray2: '#494A4D',
      gray3: '#5F6163',
      gray4: '#767779',
      gray5: '#98999B',
      gray6: '#AFB0B1',
      gray7: '#DDDDDE',
      gray8: '#E8E8E9',
      gray9: '#F4F4F4',
      gray10: '#FAFAFA',
      background: '#FAFAFB',
      success1: '#3B8756',
      success2: '#CEFDD6',
      success3: '#F7FFF5',
      error1: '#E8191C',
      error2: '#FFECEA',
      error3: '#FFFBFF',
      info1: '#EFCC41',
      gray2Opacity2: '#32343633',
      card: '#FFFFFF',
      text: '#FFFFFF',
      border: '#FFFFFF',
      notification: '#FFFFFF',
      rippleColor: '#000000',
      placeHolderBg: '#DDDDDE',
      placeHolder: '#FFFFFF',
      shadow: '#04060F',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      primary: '#006DF5',
      secondary: '#2C2C2C',
      badgeColor: '#9F1210',
      black: '#000000',
      white: '#FFFFFF',
      default: '#080402',
      default1: '#FAFAFB',
      transparent: 'transparent',
      whiteOpacity: '#252525',
      gray0: '#F4F4F4',
      gray1: '#DDDDDE',
      gray2: '#B0B1B2',
      gray3: '#9A9B9D',
      gray4: '#7C7D7F',
      gray5: '#616263',
      gray6: '#4A4B4D',
      gray7: '#373839',
      gray8: '#2C2D2F',
      gray9: '#080402',
      gray10: '#1F222A',
      background: '#080402',
      success1: '#3B8756',
      success2: '#CEFDD6',
      success3: '#F7FFF5',
      error1: '#E8191C',
      error2: '#FFECEA',
      error3: '#FFFBFF',
      info1: '#EFCC41',
      gray2Opacity2: '#32343666',
      card: '#080402',
      text: '#080402',
      border: '#080402',
      notification: '#000000',
      rippleColor: '#FFFFFF',
      placeHolderBg: '#2C2D2F',
      placeHolder: hexToRgbA('#FFFFFF', 0.5),
      shadow: '#B0B1B2',
    },
  },
  getNavigationTheme: (mode: ColorMode) => navigationTheme(appColors[mode].colors, mode === 'dark'),
};

export type {ColorMode, Colors};
export default appColors;
