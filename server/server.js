import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();

app.use(cors());

dotenv.config();
const apiKey = process.env.API_KEY;

app.get("/api/stock-data", (req, res) => {
  const stockSymbol = req.headers['stock'];
  let url = `https://financialmodelingprep.com/api/v3/historical-price-full/${stockSymbol}?apikey=${apiKey}`;
  let settings = { method: "Get" };
  fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      res.json(json);
    });
});

app.get("/api/stock-list", (req, res) => {
  let url = `https://financialmodelingprep.com/api/v3/symbol/NASDAQ?apikey=${apiKey}`;
  let settings = { method: "Get" };
  fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
      res.json(json);
    });
});

app.listen(8080, () => {
  console.log('server is listening on port 8080');
})