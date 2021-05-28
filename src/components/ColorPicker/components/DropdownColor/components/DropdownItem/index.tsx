import { FC } from 'react';
import { IDropdownItem } from '../../../../../../interfaces/colorPicker';

import ColorSquare from '../../../shared/ColorSquare';

const DropdownItem: FC<IDropdownItem> = ({ name, hex, onClick }) => {  
  return (
    <li className='dropdown-item' onClick={onClick}>
      <div className='dropdown-item__block'>
        <p>{name}</p>
        <ColorSquare color={hex} />        
      </div>
    </li>
  )
};

export default DropdownItem;