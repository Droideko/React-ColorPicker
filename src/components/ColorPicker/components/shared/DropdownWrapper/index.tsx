import { FC } from 'react';
import { IDropdownWrapper } from '../../../../../interfaces/colorPicker';

const DropdownWrapper: FC<IDropdownWrapper> = (props) => {
  const { isOpen, component: Component, ...otherProps } = props;

  if (!isOpen) {
    return null;
  }

  return (
    <div className='dropdown-menu'>
      <Component {...otherProps}/>
    </div>
  )
};

export default DropdownWrapper;