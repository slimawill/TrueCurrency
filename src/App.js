import React, { useState } from 'react';
import InputCurrency from './Input';
import API_Fetch from './API_Fetch';
import './App.css';


function App() {
  const [originValue, setOriginValue] = useState(0.00);
  const [originCurrency, setOriginCurrency] = useState("EUR");
  const [destinationCurrency, setDestinationCurrency] = useState("USD");
  const [multiplicationFactor, setMultiplicationFactor] = useState(1);

  return (
    <>
    <InputCurrency inputValue={originValue} onValueChange={setOriginValue}/>
    <API_Fetch originCurrency={originCurrency} destinationCurrency={destinationCurrency} onConvert={setMultiplicationFactor}/>
    </>
  );
}

export default App;
