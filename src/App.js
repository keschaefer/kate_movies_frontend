import React, { Component } from 'react';
import './index.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import MovieList from './Components/MovieList.js'

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies_list: [],
      }
  }

async componentDidMount() {
    fetch('http://localhost:3002')
    .then(response => (response.json()))
    .then(response => {
      this.setState({
        movies_list: response
      })
    })
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <Main />
        <MovieList movies= {this.state.movies_list} />
        <Footer />
      </div>
    );
  }
}

export default App;
