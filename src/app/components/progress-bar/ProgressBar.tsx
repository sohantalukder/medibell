import React from 'react';
import {DimensionValue, StyleSheet, View, ViewStyle} from 'react-native';
import {customTheme} from '../../assets/styles/colors.style.asset';
interface _progressBar {
  width?: DimensionValue;
  style?: ViewStyle;
  color?: string;
}
const ProgressBar: React.FC<_progressBar> = ({
  width = '10%',
  style = {},
  color,
}) => {
  const styles = progressBarStyle(width, color);
  return (
    <View style={[styles.container, style]}>
      <View style={styles.progressBar} />
    </View>
  );
};
export default ProgressBar;

const progressBarStyle = (width?: DimensionValue, color?: string) =>
  StyleSheet.create({
    container: {
      height: 3,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: customTheme.colors.light2,
      borderRadius: 30,
    },
    progressBar: {
      backgroundColor: color ? color : customTheme.colors.orange,
      borderRadius: 30,
      width: width,
    },
  });
