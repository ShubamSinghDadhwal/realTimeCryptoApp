import React from 'react';
import TradingPairList from './tradingPairList/TradingPairList.view';
import './Sidebar.css'
import SearchBar from './searchBar/SearchBar.view';

function Sidebar(props) {
  return (
    <div className="sidebar">
      <SearchBar />
      <TradingPairList {...props}/>
    </div>
  )
}

export default Sidebar