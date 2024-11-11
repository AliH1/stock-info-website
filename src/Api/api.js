import axios from 'axios';

const API_KEY=""; //copy paste api key here

export const fetchChart = async (stockSymbol) => {
  try{
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${stockSymbol}?apikey=${API_KEY}`);
    return response.data['historical'];
  }
  catch(error){
    console.error('Error fetching stock data for chart:', error);
  }
}

export const fetchSymbols = async () => {
  try{
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=${API_KEY}`);
    return response.data;
  }
  catch(error){
    console.error('Error fetching symbol list:', error);
  }
}