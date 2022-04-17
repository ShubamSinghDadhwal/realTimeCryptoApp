import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.css';
import { filterSearchResults } from './Searchbar.utils';

const SearchBar = ({ cryptoJson, setCryptoJson, fetchData, setRefreshing }) => {
  const [searchParam, setSearchParam] = useState()

  const handleSearch = (e) => {
    setSearchParam(e.target.value);
  };
  
  const findSearchResults = () => {
    setCryptoJson(filterSearchResults(cryptoJson, searchParam));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshing(true);
      fetchData();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='search-bar'>
        <input type="text" className='search-input' placeholder='Search...' value={searchParam} onChange={handleSearch} />
        <button className='search-btn' onClick={findSearchResults}><FontAwesomeIcon icon={faSearch} className="search-icon"/></button>
      </div>
      Click to Refresh <button className='reload-btn' onClick={() => {
        setRefreshing(true);
        fetchData();
      }}>
        <FontAwesomeIcon icon={faArrowRotateRight} className="refresh-icon" />
      </button>
    </>
  )
}

export default SearchBar