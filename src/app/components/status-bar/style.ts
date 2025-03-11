import {StyleSheet} from 'react-native';
import {_statusBarStyle} from './interface';
const statusBarStyle = (params: _statusBarStyle) =>
  StyleSheet.create({
    container: {
      backgroundColor: params.bgColor,
      paddingBottom: params.height + params.extraHeight,
    },
  });

export default statusBarStyle;
