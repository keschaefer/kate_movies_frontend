import React, { Component } from 'react';
import './index.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import MovieList from './Components/MovieList.js'
import New_Movie from './Components/New_Movie.js'
import Edit_Movie from './Components/Edit_Movie.js'
import View_Movie from './Components/View_Movie.js'
import { Route } from "react-router-dom"

class App extends Component {
  constructor() {
    super()
      this.state = {
        movies_list: [],
        newMovie_title: "",
        newMovie_director: "",
        newMovie_release_year: "",
        newMovie_rating: 0,
        newMovie_poster_URL: "",
        editMovie_title: "",
        editMovie_director: "",
        editMovie_release_year: "",
        editMovie_rating: 0,
        editMovie_poster_URL: "",
        editedMovie: [],
        selectedMovie: []
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

handleChangeEdit = (event) => {
  const { value, name } = event.target
  this.setState({
    [name]: value
  })
}

editMovie = (event) => {
   fetch(`http://localhost:3002/${event.target.id}`)
   .then(response => response.json())
   .then(response => {
      this.setState({
        editedMovie: response
      })
  })
}

selectMovie = (event) => {
  fetch(`http://localhost:3002/${event.target.id}`)
  .then(response => response.json())
  .then(response => {
     this.setState({
       selectedMovie: response
     })
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
  .then(response => {
    this.setState({
      movies_list: [...this.state.movies_list, response[0]]
    })
  })
}
  
  render() {
    return (
        <div className="App">
          <div className= "body">
            <Header />
            <Route exact path="/" render={() => (<Main />)}/>
            <Route path="/movies" render={() => (<MovieList selectMovie= {this.selectMovie} movies= {this.state.movies_list} editMovie= {this.editMovie} />)} />
            <Route path="/newmovie" render={() => (<New_Movie handleChange= {this.handleChange} submitNewMovie= {this.submitNewMovie}/>)} />
            <Route path="/editmovie" render={() => (<Edit_Movie editedMovie= {this.state.editedMovie} />)} />
            <Route path="/viewmovie" render={() => (<View_Movie selectedMovie= {this.state.selectedMovie}/>)} />
            <Footer />
          </div>
        </div>
    )
  }
}

export default App;
