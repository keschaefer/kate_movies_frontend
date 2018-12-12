import React from "react"
import { Link } from 'react-router-dom'

const View_Movie = (props) => {
   if(props.selectedMovie.length > 0) {
      return props.selectedMovie.map(movie => {
         return(
            <div>
               {/* <Link to= "/movies">
                  <button>Back to Movies</button>
               </Link> */}
               <div className="card-container">
                  <div key= {movie.id} class="card">
                     <img class="card-img-top" src={movie.poster_url} alt="Movie poster"></img>
                     <div class="card-body">
                        <h5 class="card-title">{movie.title}</h5>
                        <p class="card-text">Directed by: {movie.director}</p>
                        <p class="card-text">Rating: {movie.rating}</p>
                        <p class="card-text">Release: {movie.release_year}</p>
                     </div>
                  </div>
               </div>
            </div>
         )
      })
   } else {
      return (
         <div>Waiting to select</div>
      )
   }
}

export default View_Movie