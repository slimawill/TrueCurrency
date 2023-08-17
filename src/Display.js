import React from 'react';

function Display({children, finalValue}){
    console.log(children);
    return(
        <div className='w-full h-full bg-blue-700'>            
            <div>
                {children[1]}<br/>
                {children[3]}
            </div>
            <div>
                {children[0]}
            </div>

            <div>
                <h2>Valor final</h2>
                <div>
                    <h3>{finalValue}</h3>
                </div>
            </div>
        </div>
    )
}

export default Display;