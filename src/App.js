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
        newMovie_title: "",
        newMovie_director: "",
        newMovie_release_year: "",
        newMovie_rating: ""
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

handleChange = (event) => {
  const { value, name } = event.target
  this.setState({
    [name]: value
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
            <New_Movie handleChange= {this.handleChange}/>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
