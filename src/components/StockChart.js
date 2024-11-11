import React, {useState, useEffect} from 'react';
import Plot from 'react-plotly.js';
import { fetchChart } from '../Api/api';
import './StockChart.css';

function StockChart(props){
  const [stockData, setStockData] = useState({});

  useEffect(() =>{
    const fetchStockData = async () => {
      const res = await fetchChart(props.stockSymbol);
      setStockData(res);
    }
    fetchStockData();
  }, [props.stockSymbol]);


  const dates = [];
  const closingPrices = [];
  if(stockData){
    for(let i = 0; i < stockData.length; i++){
      dates.push(stockData[i]['date']);
      closingPrices.push(stockData[i]['close']);
    }
  }

  return (
    <div className='chart-container'>
      <h1 className='plot-header'>{props.stockSymbol +"'s Five Year Price Chart"}</h1>
      <Plot data={[{x: dates, y: closingPrices, type: 'scatter', mode: 'lines', marker: {color: '#3700B3'}}]} layout={{width: 1200, height: 500}}/>
    </div>
  );
}


export default StockChart;