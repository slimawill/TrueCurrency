import React from 'react';

function InputCurrency({inputValue, onValueChange}){

    return(
    <>
        <label className="font-semibold mb-2 block text-center" htmlFor='originalCurrency'>Valor original: <br/></label>
        <input
            id="originalCurrency"
            type="number" 
            placeholder="Digite o valor" 
            value={inputValue}
            className='w-60 p-3 border border-gray-300 rounded'
            onChange={(event) => {
                onValueChange(event.target.value);
            }}
        />
    </>
)}

export default InputCurrency;