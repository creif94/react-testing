import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

export type App = {
    buttonColor: boolean
}

function App() {
    const [buttonColor, setButtonColor] = useState<string>('red')
    const newButtonColor = buttonColor === 'red' ? 'blue' : 'red'

  return (
    <>
      <button
          style ={{backgroundColor: buttonColor} }
          onClick={() => setButtonColor(newButtonColor)}>
              Change to {newButtonColor}
      </button>

    </>
  );
}

export default App;
