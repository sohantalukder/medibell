import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const DownArrowIcon: React.FC<IconProps> = ({
  height = 16,
  width = 16,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Path
        d="M12.667 5.667L8 10.333 3.333 5.667"
        stroke={fill || colors.gray4}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default DownArrowIcon;
