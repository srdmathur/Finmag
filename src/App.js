import React, { Component } from 'react';
import HexGrid from './components/hexGrid/HexGrid';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="Bg-img"></div>
          <h1>FINMAG</h1>
          <p>An advanced expense management app</p>
          <HexGrid/>
      </div>
    );
  }
}

export default App;
