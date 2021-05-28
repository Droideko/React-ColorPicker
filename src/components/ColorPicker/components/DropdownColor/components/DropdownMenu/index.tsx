import { FC, useRef } from 'react';
import { useOutsideClick } from '../../../../../../hooks/useOutsideClick';
import { Color } from '../../../../../../interfaces/colorPicker';
import DropdownList from '../DropdownList';

type DropdownMenuType = {
  colors: Array<Color>
  toggleDropdown: Function
  handleChangeColor: Function
}

const DropdownMenu: FC<DropdownMenuType> = ({ 
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