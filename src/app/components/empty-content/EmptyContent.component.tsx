import React from 'react';
import {Text, View, ViewStyle} from 'react-native';
import {Colors} from '../../assets/styles/colors.style.asset';
import {globalStyles} from '../../assets/styles/global.style.asset';
import {typographies} from '../../assets/styles/typographies.style.asset';
import {useTheme} from '@react-navigation/native';
import Loader from '@components/loader/Loader.c';
import rs from '@styles/responsiveSize.style.asset';

const EmptyContent: React.FC<{
  text?: string;
  style?: ViewStyle;
  forLoading?: boolean;
  description?: string;
}> = ({text = '', style = {}, forLoading = false, description}) => {
  const colors = useTheme().colors as Colors;
  return (
    <View style={[globalStyles.centerView, style]}>
      {forLoading ? (
        <Loader />
      ) : (
        <View style={globalStyles.alignJustifyCenter}>
          {text && (
            <Text
              style={[
                typographies(colors).heading4,
                globalStyles.textAlignCenter,
                {marginTop: rs(40)},
              ]}>
              {text}
            </Text>
          )}
          {description && (
            <Text
              style={[
                typographies(colors).bodyXLargeRegular,
                globalStyles.textAlignCenter,
                {marginTop: rs(12)},
              ]}>
              {description}
            </Text>
          )}
        </View>
      )}
    </View>
  );
};

export default EmptyContent;
