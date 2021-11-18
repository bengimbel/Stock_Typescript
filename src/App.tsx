import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchStock from "./features/SearchStock"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Search a stock by ticker
        </p>
        <SearchStock />
      </header>
 
    </div>
  );
}

export default App;
