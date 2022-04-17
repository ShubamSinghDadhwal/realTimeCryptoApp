export const filterSearchResults = (allTradingPairs, searchParam) => {
  const regularExp = RegExp(`.*${searchParam.toLowerCase().split('').join('.*')}.*`)
  return allTradingPairs.filter(tradingPair => tradingPair[0].toLowerCase().match(regularExp));
}
