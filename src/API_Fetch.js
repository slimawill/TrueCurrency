import React, { useEffect } from 'react';

function API_Fetch({originCurrency, onDestinationCurrency, onUpdateList}) {
  const YOUR_ACCESS_KEY = "a8c7df2f871b3d244303d316350ad7ad";
  console.log(1);

  useEffect(() => {

    async function fetchs(){
        const response = await fetch(`http://data.fixer.io/api/latest?access_key=${YOUR_ACCESS_KEY}&base=${originCurrency}`)
        const data = await response.json();
        onUpdateList(data.rates)}
    fetchs()
},[originCurrency])

  return (<div></div>);
}

export default API_Fetch;
