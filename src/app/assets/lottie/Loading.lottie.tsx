import React from 'react';
import Base from './Base.lottie';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {StyleProp, ViewStyle} from 'react-native';
import lottieLink from './link.lottie';
interface props {
  style?: StyleProp<ViewStyle>;
}
const UserVerificationLoader: React.FC<props> = ({style}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Base
      style={style}
      source={lottieLink.userVerification}
      colorFilters={[
        {
          keypath: 'Line2',
          color: colors.primary as string,
        },
        {
          keypath: 'Line',
          color: colors.primary as string,
        },
        {
          keypath: 'Shield',
          color: colors.primary as string,
        },
      ]}
    />
  );
};

export default UserVerificationLoader;
