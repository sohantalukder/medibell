import {Dimensions, StatusBar} from 'react-native';

const round = (value: number) => Math.round(Number(value));

const {height, width} = Dimensions.get('screen');

// Factor calculations for screen size adjustments
const screenFactors = {
  w: [
    {max: 400, factor: 313},
    {max: 385, factor: 315},
    {max: 370, factor: 317},
    {max: 355, factor: 319},
    {max: 340, factor: 321},
    {max: 325, factor: 323},
    {max: 310, factor: 325},
    {max: -1, factor: 327},
  ],
  h: [
    {max: 800, factor: 860},
    {max: 750, factor: 810},
    {max: 700, factor: 760},
    {max: 650, factor: 710},
    {max: 600, factor: 660},
    {max: 550, factor: 610},
    {max: -1, factor: 610},
  ],
};

const rs = (
  size: number | 'wf' | 'hf' | 'hwh',
  dimensions: 'h' | 'w' = 'h',
) => {
  if (size === 'wf') {
    return round(width);
  }

  if (size === 'hf') {
    return round(height);
  }

  if (size === 'hwh') {
    return round(height - (height * 0.08195 + (StatusBar.currentHeight || 0)));
  }

  const getScaleFactor = (dimension: 'h' | 'w', value: number) => {
    const factors = screenFactors[dimension];
    const factor =
      factors.find(f => value > f.max)?.factor ??
      factors[factors.length - 1].factor;
    return factor;
  };

  const scaleFactor = getScaleFactor(
    dimensions,
    dimensions === 'w' ? width : height,
  );
  return round((size / scaleFactor) * (dimensions === 'w' ? width : height));
};

export default rs;
