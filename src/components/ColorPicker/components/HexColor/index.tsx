import { FC, useCallback, useEffect, useRef, useState } from 'react';

import ColorSquare from '../shared/ColorSquare';
import DropdownWrapper from '../shared/DropdownWrapper';
import DropdownMenu from './components/DropdownMenu';

import { hexToRgb } from '../../utils/hexToRgb';
import { changeSquareColor } from '../../utils/changeSquareColor';
import { convertRgbToHex } from '../../utils/rgbToHex';
import { IHexColor } from '../../../../interfaces/colorPicker';

const HexColor: FC<IHexColor> = ({ hexColor, updateHexColor }) => {
  const [ isOpen, updateIsOpen ] = useState(false);
  const [ squareColor, updateSquareColor ] = useState(hexToRgb(hexColor));
  const previousSquareColor = useRef(hexToRgb(hexColor));  
  
  useEffect(() => {
    const rgbColor = hexToRgb(hexColor);
    updateSquareColor(rgbColor);
    previousSquareColor.current = rgbColor;
  }, [hexColor])  

  const toggleDropdown = useCallback(() => {
    updateIsOpen(isOpen => !isOpen);
  }, []);

  const handleChangeColor = useCallback((event, colorIndex) => { // TODO Throttling
    if (!event) return;
    const { target: { value } } = event;

    updateSquareColor(squareColor => changeSquareColor(squareColor, value, colorIndex));
  }, []);

  const handleCancel = useCallback(() => {
    updateSquareColor(previousSquareColor.current);
    toggleDropdown();
  }, [toggleDropdown, previousSquareColor]);

  const handleApply = useCallback(() => {
    previousSquareColor.current = squareColor;
    updateHexColor(convertRgbToHex(squareColor))
    toggleDropdown();
  }, [toggleDropdown, updateHexColor, squareColor]);  

  return (
    <>
      <div className='hex-color' onClick={toggleDropdown}>
        <ColorSquare color={squareColor} />
      </div>
      <DropdownWrapper 
        isOpen={isOpen}
        squareColor={squareColor}
        handleChangeColor={handleChangeColor}
        handleCancel={handleCancel}
        handleApply={handleApply}
        toggleDropdown={toggleDropdown}
        component={DropdownMenu}
      />
    </>
  )
};

export default HexColor;
