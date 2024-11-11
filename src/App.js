import React, {useState, useEffect} from 'react';
import './App.css';
import { fetchSymbols } from './Api/api';
import SearchBar from './components/SearchBar';
import StockChart from './components/StockChart';
import StockStats from './components/StockStats';


function App() {
  const [symbolList, SetSymbolList] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState('AMZN'); //default selection will be amazon stock

  useEffect(() =>{
    const fetchSymbolList = async () => {
      const res = await fetchSymbols();
      SetSymbolList(res);
    }
    fetchSymbolList();
  }, []);

  const handleSearch = (symbol) => {
    setSelectedSymbol(symbol);
  }

  return (
    <>
      <header>
          <h1>Stock Information</h1>
          <SearchBar handleSearch={handleSearch} symbolList={symbolList}/>
          <h2>NASDAQ Stock List</h2>
      </header>
      <main>
        <StockChart stockSymbol={selectedSymbol}/>
        <StockStats stockSymbol={selectedSymbol} symbolList={symbolList}/>
      </main>
      <footer>
        <h3>financial modeling prep api used for data: https://site.financialmodelingprep.com/</h3>
      </footer>
    </>
  );
}

export default App;
