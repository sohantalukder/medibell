import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const EyeShowIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        clipRule="evenodd"
        d="M17.692 14.061a3.69 3.69 0 11-7.378 0 3.69 3.69 0 017.378 0z"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M3.209 14.061c0 3.827 4.832 8.519 10.794 8.519 5.96 0 10.794-4.689 10.794-8.519s-4.834-8.519-10.794-8.519c-5.962 0-10.794 4.692-10.794 8.519z"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default EyeShowIcon;
