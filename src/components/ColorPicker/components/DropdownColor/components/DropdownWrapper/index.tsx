import { FC } from 'react'

import DropdownMenu from '../DropdownMenu';

import { IColorDropdownWrapper } from '../../../../../../interfaces/colorPicker';

const DropdownWrapper: FC<IColorDropdownWrapper> = (props) => {
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