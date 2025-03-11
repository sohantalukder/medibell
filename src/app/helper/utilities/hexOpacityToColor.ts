import {ColorValue} from 'react-native';

const hexOpacityToColor = (color?: ColorValue, opacity?: number) => {
  if (!color) {
    return '';
  }
  if (typeof opacity !== 'number' || opacity < 0 || opacity > 1) {
    opacity = 1;
  }

  const hexOpacity = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0');

  return String(color) + hexOpacity;
};

export default hexOpacityToColor;
