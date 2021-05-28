import { FC, useRef } from 'react';

import DropdownList from '../DropdownList';

import { useOutsideClick } from '../../../../../../hooks/useOutsideClick';
import { IDropdownColorMenu } from '../../../../../../interfaces/colorPicker';

const DropdownMenu: FC<IDropdownColorMenu> = ({ 
  colors, 
  toggleDropdown,
  handleChangeColor 
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, toggleDropdown);

  return (
    <div className="dropdown-menu__inner" ref={dropdownRef}>
      <DropdownList 
        colors={colors} 
        handleChangeColor={handleChangeColor}
      />
      <span className='dropdown-menu__inner-triangle'></span>
    </div>
  )
};

export default DropdownMenu;