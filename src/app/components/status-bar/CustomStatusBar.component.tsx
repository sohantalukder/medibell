import React from 'react';
import {View, Platform, StatusBar} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import statusBarStyle from './style';
import {_statusBar} from './interface';
import {statusBar} from '../../assets/styles/properties.asset';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const CustomStatusBar: React.FC<_statusBar> = ({
  barStyle = statusBar.lightContent,
  showHeader = true,
  bgColor,
  extraHeight = 0,
}) => {
  const colors = useTheme().colors as Colors;
  const {top} = useSafeAreaInsets();
  const statusBarProps: any = {barStyle: barStyle, animated: true};
  const style = statusBarStyle({
    height: top,
    bgColor: bgColor || colors.transparent,
    extraHeight,
  });
  if (Platform.OS === 'android') {
    statusBarProps.translucent = true;
    statusBarProps.backgroundColor = bgColor;
  }
  if (!showHeader) {
    if (Platform.OS === 'android') {
      statusBarProps.backgroundColor = colors.transparent;
    }
    return <StatusBar {...statusBarProps} />;
  }
  return (
    <View style={style.container}>
      <StatusBar {...statusBarProps} />
    </View>
  );
};
export default CustomStatusBar;
