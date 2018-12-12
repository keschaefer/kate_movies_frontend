import React from "react"

const ViewMovie = (props) => {
   if(props.selectedMovie.length > 0) {
      return props.selectedMovie.map(movie => {
         return(
            <div key= {movie.id}>
               <div className="card-container">
                  <div key= {movie.id} className="card">
                     <img className="card-img-top" src={movie.poster_url} alt="Movie poster"></img>
                     <div className="card-body">
                        <h5 className="card-title">{movie.title}</h5>
                        <p className="card-text">Directed by: {movie.director}</p>
                        <p className="card-text">Rating: {movie.rating}</p>
                        <p className="card-text">Release: {movie.release_year}</p>
                     </div>
                  </div>
               </div>
            </div>
         )
      })
   } else {
      return (
         <div>Waiting to show movie...</div>
      )
   }
}

export default ViewMovie