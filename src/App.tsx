import React , { useState } from 'react';
import './App.css';

function App() {

  const [ counter , setCounter ] = useState<number>(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
    </div>
  );
}

export default App;
