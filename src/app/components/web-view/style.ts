import {StyleSheet} from 'react-native';
import {
  customPadding,
  customMargin,
} from '../../assets/styles/global.style.asset';
import {customTheme} from '../../assets/styles/colors.style.asset';
export const webViewStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    ...customPadding(0, 20, 15, 20),
  },
  center: {flexDirection: 'row', alignItems: 'center'},
  title: {
    color: customTheme.colors.black,
  },
  url: {
    flexDirection: 'row',
    alignItems: 'center',
    ...customMargin(3),
  },
  urlText: {
    ...customMargin(0, 0, 0, 4),
    color: customTheme.colors.grey,
  },
  relative: {position: 'relative'},
  loaderView: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
