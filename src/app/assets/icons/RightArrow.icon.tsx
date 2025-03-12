import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const RightArrowIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill="none"
        stroke={fill || colors.default1}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 17l5-5m0 0l-5-5"
      />
    </Svg>
  );
};
export default RightArrowIcon;
