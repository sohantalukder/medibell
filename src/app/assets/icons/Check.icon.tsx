import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CheckIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.737 6.324a1 1 0 01-.061 1.413l-10.91 10a1 1 0 01-1.35 0l-4.092-3.75a1 1 0 011.352-1.474l3.415 3.13 10.233-9.38a1 1 0 011.413.061z"
        fill={fill || colors.primary}
        fillOpacity={1}
      />
    </Svg>
  );
};
export default CheckIcon;
