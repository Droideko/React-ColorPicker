import { getPartRgb } from './getPartRgb';

export const changeSquareColor = (squareColor: string, value: string, colorIndex: number): string => {
  const partRGB = getPartRgb(squareColor);

  const changedRgb = partRGB.split(',').map((color: string, index: number) => {
    return colorIndex === index ? value : color
  }).join(',');

  return `rgb(${changedRgb})`;
}