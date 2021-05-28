import { FC } from 'react';

import { IColorSquare } from '../../../../../interfaces/colorPicker';

const ColorSquare: FC<IColorSquare> = ({ color }) => {
  return (
    <div 
      className='square-color'
      style={{ backgroundColor: color }}
    >
    </div>
  )
};

export default ColorSquare;