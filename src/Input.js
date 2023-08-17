import React,{useState} from 'react';

function InputCurrency(){
    const [originalCurrency, setOriginalCurrency] = useState("0,00");

    return(
    <>
        <label htmlFor='originalCurrency'>Valor original: </label>
        <input
            id="originalCurrency"
            type="text" 
            placeholder="Digite o valor" 
            value={originalCurrency}
            onChange={(event) => {setOriginalCurrency(event.target.value)}}
        />
    </>
)}

export default InputCurrency;