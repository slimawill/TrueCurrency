import React, { useState } from 'react';
import InputCurrency from './Input';
import API_Fetch from './API_Fetch';
import SelectCurrency from './Selector';
import './App.css';
import Display from './Display';


function App() {
  const [originValue, setOriginValue] = useState(0.00);
  const [originCurrency, setOriginCurrency] = useState("EUR");
  const [destinationCurrency, setDestinationCurrency] = useState("USD");
  const [multiplicationFactor, setMultiplicationFactor] = useState(1);
  let finalValue = originValue*multiplicationFactor;

  return (
    <>
    <API_Fetch originCurrency={originCurrency} destinationCurrency={destinationCurrency} onConvert={setMultiplicationFactor}/>
    <Display finalValue={finalValue}>
      <InputCurrency inputValue={originValue} onValueChange={setOriginValue}/>
      <SelectCurrency onChangeCurrency={setOriginCurrency} nameCurrency="Origin Currency"/><br/>
      <SelectCurrency onChangeCurrency={setDestinationCurrency} nameCurrency="Destination Currency"/>
    </Display>
    </>
  );
}

export default App;
