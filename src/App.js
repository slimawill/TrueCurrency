import React, { useState } from 'react';
import InputCurrency from './Input';
import './App.css';


function App() {
  const [value, setValue] = useState("0,00");

  return (
    <InputCurrency inputValue={value} onValueChange={setValue}/>
  );
}

export default App;
