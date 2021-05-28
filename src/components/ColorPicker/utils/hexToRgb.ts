import { SHOT_HEX, LONG_HEX, EMPTY_HEX, DEFAULT_RGB_COLOR } from '../constants/colorPicker';

const getNumberFromHexadecimal = (hex: string): string => {
  return `0x${hex}`;
};

export const hexToRgb = (hexColor: string | undefined): string => {
  if (!hexColor) return DEFAULT_RGB_COLOR;

  const hexSize = hexColor.length;
  let [red, green, blue] = [...Array(3)].map(_ => EMPTY_HEX)

  if (hexSize === SHOT_HEX) {
    red = getNumberFromHexadecimal(hexColor[1] + hexColor[1]);
    green = getNumberFromHexadecimal(hexColor[2] + hexColor[2]);
    blue = getNumberFromHexadecimal(hexColor[3] + hexColor[3])
  }

  if (hexSize === LONG_HEX) {
    red = getNumberFromHexadecimal(hexColor[1] + hexColor[2]);
    green = getNumberFromHexadecimal(hexColor[3] + hexColor[4]);
    blue = getNumberFromHexadecimal(hexColor[5] + hexColor[6])
  }

  return `rgb(${+red},${+green},${+blue})`;
}