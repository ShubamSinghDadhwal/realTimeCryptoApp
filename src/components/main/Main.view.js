import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  addProfitLossSign,
  getProfitLossClass,
  getTradingPairName,
  roundTo2Digits,
} from '../common/Common.utils';
import './Main.css';

const Main = ({ queryParam }) => {
  
  const [tradePair, setTradePair] = useState();
  const [loading2, setLoading2] = useState(true);

  useEffect(() => {
    console.log("query param", queryParam)
    const fetchData = () => {
      setLoading2(true);
      axios.get(`/v2/tickers?symbols=${queryParam}`)
        .then(response => {
          console.log("ssd response", response)
          setLoading2(false);
          setTradePair(response.data[0]);
        })
        .catch((error) => {
          setLoading2(false);
        });
    };
    fetchData();
  }, [queryParam]);

  return (
    <div className='main'>
      <div className="flex-row symbol">{getTradingPairName(tradePair?.[0])}</div>
      <div className="flex-row">
        <p className="current-value">$ {roundTo2Digits(tradePair?.[7])}</p>
        <p className={`${getProfitLossClass(0.02)} percent-change`}>{addProfitLossSign(roundTo2Digits(tradePair?.[6]))}%</p>
      </div>
      <hr />
      <div className="flex-row">
        <div className="flex-item">
          <p>High</p>
          <p>$ {roundTo2Digits(tradePair?.[9])}</p>
        </div>
        <div className="flex-item">
          <p>Low</p>
          <p>$ {roundTo2Digits(tradePair?.[10])}</p>
        </div>
        <div className="flex-item ">
          <p>Volume</p>
          <p>$ {roundTo2Digits(tradePair?.[8])}</p>
        </div>
        
      </div>
    </div>
  )
}

export default Main