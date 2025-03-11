import hexOpacityToColor from '@helper/utilities/hexOpacityToColor';
import {Colors} from '@styles/colors.style.asset';
import {fonts} from '@styles/fonts.style.asset';
import {customPadding} from '@styles/global.style.asset';
import {ColorSchemeName, StyleSheet} from 'react-native';

export const inputStyles = ({
  colors,
  mode,
}: {
  colors: Colors;
  mode: ColorSchemeName;
}) =>
  StyleSheet.create({
    container: {
      gap: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.transparent,
      backgroundColor:
        mode === 'dark' ? hexOpacityToColor(colors.gray10, 0.8) : colors.gray8,
      ...customPadding(0, 20, 0, 20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 1,
    },
    multiLineContainer: {
      gap: 12,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: colors.transparent,
      backgroundColor:
        mode === 'dark' ? hexOpacityToColor(colors.gray10, 0.8) : colors.gray8,
      ...customPadding(0, 5, 0, 5),
      flexDirection: 'row',
    },
    activeContainer: {
      borderColor: colors.primary,
      backgroundColor: hexOpacityToColor(colors.primary, 0.1),
    },
    errorContainer: {
      borderColor: colors.error1,
    },
    leftIcon: {
      position: 'absolute',
      right: 16,
    },
    input: {
      color: colors.default1,
      fontSize: 16,
      fontFamily: fonts.urbanist600,
      paddingVertical: 18,
      flex: 1,
      textAlignVertical: 'center',
    },
    phoneInput: {
      color: colors.default1,
      fontSize: 16,
      fontFamily: fonts.urbanist600,
      textAlignVertical: 'center',
      padding: 0,
    },
  });
