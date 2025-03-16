import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const SunnyIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 512 512" fill="none">
      <Path
        fill="none"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
      />
      <Circle
        cx={256}
        cy={256}
        r={80}
        fill="none"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </Svg>
  );
};
export default SunnyIcon;
