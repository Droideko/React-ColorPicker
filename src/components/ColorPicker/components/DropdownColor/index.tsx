import { FC, useCallback, useState } from 'react'
import { Color } from '../../../../interfaces/colorPicker';

import DropdownWrapper from './components/DropdownWrapper';

type DropdownColorProps = {
  colors: Array<Color>
  updateHexColor: Function
}

const DropdownColor: FC<DropdownColorProps> = ({ colors, updateHexColor }) => {
  const [ isOpen, updateIsOpen ] = useState(false);

  const toggleDropdown = useCallback(() => {
    updateIsOpen(isOpen => !isOpen);
  }, []);

  const handleChangeColor = useCallback((value) => {
    updateHexColor(value);
    toggleDropdown();
  }, [updateHexColor, toggleDropdown]);

  return (
    <div className='dropdown-color'>
      <div className='dropdown-color-toggle' onClick={toggleDropdown}>
        <div className='dropdown-color__triangle'></div>
      </div>
      
      <DropdownWrapper
        colors={colors}
        isOpen={isOpen} 
        toggleDropdown={toggleDropdown}
        handleChangeColor={handleChangeColor}
      />
    </div>
  )
};

export default DropdownColor;