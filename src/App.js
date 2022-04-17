import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/sidebar/Sidebar.view';
import Main from './components/main/Main.view';
import './App.css';
import Header from './components/header/Header.view';

function App() {

  const [loading, setLoading] = useState(true);
  const [cryptoJson, setCryptoJson] = useState();
  const [queryParam, setQueryParam] = useState();

  const filterTradePairs = (allPairs) => allPairs?.filter(data => data[0][0] === 't').slice(0, 20);

  useEffect(() => {
    const fetchData = () => {
      setLoading(true);
      axios.get(`/v2/tickers?symbols=ALL`)
        .then(response => {
          setLoading(false);
          const tradePairs = filterTradePairs(response.data);
          setCryptoJson(tradePairs);
          console.log("ssd", cryptoJson)
        })
        .catch((error) => {
          setLoading(false);
        });
    };
    fetchData();
  }, []);

  return (
    <div className="App">
     <Header />
    <div className="content">
      <Sidebar cryptoJson={cryptoJson} setQueryParam={setQueryParam} />
      <Main cryptoJson={cryptoJson} queryParam={queryParam} />
    </div>
    </div>
  );
}

export default App;
