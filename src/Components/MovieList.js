import React from 'react';
import { Link } from 'react-router-dom'

const MovieList = (props) => {
   if (props.movies.length > 0) {
      return props.movies.map(movie => {
         return (
            <div className= "movie-list">
               <div className="list-group-item" id= {movie.id} key ={movie.id}>
                  <div className="row">
                     <div className="col-md-3">{movie.title}</div>
                     <div className="col-md-3">{movie.director}</div>
                     <div className="col-md-1">{movie.release_year}</div>
                     <div className="col-md-1">{movie.rating}</div>
                     <button className="form-btn col-md-1 btn btn-primary">Delete</button>
                     <div className= "col-md-1">
                        <Link to= "/editmovie">
                           <button onClick= {props.editMovie} id= {movie.id} className= "form-btn btn btn-primary">Edit</button>
                        </Link>
                     </div>
                     <div className= "col-md-1">
                        <Link to= "viewmovie">
                           <button onClick= {props.selectMovie} id= {movie.id} className= "form-btn btn btn-primary">View</button>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         )
   })} else {
   return (
      <div>
         <p>Waiting for movies to load...</p>
      </div>
   )
   }
}

export default MovieList