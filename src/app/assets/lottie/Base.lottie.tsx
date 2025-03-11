import React from 'react';
import Lottie from 'lottie-react-native';
import {StyleProp, ViewStyle} from 'react-native';
interface props {
  source: string;
  style?: StyleProp<ViewStyle>;
  speed?: number;
  colorFilters?: {
    keypath: string;
    color: string;
  }[];
  autoPlay?: boolean;
  loop?: boolean;
  lottieRef?: React.RefObject<Lottie>;
}
const Base: React.FC<props> = ({
  source,
  style,
  speed = 1,
  colorFilters,
  autoPlay = true,
  loop = true,
  lottieRef,
}) => {
  return (
    <Lottie
      source={source}
      style={style}
      colorFilters={colorFilters}
      autoPlay={autoPlay}
      loop={loop}
      ref={lottieRef}
      speed={speed}
    />
  );
};

export default Base;
