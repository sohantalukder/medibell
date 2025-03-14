import React from 'react';
import Svg, {G, Mask, Path} from 'react-native-svg';
import {Colors} from '../styles/colors.style.asset';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';

const CalenderIcon: React.FC<IconProps> = ({width = 20, height = 20, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.666 9.904H2.843a.75.75 0 010-1.5h17.823a.75.75 0 010 1.5M16.201 13.81a.754.754 0 01-.754-.75c0-.414.331-.75.745-.75h.01a.75.75 0 010 1.5M11.764 13.81a.754.754 0 01-.754-.75c0-.414.33-.75.745-.75h.009a.75.75 0 010 1.5M7.317 13.81a.755.755 0 01-.755-.75c0-.414.332-.75.746-.75h.009a.75.75 0 010 1.5M16.201 17.696a.754.754 0 01-.754-.75c0-.414.331-.75.745-.75h.01a.75.75 0 010 1.5M11.764 17.696a.754.754 0 01-.754-.75c0-.414.33-.75.745-.75h.009a.75.75 0 010 1.5M7.317 17.696a.755.755 0 01-.755-.75c0-.414.332-.75.746-.75h.009a.75.75 0 010 1.5M15.793 5.791a.75.75 0 01-.75-.75V1.75a.75.75 0 011.5 0v3.291a.75.75 0 01-.75.75M7.715 5.791a.75.75 0 01-.75-.75V1.75a.75.75 0 011.5 0v3.291a.75.75 0 01-.75.75"
        fill={fill || colors.default1}
      />
      <Mask
        id="a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={2}
        width={20}
        height={21}>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 2.58h19.5V22.5H2V2.58z"
          fill={fill || colors.default1}
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.521 4.08C4.928 4.08 3.5 5.461 3.5 7.972v9.05C3.5 19.587 4.928 21 7.521 21h8.458C20.572 21 20 19.614 20 17.098V7.973c.004-1.235-.328-2.195-.987-2.855-.678-.68-1.723-1.039-3.025-1.039H7.521zm8.458 18.42H7.521C4.116 22.5 2 20.401 2 17.022V7.973C2 4.645 4.116 2.58 7.521 2.58h8.467c1.709 0 3.122.512 4.087 1.48.937.94 1.43 2.293 1.425 3.916v9.123c0 3.332-2.116 5.402-5.521 5.402z"
          fill={fill || colors.default1}
        />
      </G>
    </Svg>
  );
};
export default CalenderIcon;
