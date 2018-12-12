import React from "react"
import MovieList from "./MovieList.js"
import { Link } from "react-router-dom"

const MovieListContainer = (props) => {
   return (
      <div className= "movie-list-container">
         <Link to= "/newmovie">
            <button className= "add-movie-btn btn btn-primary">Add New Movie</button>
         </Link>
         <MovieList selectMovie= {props.selectMovie} movies= {props.movies} editMovie= {props.editMovie} />
      </div>
   )
}

export default MovieListContainer