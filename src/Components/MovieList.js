import React from 'react';

const MovieList = (props) => {
   if (props.movies.length > 0) {
      return props.movies.map(movie => {
         return (
            <div className="list-group-item" key ={movie.id}>
                <div className="row">
                     <div className="col-md-4">{movie.title}</div>
                     <div className="col-md-4">{movie.director}</div>
                     <div className="col-md-1">{movie.release_year}</div>
                     <div className="col-md-1">{movie.rating}</div>
                     <div> <button className="col-md-1">Delete</button>
                     </div>
                     <div>
                        <button className="col-md-1">Edit</button>
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