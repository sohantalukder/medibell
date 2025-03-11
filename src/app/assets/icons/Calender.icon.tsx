import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const CalenderIcon: React.FC<IconProps> = ({width = 18, height = 20, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 18 20" fill="none">
      <Path
        clipRule="evenodd"
        d="M1.291 10.646c0-5.796 1.933-7.728 7.728-7.728 5.797 0 7.73 1.932 7.73 7.728 0 5.797-1.933 7.729-7.73 7.729-5.795 0-7.728-1.932-7.728-7.729z"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.52 7.77h15.007M12.69 11.05h.008M9.024 11.05h.008M5.35 11.05h.008M12.69 14.26h.008M9.024 14.26h.008M5.35 14.26h.008M12.36 1.708v2.719M5.687 1.708v2.719"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default CalenderIcon;
