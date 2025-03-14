import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const MedicineIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G className="medicine-outline">
        <G
          fill={fill || colors.default1}
          fillRule="evenodd"
          className="Vector"
          clipRule="evenodd">
          <Path d="M19.873 12.3l-8.033 7.998a5.678 5.678 0 01-8.012-8.047l8.033-7.998a5.678 5.678 0 018.012 8.047m-1.4-6.618a3.68 3.68 0 00-5.2-.012l-8.034 7.998a3.678 3.678 0 005.19 5.213l8.033-7.998a3.68 3.68 0 00.012-5.201z" />
          <Path d="M8.118 8.524a1 1 0 011.414 0l6.05 6.05a1 1 0 01-1.414 1.414l-6.05-6.05a1 1 0 010-1.414" />
        </G>
      </G>
    </Svg>
  );
};
export default MedicineIcon;
