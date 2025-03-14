import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const HomeFillIcon: React.FC<IconProps> = ({width = 24, height = 24}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.4 13.713c0-5.631.614-5.238 3.92-8.303C7.764 4.246 10.014 2 11.957 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C21.572 22 19.613 22 11.986 22 4.36 22 2.4 22 2.4 13.713z"
        fill={colors.primary}
        stroke={colors.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.08 16.136h4.814"
        stroke={colors.white}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default HomeFillIcon;
