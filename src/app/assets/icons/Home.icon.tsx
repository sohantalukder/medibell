import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const HomeIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M9.079 16.136h5.815" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.4 13.713c0-5.631.614-5.238 3.919-8.303C7.765 4.246 10.015 2 11.958 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C21.572 22 19.612 22 11.986 22 4.359 22 2.4 22 2.4 13.713z"
        />
      </G>
    </Svg>
  );
};
export default HomeIcon;
