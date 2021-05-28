import { FC } from 'react';
import ColorPicker from './components/ColorPicker';
import './styles/app.scss';

import { pickerColors } from './mocks/pickerColors';

const App: FC = () => {
  return (
    <div className="App">

      <ColorPicker 
        value='#FFF000' 
        onChange={(value: any) => {}}
        colors={pickerColors}
      />

    </div>
  )
};

export default App;
