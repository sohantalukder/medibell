import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const OthersIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 131 230" fill="none">
      <Path
        opacity={0.974}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.923.021c32.41 1.237 53.962 17.047 64.657 47.43 6.6 26.987-.3 49.852-20.701 68.595-9.96 8.197-21.376 13.042-34.245 14.535v33.149c11.927-.085 23.853 0 35.779.255 3.571 1.432 5.274 4.067 5.111 7.905.163 3.839-1.54 6.474-5.111 7.905-11.925.255-23.852.341-35.78.255.086 14.622 0 29.241-.255 43.86-1.434 3.564-4.075 5.263-7.922 5.1-3.847.163-6.488-1.536-7.923-5.1-.255-14.619-.34-29.238-.255-43.86-11.928.086-23.854 0-35.779-.255-3.57-1.431-5.274-4.066-5.11-7.905-.165-3.838 1.54-6.473 5.11-7.905 11.925-.255 23.851-.34 35.779-.255v-33.149c-27.756-4.319-46.071-19.788-54.946-46.41C-4.424 55.434 3.5 31.719 26.1 13.026 37.494 5.071 50.102.736 63.923.021zm.51 16.83c21.175.826 36.424 10.686 45.746 29.58 8.584 24.28 2.706 44.255-17.633 59.925-18.115 10.98-36.174 10.98-54.18 0-19.93-15.298-25.98-34.933-18.145-58.905 8.82-18.75 23.558-28.95 44.213-30.6z"
        fill={fill || colors.default1}
      />
    </Svg>
  );
};
export default OthersIcon;
