import React,{useState} from 'react';

function InputCurrency({inputValue, onValueChange}){

    return(
    <>
        <label htmlFor='originalCurrency'>Valor original: <br/></label>
        <input
            id="originalCurrency"
            type="text" 
            placeholder="Digite o valor" 
            value={inputValue}
            onChange={(event) => {
                onValueChange(event.target.value);
            }}
        />
    </>
)}

export default InputCurrency;