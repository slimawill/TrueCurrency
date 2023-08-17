import React, { useEffect, useState } from 'react';
import InputCurrency from './Input';
import API_Fetch from './API_Fetch';
import SelectCurrency from './Selector';
import './App.css';
import Display from './Display';


function App() {
  const [originValue, setOriginValue] = useState(0.00);
  const [originCurrency, setOriginCurrency] = useState("USD");
  const [destinationCurrency, setDestinationCurrency] = useState("USD");
  const [multiplicationFactor, setMultiplicationFactor] = useState(1);
  const [currencyList, setCurrencyList] = useState({});

  useEffect(() => {
    if (currencyList && currencyList[destinationCurrency]) {
      setMultiplicationFactor(currencyList[destinationCurrency]);
    } else {
      setMultiplicationFactor("");
    }
  }, [currencyList, destinationCurrency]);

 //let finalValue = originValue*multiplicationFactor;
  let finalValue = multiplicationFactor? (originValue*multiplicationFactor).toFixed(3):"Moeda origem bloqueada por API";

  return (
    <>
    <API_Fetch originCurrency={originCurrency} onUpdateList={setCurrencyList} onDestinationCurrency={destinationCurrency}/>
    <Display listaa={currencyList}  finalValue={finalValue}>
      <InputCurrency inputValue={originValue} onValueChange={setOriginValue}/>
      <SelectCurrency onChangeCurrency={setOriginCurrency} nameCurrency="Origin Currency"/><br/>
      <SelectCurrency onChangeCurrency={setDestinationCurrency} nameCurrency="Destination Currency"/>
    </Display>
    </>
  );
}

export default App;
