import React, { Component } from 'react';
import './index.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js'
import Footer from './Components/Footer.js'
import MovieListContainer from './Components/MovieListContainer.js'
import NewMovie from './Components/NewMovie.js'
import EditMovie from './Components/EditMovie.js'
import ViewMovie from './Components/ViewMovie.js'
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
        editMovieId: "",
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
   this.getRequest()
  }

getRequest = () => {
  fetch('https://kate-movies-backend.herokuapp.com')
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

selectMovie = (event) => {
  fetch(`https://kate-movies-backend.herokuapp.com/${event.target.id}`)
  .then(response => response.json())
  .then(response => {
     this.setState({
       selectedMovie: response
     })
  })
}

populateEditMovie = (event) => {
  fetch(`https://kate-movies-backend.herokuapp.com/${event.target.id}`)
  .then(response => response.json())
  .then(response => {
     this.setState({
        selectedMovie: response,
        editMovieId: response[0].id,
        editMovie_title: response[0].title,
        editMovie_director: response[0].director,
        editMovie_release_year: response[0].release_year,
        editMovie_rating: response[0].rating,
        editMovie_poster_URL: response[0].poster_url,
      })
  })
}

submitNewMovie = (event) => {
  let newMovie = {
    title: this.state.newMovie_title,
    director: this.state.newMovie_director,
    release_year: this.state.newMovie_release_year,
    rating: this.state.newMovie_rating,
    poster_url: this.state.newMovie_poster_URL,
  }
  fetch("https://kate-movies-backend.herokuapp.com", {
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

editMovie = (event) => {
  event.preventDefault()
  let changedMovie = {
    id: Number(this.state.editMovieId),
    title: this.state.editMovie_title,
    director: this.state.editMovie_director,
    release_year: this.state.editMovie_release_year,
    rating: Number(this.state.editMovie_rating),
    poster_url: this.state.editMovie_poster_URL,
  }
  fetch(`https://kate-movies-backend.herokuapp.com/${changedMovie.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(changedMovie)
  })
  .then(() => this.getRequest())
  .then(movies => {
    this.setState({
      movies_list: movies
    })
  })
}

deleteMovie = (event) => {
  fetch(`https://kate-movies-backend.herokuapp.com/${Number(event.target.id)}`, {
    method: "DELETE",
  })
  let movies = this.state.movies_list.filter(movie => {
    return movie.id !== Number(event.target.id)
  })
  this.setState({
    movies_list: movies
  })
}

render() {
  return (
      <div className= "App">
        <div className= "body">
          <Header />
          <Route exact path= "/" render= {() => (<Main />)} />
          <Route path= "/movies" render= {() => (<MovieListContainer selectMovie= {this.selectMovie} movies= {this.state.movies_list} populateEditMovie= {this.populateEditMovie} deleteMovie= {this.deleteMovie}/>)} />
          <Route path= "/newmovie" render= {() => (<NewMovie handleChange= {this.handleChange} submitNewMovie= {this.submitNewMovie}/>)} />
          <Route path= "/editmovie" render= {() => (<EditMovie handleChange= {this.handleChange} selectedMovie= {this.state.selectedMovie} editMovie= {this.editMovie}/>)} />
          <Route path= "/viewmovie" render= {() => (<ViewMovie selectedMovie= {this.state.selectedMovie}/>)} />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
