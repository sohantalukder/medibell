import {StyleSheet} from 'react-native';
import {Colors} from '@styles/colors.style.asset';
import rs from '@styles/responsiveSize.style.asset';

const dashboardStyles = (colors: Colors) =>
  StyleSheet.create({
    notificationCount: {
      position: 'absolute',
      top: -2,
      right: -2,
      backgroundColor: colors.error1,
      borderRadius: rs(24),
      alignItems: 'center',
      justifyContent: 'center',
      width: rs(16),
      height: rs(16),
    },
    topContainer: {
      justifyContent: 'flex-end',
    },
  });

export default dashboardStyles;
