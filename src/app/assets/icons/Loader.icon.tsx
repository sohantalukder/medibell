import React from 'react';
import Svg, {
  ClipPath,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from 'react-native-svg';
import rs from '../styles/responsiveSize.style.asset';
import {IconProps} from '@entity-models/iconProps.types';

const LoaderIcon: React.FC<IconProps> = ({width = rs(60), height = rs(60)}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 60 60" fill="none">
      <G clipPath="url(#clip0_1127_18234)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33 48a6 6 0 110 12 6 6 0 010-12zm-18.777-9a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm34.734 1.5a6 6 0 110 12 6 6 0 010-12zM55.5 27.957a4.5 4.5 0 110 9 4.5 4.5 0 010-9zM7.5 18a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm45.858-2.379a3 3 0 110 6 3 3 0 010-6zM24 0a9 9 0 110 18 9 9 0 010-18zm22.5 9a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
          fill="url(#paint0_linear_1127_18234)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1127_18234"
          x1={60}
          y1={60}
          x2={-11.3946}
          y2={39.2998}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#006DF5" />
          <Stop offset={1} stopColor="#336fc4" />
        </LinearGradient>
        <ClipPath id="clip0_1127_18234">
          <Path fill="#fff" d="M0 0H60V60H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export default LoaderIcon;
