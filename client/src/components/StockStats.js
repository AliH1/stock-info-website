import './StockStats.css';


function StockStats(props){
  const symbolInfo = props.symbolList.find(stock => stock.symbol === props.stockSymbol);
  const statsList = [];
  if(symbolInfo)
    for (let [key, value] of Object.entries(symbolInfo)) {
      if(key === 'change' || key ==='timestamp')
        continue;
      value = value === null ? 'N/A': value;
      statsList.push(key + ": " + value);
    }

  return (
    <div className='stats-container'>
      {statsList.map((stock) => <strong key={stock} className="stats-text">{stock}</strong>)}
    </div>
  )
}

export default StockStats;