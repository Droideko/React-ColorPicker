import { LEFT_BRACKET, RIGHT_BRACKET } from './../constants/colorPicker';

export const getPartRgb = (rgb: string): string => {
  const indexLeftBracket = rgb.indexOf(LEFT_BRACKET);
  const indexRightBracket = rgb.indexOf(RIGHT_BRACKET);

  return rgb.slice(indexLeftBracket + 1, indexRightBracket);
};