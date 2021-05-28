import { FC } from 'react';

import { IHexNumber } from '../../../../interfaces/colorPicker';

const HexNumber: FC<IHexNumber> = ({ hexColor }) => {
  return (
    <div className='hex-number'>{hexColor}</div>
  )
};

export default HexNumber;