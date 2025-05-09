import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const SettingIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G
        fillRule="evenodd"
        clipRule="evenodd"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" />
        <Path d="M20.168 7.25v0a2.464 2.464 0 00-3.38-.911c-1.028.597-2.314-.15-2.314-1.347A2.484 2.484 0 0012 2.5v0a2.484 2.484 0 00-2.475 2.492c0 1.196-1.285 1.944-2.313 1.347a2.465 2.465 0 00-3.38.911 2.502 2.502 0 00.906 3.404c1.027.599 1.027 2.093 0 2.692a2.502 2.502 0 00-.906 3.404 2.465 2.465 0 003.379.913h.001c1.028-.6 2.313.149 2.313 1.345v0A2.484 2.484 0 0012 21.5v0a2.484 2.484 0 002.474-2.492v0c0-1.196 1.286-1.944 2.314-1.345a2.465 2.465 0 003.38-.913 2.502 2.502 0 00-.905-3.404h-.001c-1.028-.599-1.028-2.093 0-2.692a2.501 2.501 0 00.906-3.404z" />
      </G>
    </Svg>
  );
};
export default SettingIcon;
