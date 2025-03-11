import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '@styles/global.style.asset';
import rs from '@styles/responsiveSize.style.asset';
interface Props {
  style?: StyleProp<ViewStyle>;
}
const AvatarImage: React.FC<Props> = ({style}) => {
  const colors = useTheme().colors as Colors;
  return (
    <View
      style={[
        globalStyles.widthFull,
        globalStyles.heightFull,
        globalStyles.alignJustifyCenter,
        {
          backgroundColor: colors.placeHolderBg,
          borderRadius: rs(500),
          overflow: `${'hidden'}`,
        },
        style,
      ]}>
      <View
        style={[
          globalStyles.widthFull,
          globalStyles.heightFull,
          {marginTop: rs(15), marginLeft: rs(-20)},
        ]}>
        <Svg width={'110%'} height={'110%'} viewBox="0 0 48 48" fill="none">
          <Path
            fill={colors.placeHolder}
            stroke={colors.placeHolder}
            strokeLinejoin="round"
            strokeWidth={0}
            d="M5.004 42.231a.78.78 0 00.791.769h36.407a.78.78 0 00.792-.769v-.918c.018-.277.055-1.657-.855-3.184-.574-.963-1.407-1.794-2.476-2.472-1.293-.82-2.938-1.413-4.928-1.77a29 29 0 01-3.002-.584c-2.632-.672-2.862-1.267-2.864-1.273a.8.8 0 00-.066-.169c-.022-.11-.075-.528.027-1.647.258-2.843 1.783-4.523 3.008-5.873.386-.425.751-.828 1.032-1.222 1.213-1.7 1.325-3.635 1.33-3.755a2 2 0 00-.087-.628c-.12-.37-.343-.6-.507-.77a3 3 0 01-.113-.12c-.012-.014-.044-.052-.015-.243a19 19 0 00.203-1.857c.056-1.002.099-2.5-.16-3.959a6 6 0 00-.172-.825q-.408-1.507-1.32-2.57c-.105-.115-2.653-2.8-10.05-3.35-1.023-.076-2.034-.035-3.03.016a4.4 4.4 0 00-.875.108c-.764.197-.968.681-1.021.952-.089.45.067.798.17 1.03.015.033.034.074.001.182-.171.266-.442.506-.717.733-.08.067-1.934 1.667-2.036 3.756-.275 1.589-.255 4.064.07 5.775.02.095.047.235.002.33-.35.313-.746.668-.745 1.478.004.082.117 2.016 1.33 3.717.28.394.645.796 1.03 1.221l.002.001c1.225 1.35 2.75 3.03 3.008 5.872.101 1.12.048 1.537.027 1.648a.8.8 0 00-.067.169c-.001.006-.23.599-2.85 1.27-1.512.387-3 .585-3.045.59-1.934.327-3.569.906-4.86 1.721-1.065.673-1.9 1.507-2.48 2.477-.928 1.55-.903 2.962-.89 3.22z"
          />
        </Svg>
      </View>
    </View>
  );
};
export default AvatarImage;
