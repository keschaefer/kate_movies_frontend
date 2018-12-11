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
        newMovie_rating: 0,
        newMovie_poster_URL: ""
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
    .then(() => console.log(this.state.movies_list))
  }

handleChange = (event) => {
  const { value, name } = event.target
  this.setState({
    [name]: value
  })
}

submitNewMovie = (event) => {
  event.preventDefault()
  let newMovie = {
    title: this.state.newMovie_title,
    director: this.state.newMovie_director,
    release_year: this.state.newMovie_release_year,
    rating: this.state.newMovie_rating,
    poster_url: this.state.newMovie_poster_URL,
  }
  fetch("http://localhost:3002", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(newMovie)
  })
  .then(response => response.json())
  // .then(response => console.log(response[0]))
  .then(response => {
    this.setState({
      movies_list: [...this.state.movies_list, response[0]]
    })
  })
  .then(() => console.log(this.state.movies_list))
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
            <New_Movie handleChange= {this.handleChange} submitNewMovie= {this.submitNewMovie}/>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
