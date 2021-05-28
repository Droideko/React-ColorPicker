import { FC } from 'react'
import DropdownItem from '../DropdownItem';

import { DropdownListProps, Color } from '../../../../../../interfaces/colorPicker';

const DropdownList: FC <DropdownListProps> = ({ colors, handleChangeColor }) => {
  return (
    <div className='list-container'>
      <ul>
        {colors.map((color: Color, index: number) => (
          <DropdownItem 
            key={index}
            onClick={() => handleChangeColor(color.hex)}
            {...color}
          />
        ))}
      </ul>      
    </div>
  )
};

export default DropdownList;