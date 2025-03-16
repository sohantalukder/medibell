import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const SyncIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fill={fill || colors.default1}
        d="M18.43 4.25a.76.76 0 00-.75.75v2.43l-.84-.84a7.24 7.24 0 00-12 2.78.74.74 0 00.46 1 .7.7 0 00.25 0 .76.76 0 00.71-.51 5.6 5.6 0 011.37-2.2 5.76 5.76 0 018.13 0l.84.84h-2.41a.75.75 0 000 1.5h4.24a.74.74 0 00.75-.75V5a.75.75 0 00-.75-.75m.25 9.43a.76.76 0 00-1 .47 5.6 5.6 0 01-1.37 2.2 5.76 5.76 0 01-8.13 0l-.84-.84h2.47a.75.75 0 000-1.5H5.57a.74.74 0 00-.75.75V19a.75.75 0 001.5 0v-2.43l.84.84a7.24 7.24 0 0012-2.78.74.74 0 00-.48-.95"
      />
    </Svg>
  );
};
export default SyncIcon;
