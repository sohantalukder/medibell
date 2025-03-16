import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const RepeatIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" fill="none">
      <Path
        fill="none"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M320 120l48 48-48 48"
      />
      <Path
        fill="none"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M352 168H144a80.24 80.24 0 00-80 80v16m128 128l-48-48 48-48"
      />
      <Path
        fill="none"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 344h208a80.24 80.24 0 0080-80v-16"
      />
    </Svg>
  );
};
export default RepeatIcon;
