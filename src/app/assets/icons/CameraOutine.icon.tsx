import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const CameraOutlineIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.04 4.051c1.01.402 1.32 1.802 1.732 2.252.413.45 1.004.603 1.331.603a3.147 3.147 0 013.147 3.146v5.795a4.22 4.22 0 01-4.22 4.22H6.97a4.22 4.22 0 01-4.22-4.22v-5.795a3.147 3.147 0 013.147-3.146c.326 0 .917-.153 1.331-.603.413-.45.721-1.85 1.731-2.252 1.011-.402 5.071-.402 6.081 0z"
          strokeWidth={1.5}
        />
        <Path d="M17.495 9.5h.01" strokeWidth={2} />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.179 13.128a3.179 3.179 0 10-6.357 0 3.179 3.179 0 006.357 0z"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
};
export default CameraOutlineIcon;
