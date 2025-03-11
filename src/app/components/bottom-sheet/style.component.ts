import {StyleSheet} from 'react-native';
import rs from '../../assets/styles/responsiveSize.style.asset';
import {Colors} from '@styles/colors.style.asset';
import hexToRgbA from '@components/button/ripple/hexaToRgba';

const bottomSheetStyles = (colors: Colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      position: 'absolute',
      left: 0,
      bottom: 0,
      height: rs('hf'),
      width: rs('wf'),
      zIndex: 999,
    },
    backdrop: {backgroundColor: hexToRgbA(colors.default1, 0.1), flex: 1},
    backdropHandler: {flex: 1},
    viewContainer: {
      height: 'auto',
      maxHeight: '75%',
      minHeight: '15%',
      backgroundColor: colors.background,
      paddingTop: 12,
      paddingBottom: 13,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
    },
    topBar: {
      alignSelf: 'center',
      width: rs(36),
      height: 5,
      backgroundColor: colors.gray5,
    },
  });
export default bottomSheetStyles;
