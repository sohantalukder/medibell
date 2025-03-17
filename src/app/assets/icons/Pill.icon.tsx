import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';

const PillIcon: React.FC<IconProps> = ({height = 24, width = 24}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 32 32" fill="none">
      <G fill="none">
        <Path
          fill="#fcd53f"
          d="M21.415 21.405l-6.39 6.39a7.63 7.63 0 01-10.79 0 7.63 7.63 0 010-10.79l6.39-6.39 8.642 2.585z"
        />
        <Path
          fill="#f8312f"
          d="M10.635 10.625l6.39-6.39a7.63 7.63 0 0110.79 0 7.63 7.63 0 010 10.79l-6.39 6.39z"
        />
        <Path fill="#f4f4f4" d="M26 12a2 2 0 100-4 2 2 0 000 4" />
      </G>
    </Svg>
  );
};

export default PillIcon;
