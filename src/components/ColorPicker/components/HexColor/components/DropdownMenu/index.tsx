import { FC, useRef } from 'react'

import Button from '../../../../../Button';
import RangeWrapper from '../RangeWrapper';

import { useOutsideClick } from '../../../../../../hooks/useOutsideClick';
import { rangesData } from '../../../../constants/range';
import { IDropdownMenu } from '../../../../../../interfaces/colorPicker';

const DropdownMenu: FC<IDropdownMenu> = ({ 
  squareColor, 
  handleChangeColor,
  toggleDropdown,
  handleCancel,
  handleApply
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  useOutsideClick(dropdownRef, toggleDropdown);

  return (
    <div className='dropdown-hex-color' ref={dropdownRef}>
      {rangesData.map((range) => (
        <RangeWrapper 
          key={range.label} 
          squareColor={squareColor}
          onChange={handleChangeColor}
          {...range} 
        />
      ))}
      <div className='dropdown-footer'>
        <Button
          className='btn btn-secondary mr-2'
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          className='btn btn-success'
          onClick={handleApply}
        >
          OK
        </Button>
      </div>
    </div>
  )
};

export default DropdownMenu;