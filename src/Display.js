import React from 'react';

function Display({children, listaa, finalValue}){
    return(
        <div className="font-sans text-base leading-relaxed h-screen my-auto bg-gray-100">          
            <div className="max-w-2xl mx-auto p-8">  
                <div className='mx-auto'>
                    {children[1]}<br/>
                    {children[3]}
                </div>
                <div className='text-center mb-6'>
                    {children[0]}
                </div>

                <div className='bg-blue-700 p-8 rounded shadow-lg'>
                    <h2 className="font-serif text-center text-2xl font-semibold mb-5 text-white">Valor final</h2>
                    <div>
                        <h3 className="font-serif text-center text-xl font-medium mb-4 text-white">{finalValue}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display;