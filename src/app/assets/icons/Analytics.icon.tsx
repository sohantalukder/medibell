import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const AnalyticsIcon: React.FC<IconProps> = ({width = 24, height = 24}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        stroke={colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M7.483 10.261v6.694M12.037 7.057v9.898M16.516 13.798v3.157" />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.3 12.037C2.3 4.735 4.735 2.3 12.037 2.3s9.737 2.435 9.737 9.737-2.435 9.737-9.737 9.737S2.3 19.339 2.3 12.037z"
        />
      </G>
    </Svg>
  );
};
export default AnalyticsIcon;
