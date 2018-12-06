import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
