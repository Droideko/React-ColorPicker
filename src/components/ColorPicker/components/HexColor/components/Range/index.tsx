import { FC } from 'react';
import classnames from 'classnames';

import { MAX_RANGE, MIN_RANGE } from '../../../../constants/range';
import { IRange } from '../../../../../../interfaces/colorPicker';

const Range: FC<IRange> = ({ value, onChange, className }) => {
  return (
    <input
      className={classnames('custom-range', className)}
      type='range' 
      min={MIN_RANGE} 
      max={MAX_RANGE} 
      value={value}
      onChange={onChange}
    ></input>
  )
};

export default Range;