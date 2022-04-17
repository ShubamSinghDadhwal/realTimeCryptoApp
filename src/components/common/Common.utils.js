export const getTradingPairName = (tradingPair) => `${tradingPair?.slice(1,4)} / ${tradingPair?.slice(4)}`;

export const roundTo2Digits = (price) => Number(price).toFixed(2);

export const addProfitLossSign = (percent) => percent > 0 ? `+${percent}` : percent;

export const getProfitLossClass = (percent) => percent > 0 ? 'profit' : 'loss';