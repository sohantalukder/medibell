import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const TimeIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G fillRule="evenodd" clipRule="evenodd" fill={fill || colors.default1}>
        <Path d="M12 3.5c-4.687 0-8.5 3.813-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.687 0 8.5-3.813 8.5-8.5 0-4.687-3.813-8.5-8.5-8.5M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10" />
        <Path
          d="M15.431 15.693a.756.756 0 01-.384-.105l-3.77-2.25a.755.755 0 01-.366-.644V7.845a.75.75 0 011.5 0v4.423l3.405 2.03a.752.752 0 01-.385 1.395"
          fill={fill || colors.default1}
        />
      </G>
    </Svg>
  );
};
export default TimeIcon;
