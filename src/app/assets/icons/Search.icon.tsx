import React from 'react';
import Svg, {Circle, G, Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const SearchIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Circle cx={11.7666} cy={11.7666} r={8.98856} />
        <Path d="M18.018 18.485L21.542 22" />
      </G>
    </Svg>
  );
};
export default SearchIcon;
