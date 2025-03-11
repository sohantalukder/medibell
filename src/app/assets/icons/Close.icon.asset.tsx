import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.137 7.864a.9.9 0 010 1.272l-7 7a.9.9 0 11-1.273-1.272l7-7a.9.9 0 011.273 0z"
        fill={fill || colors.default1}
        fillOpacity={1}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.864 7.864a.9.9 0 011.272 0l7 7a.9.9 0 11-1.272 1.273l-7-7a.9.9 0 010-1.273z"
        fill={fill || colors.default1}
        fillOpacity={1}
      />
    </Svg>
  );
};
export default CloseIcon;
