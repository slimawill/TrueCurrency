import React, { useState } from 'react';
import InputCurrency from './Input';
import API_Fetch from './API_Fetch';
import SelectCurrency from './Selector';
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
    <SelectCurrency/>
    <div>
      <p>Valor original: {originValue}</p>
      <p>Valor convertido: {originValue*multiplicationFactor}</p>
      <p>Moeda original: {originCurrency}</p>
      <p>Moeda convertida: {destinationCurrency}</p>
    </div>
    </>
  );
}

export default App;
