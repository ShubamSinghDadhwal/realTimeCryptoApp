import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  addProfitLossSign,
  getProfitLossClass,
  getTradingPairName,
  roundTo3Digits,
} from '../common/Common.utils';
import './Main.css';

const Main = ({ queryParam, refreshing, setRefreshing }) => {
  
  const [tradePair, setTradePair] = useState();
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    setRefreshing(false);
    const fetchData = () => {
      setFetchingData(true);
      axios.get(`/v2/tickers?symbols=${queryParam}`)
        .then(response => {
          setFetchingData(false);
          setTradePair(response.data[0]);
        })
        .catch((error) => {
          setFetchingData(false);
        });
    };
    fetchData();
  }, [queryParam]);

  return (
    <div className='main'>
      {!fetchingData && tradePair && !refreshing &&
        <>
          <div className="flex-row symbol">{getTradingPairName(tradePair?.[0])}</div>
          <div className="flex-row">
            <p className="current-value">$ {roundTo3Digits(tradePair?.[7])}</p>
            <p className={`${getProfitLossClass(0.02)} percent-change`}>{addProfitLossSign(roundTo3Digits(tradePair?.[6]))}%</p>
          </div>
          <hr />
          <div className="flex-row">
            <div className="flex-item">
              <p>High</p>
              <p>$ {roundTo3Digits(tradePair?.[9])}</p>
            </div>
            <div className="flex-item">
              <p>Low</p>
              <p>$ {roundTo3Digits(tradePair?.[10])}</p>
            </div>
            <div className="flex-item ">
              <p>Volume</p>
              <p>$ {roundTo3Digits(tradePair?.[8])}</p>
            </div>
          </div>
        </>
      }
      {fetchingData && <div>Loading...</div>}
    </div>
  )
}

export default Main