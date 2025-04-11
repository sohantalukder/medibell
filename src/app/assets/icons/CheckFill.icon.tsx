import React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';

const CheckFillIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  fill,
}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={'none'}>
      <G fill="none">
        <Circle cx={12} cy={12} r={8} fill={fill || colors.success1} />
        <Path
          stroke={colors.white}
          strokeWidth={1.2}
          d="M9.5 12l1.894 1.894a.15.15 0 00.212 0L15.5 10"
        />
      </G>
    </Svg>
  );
};
export default CheckFillIcon;
