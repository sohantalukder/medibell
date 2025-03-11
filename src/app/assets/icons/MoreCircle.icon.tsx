import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const MoreCircleIcon: React.FC<IconProps> = ({
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
          d="M12 2.75a9.25 9.25 0 110 18.5 9.25 9.25 0 010-18.5z"
          strokeWidth={1.5}
        />
        <Path
          d="M15.94 12.013h.008M11.93 12.013h.01M7.922 12.013h.009"
          strokeWidth={2}
        />
      </G>
    </Svg>
  );
};
export default MoreCircleIcon;
