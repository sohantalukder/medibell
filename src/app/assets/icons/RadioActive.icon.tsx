import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const RadioActive: React.FC<IconProps> = ({width = 20, height = 20, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
      <G clipPath="url(#clip0_1350_7766)">
        <Path
          d="M10.0002 5.41683C7.47016 5.41683 5.41683 7.47016 5.41683 10.0002C5.41683 12.5302 7.47016 14.5835 10.0002 14.5835C12.5302 14.5835 14.5835 12.5302 14.5835 10.0002C14.5835 7.47016 12.5302 5.41683 10.0002 5.41683ZM10.0002 0.833496C4.94016 0.833496 0.833496 4.94016 0.833496 10.0002C0.833496 15.0602 4.94016 19.1668 10.0002 19.1668C15.0602 19.1668 19.1668 15.0602 19.1668 10.0002C19.1668 4.94016 15.0602 0.833496 10.0002 0.833496ZM10.0002 17.3335C5.9485 17.3335 2.66683 14.0518 2.66683 10.0002C2.66683 5.9485 5.9485 2.66683 10.0002 2.66683C14.0518 2.66683 17.3335 5.9485 17.3335 10.0002C17.3335 14.0518 14.0518 17.3335 10.0002 17.3335Z"
          fill={fill || colors.primary}
        />
      </G>
    </Svg>
  );
};
export default RadioActive;
