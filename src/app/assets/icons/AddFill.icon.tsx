import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const AddFillIcon: React.FC<IconProps> = ({width = 24, height = 24}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.3 12.037C2.3 4.735 4.735 2.3 12.037 2.3s9.736 2.435 9.736 9.737-2.434 9.737-9.736 9.737c-7.302 0-9.737-2.435-9.737-9.737z"
        fill={colors.primary}
        stroke={colors.primary}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.037 8.463v7.148M15.615 12.037H8.459"
        stroke={colors.white}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default AddFillIcon;
