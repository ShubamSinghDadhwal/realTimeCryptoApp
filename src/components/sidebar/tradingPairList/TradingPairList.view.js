import React from 'react';
import { 
  addProfitLossSign,
  getProfitLossClass,
  getTradingPairName,
  roundTo2Digits,
} from '../../common/Common.utils';
import './tradingPairList.css';

const TradingPairList = (props) => {
  const getData = (data) => {
    setQueryParam(data[0]);
  }
  const { cryptoJson, setQueryParam } = props;
  return (
    <div>
      {cryptoJson?.map(data => 
        <div className='card' key={data[0]} onClick={() => getData(data)}>
          <div className='card-row'>
            <p className='card-item trading-pair-symbol'>{getTradingPairName(data[0])}</p>
            <p className='card-item current-value'>$ {roundTo2Digits(data[7])}</p>
          </div>
          <div className='card-row'>
            <p className='card-item volume'>Vol: {roundTo2Digits(data[8])}</p>
            <p className={`card-item ${getProfitLossClass(data[6])}`}>
              {addProfitLossSign(roundTo2Digits(data[6]))}%
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default TradingPairList;