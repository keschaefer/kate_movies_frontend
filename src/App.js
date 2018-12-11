import React, { Component } from 'react';
import './index.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import MovieList from './Components/MovieList.js'
import New_Movie from './Components/New_Movie.js'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'

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
      <Router>
        <div className="App">
          <div className= "body">
            <Header />
            <Main />
            <MovieList movies= {this.state.movies_list} />
            {/* <Route exact path= '/' component= {(props) => <Main/>} /> /> */}
            {/* <Route path= '/movies' component={MovieList} /> */}
            <New_Movie />
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
