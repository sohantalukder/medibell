import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const ProfileIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        fillRule="evenodd"
        clipRule="evenodd"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path
          d="M11.985 15.346c-3.868 0-7.17.585-7.17 2.927s3.281 2.948 7.17 2.948c3.867 0 7.17-.586 7.17-2.927s-3.282-2.948-7.17-2.948z"
          strokeWidth={1.5}
        />
        <Path
          d="M11.985 12.006A4.596 4.596 0 107.388 7.41a4.58 4.58 0 004.564 4.596h.033z"
          strokeWidth={1.42857}
        />
      </G>
    </Svg>
  );
};
export default ProfileIcon;
