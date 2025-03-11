import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const LeftArrowIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M4.958 14.32h17.5M12.017 21.348L4.958 14.32l7.059-7.029"
        stroke={fill || colors.default1}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default LeftArrowIcon;
