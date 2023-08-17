import React, { useEffect } from 'react';

function API_Fetch({originCurrency, onDestinationCurrency, onUpdateList}) {
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {

    async function fetchs(){
        const response = await fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}&base=${originCurrency}`)
        const data = await response.json();
        onUpdateList(data.rates)}
    fetchs()
},[originCurrency])

  return (<div></div>);
}

export default API_Fetch;
