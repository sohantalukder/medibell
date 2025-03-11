import React from 'react';
import {ColorValue, StyleSheet, View, useColorScheme} from 'react-native';
import {globalStyles} from '@styles/global.style.asset';
import {Colors} from '@styles/colors.style.asset';
import {useTheme} from '@react-navigation/native';
import {SplashContainerProps} from '@layouts/interface';
import CustomStatusBar from '../components/status-bar/CustomStatusBar.component';

const SplashContainer: React.FC<SplashContainerProps> = ({
  children,
  containerStyle,
  barStyle,
  showHeader = false,
}) => {
  const colors = useTheme().colors as Colors;
  const scheme = useColorScheme();
  return (
    <View style={globalStyles.flex1}>
      <CustomStatusBar
        bgColor={colors.transparent}
        showHeader={showHeader}
        barStyle={
          barStyle || scheme === 'dark' ? 'light-content' : 'dark-content'
        }
      />
      <View style={[styles(colors.default).container, containerStyle]}>
        {children}
      </View>
    </View>
  );
};
export default SplashContainer;

const styles = (bgColor: ColorValue) =>
  StyleSheet.create({
    container: {
      backgroundColor: bgColor,
      flex: 1,
      position: 'relative',
    },
  });
