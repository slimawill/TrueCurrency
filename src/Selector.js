import React from 'react';
import Options from './Options';

function SelectCurrency({nameCurrency, onChangeCurrency}){
    return(
        <>
            <label 
                className="font-semibold mb-2 block"
                htmlFor={nameCurrency}>{nameCurrency}</label>

            <select className='w-full p-3 rounded bg-gray-200 border border-gray-300' 
                name="originCurrency" 
                onChange={(event) => {onChangeCurrency(event.target.value)}}
                id={nameCurrency}>
                    <Options/>
            </select> 
        </>
    )
}

export default SelectCurrency;