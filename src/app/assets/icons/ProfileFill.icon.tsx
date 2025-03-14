import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const ProfileFillIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill || colors.primary}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.845 21.662C8.152 21.662 5 21.087 5 18.787c0-2.301 3.133-4.425 6.845-4.425 3.691 0 6.844 2.103 6.844 4.404 0 2.3-3.133 2.896-6.845 2.896zM11.838 11.174a4.386 4.386 0 100-8.774A4.388 4.388 0 007.45 6.787a4.37 4.37 0 004.357 4.387h.03z"
        fill={fill || colors.primary}
      />
    </Svg>
  );
};
export default ProfileFillIcon;
