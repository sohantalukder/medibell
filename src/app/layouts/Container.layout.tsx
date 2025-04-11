import React from 'react';
import {StyleSheet, View, useColorScheme} from 'react-native';
import {globalStyles} from '@styles/global.style.asset';
import {statusBar} from '@styles/properties.asset';
import {ContainerProps} from '@layouts/interface';
import CustomStatusBar from '@components/status-bar/CustomStatusBar.component';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const Container: React.FC<ContainerProps> = ({
  children,
  containerStyle = {},
  bg,
  showHeader = true,
  statusBarBg,
  statusBarStyle,
  ph = 0,
}) => {
  const colors = useTheme().colors as Colors;
  const colorScheme = useColorScheme();
  return (
    <View style={globalStyles.flex1}>
      <CustomStatusBar
        bgColor={statusBarBg || colors.background}
        showHeader={showHeader}
        barStyle={
          statusBarStyle
            ? statusBarStyle
            : colorScheme === 'dark'
            ? statusBar.lightContent
            : statusBar.darkContent
        }
      />
      <View
        style={[styles(bg || colors.background, ph).container, containerStyle]}>
        {children}
      </View>
    </View>
  );
};
export default Container;

const styles = (bgColor: any, ph: any) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flex: 1,
      position: 'relative',
      paddingHorizontal: ph,
    },
  });
