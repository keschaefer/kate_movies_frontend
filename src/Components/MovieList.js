import React from 'react';
import { Link } from 'react-router-dom'

const MovieList = (props) => {
      // <Link to= "/newmovie">
      //    <button>Add New Movie</button>
      // </Link>
   if (props.movies.length > 0) {
      return props.movies.map(movie => {
         return (
            <div>
               <div className="list-group-item" id= {movie.id} key ={movie.id}>
                  <div className="row">
                     <div className="col-md-3">{movie.title}</div>
                     <div className="col-md-3">{movie.director}</div>
                     <div className="col-md-1">{movie.release_year}</div>
                     <div className="col-md-1">{movie.rating}</div>
                     <button className="col-md-1 btn btn-primary">Delete</button>
                     <Link to= "/editmovie">
                        <button onClick= {props.editMovie} id= {movie.id} className="col-md-12 btn btn-primary">Edit</button>
                     </Link>
                     <Link to= "viewmovie">
                        <button onClick= {props.selectMovie} id= {movie.id} className="col-md-12 btn btn-primary">View</button>
                     </Link>
                  </div>
               </div>
            </div>
         )
   })} else {
   return (
      <div>
         <p>Still Waiting...</p>
      </div>
   )
   }
}

export default MovieList