import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '@entity-models/iconProps.types';
import {useTheme} from '@react-navigation/native';
import {Colors} from '@styles/colors.style.asset';

const HelpIcon: React.FC<IconProps> = ({width = 24, height = 24, fill}) => {
  const colors = useTheme().colors as Colors;
  return (
    <Svg width={width} height={height} viewBox="0 0 28 28" fill="none">
      <Path
        clipRule="evenodd"
        d="M24.792 14c0 8.093-2.699 10.791-10.792 10.791S3.21 22.093 3.21 13.999C3.209 5.906 5.907 3.208 14 3.208s10.792 2.698 10.792 10.791z"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 18.544V14M14.006 9.917h-.01"
        stroke={fill || colors.default1}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export default HelpIcon;
