import { FC } from 'react';

import ColorSquare from '../../../shared/ColorSquare';

interface DropdownItemType {
  name: string
  hex: string
  onClick?: () => void
}

const DropdownItem: FC<DropdownItemType> = ({ name, hex, onClick }) => {  
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