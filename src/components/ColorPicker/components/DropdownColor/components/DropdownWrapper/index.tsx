import { FC } from 'react'
import { Color } from '../../../../../../interfaces/colorPicker';
import DropdownMenu from '../DropdownMenu';

type DropdownWrapperType = {
  colors: Array<Color>
  isOpen: Boolean
  toggleDropdown: Function
  handleChangeColor: Function
}

const DropdownWrapper: FC<DropdownWrapperType> = (props) => {
  const { isOpen,  ...otherProps } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className='dropdown-menu'>
      <DropdownMenu {...otherProps} />
    </div>
  )
};

export default DropdownWrapper;