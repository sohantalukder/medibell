import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const DoubleCheckIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22.659 6.247a1 1 0 01.094 1.412l-8.75 10a1 1 0 01-1.443.065l-2.517-2.397-2.04 2.332a1 1 0 01-1.443.065l-5.25-5a1 1 0 011.38-1.448l4.494 4.28 1.41-1.61-1.284-1.222a1 1 0 011.38-1.448l4.494 4.28 8.063-9.214a1 1 0 011.412-.095z"
        fill={fill || colors.default1}
      />
      <Path
        d="M16.753 7.659a1 1 0 00-1.506-1.317l-3.5 4a1 1 0 001.506 1.316l3.5-4z"
        fill={fill || colors.default1}
      />
    </Svg>
  );
};
export default DoubleCheckIcon;
