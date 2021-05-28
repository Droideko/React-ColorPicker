import { getPartRgb } from './getPartRgb';

export const rgbToHex = (red: string, green: string, blue: string): string => {
  [red, green, blue] = [red, green, blue].map(color => {
    const convertedColor = Number(color).toString(16);
    return convertedColor.length === 1 ? `0${convertedColor}` : convertedColor;
  });

  return `#${red}${green}${blue}`;
};

export const convertRgbToHex = (rgb: string): string => {
  const partRGB = getPartRgb(rgb);
  const [ red, green, blue ]: string[] = partRGB.split(',');

  return rgbToHex(red, green, blue);
};