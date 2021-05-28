import { FC, useEffect, useState } from 'react'
import { IColorPicker } from '../../interfaces/colorPicker';

import HexColor from './components/HexColor';
import HexNumber from './components/HexNumber';
import DropdownColor from './components/DropdownColor';

import { defaultColors } from './constants/defaultColors';

const ColorPicker: FC<IColorPicker> = ({ 
  value,
  colors = defaultColors, // example default colors
  onChange,  
}) => {
  const [ hexColor, updateHexColor ] = useState(value);

  useEffect(() => {
    if (!onChange) return;
    onChange(hexColor);
  }, [hexColor, onChange]);

  return (
    <div className='picker-container'>
      <HexNumber hexColor={hexColor} />
      <HexColor hexColor={hexColor} updateHexColor={updateHexColor} />
      <DropdownColor colors={colors} updateHexColor={updateHexColor} />
    </div>
  )
};

export default ColorPicker;