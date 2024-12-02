import React, { useState } from 'react';
import './SearchBar.css';
import { toast } from 'react-toastify';


function SearchBar(props) {
  const [inputValue, setInputValue ] = useState('');
  const [matchingStocks, setMatchingStocks] = useState([]);
  const symbolList = props.symbolList;

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    let included = 0;
    let matched = [];
    for(let i = 0; i < symbolList.length; i++){
      const symbol = symbolList[i]['symbol'];
      if(included < 10 && e.target.value !== '' && symbolList[i]['price'] !== null && symbol.startsWith(e.target.value.toUpperCase()) ){
        matched.push(symbolList[i]);
        included++;
      }
    }
    setMatchingStocks(matched);
  }

  const handleSearch = (symbol) => {
    symbol = symbol.toUpperCase();
    if(symbolList.find(item => item.symbol === symbol) === undefined){
      toast.error('No such Stock exists!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
    else{
      toast.success('Sucessful Search!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      props.handleSearch(symbol);
      setInputValue("");
      setMatchingStocks([]);
    }
  }

  return (
    <div className='search-bar-container'>
      <input list='stock-suggestion' type='text' value={inputValue} onChange={handleInputChange} placeholder='Type stock to search'/>
      <datalist id='stock-suggestion'>
        {matchingStocks.map((stock) => <option key={stock.symbol} value={stock.symbol}>{stock.symbol+' ('+stock.change+') Price: $' + stock.price}</option>)}
      </datalist>
      <button aria-label='search' type='submit' onClick={() => handleSearch(inputValue)}><i className='fa fa-search'></i></button>
    </div>
  )

}


export default SearchBar;