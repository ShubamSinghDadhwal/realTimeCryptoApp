import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.css';

function SearchBar() {
  return (
    <div className='search-bar'>
      <input type="text" className='search-input' placeholder='Search...' />
      <button className='btn'><FontAwesomeIcon icon={faSearch} className="search-icon"/></button>
    </div>
  )
}

export default SearchBar