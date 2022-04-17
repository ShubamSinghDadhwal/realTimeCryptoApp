import React from 'react';
import TradingPairList from './tradingPairList/TradingPairList.view';
import SearchBar from './searchBar/SearchBar.view';
import './Sidebar.css'

const Sidebar = (props) => {
  const { loading } = props;
  return (
    !loading &&
    <div className="sidebar">
      <SearchBar {...props} />
      <TradingPairList {...props} />
    </div>
  )
}

export default Sidebar;
