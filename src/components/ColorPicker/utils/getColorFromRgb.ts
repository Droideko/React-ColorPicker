import { getPartRgb } from './getPartRgb';

export const getColorFromRgb = (rgb: string, colorIndex: number): string => {
  const partRGB = getPartRgb(rgb);

  return partRGB.split(',')[colorIndex];
};