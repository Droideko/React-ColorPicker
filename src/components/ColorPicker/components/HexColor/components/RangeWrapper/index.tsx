import { ChangeEvent, FC } from 'react';

import Range from '../Range';

import { IRangeWrapper } from '../../../../../../interfaces/colorPicker';
import { getColorFromRgb } from '../../../../utils/getColorFromRgb';

const RangeWrapper: FC<IRangeWrapper> = ({ label, squareColor, color, onChange, className }) => {
  return (
    <div className='range-container'>
      <span>{label}</span>
      <Range 
        value={getColorFromRgb(squareColor, color)}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event, color)}
        className={className}
      />
    </div>
  )
};

export default RangeWrapper;