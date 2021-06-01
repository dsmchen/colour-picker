import { useState } from 'react';
import './App.css';

function App() {
  const [ colour, setColour ] = useState('');

  const handleClick = (e) => {
    setColour(e.target.className);
  }

  return (
    <div className={`App ${colour}`}>
      <div className="colour-picker">
        <h1>Colour Picker</h1>
        <button onClick={handleClick} className="red">Red</button>
        <button onClick={handleClick} className="blue">Blue</button>
        <button onClick={handleClick} className="green">Green</button>
      </div>
    </div>
  );
}

export default App;
