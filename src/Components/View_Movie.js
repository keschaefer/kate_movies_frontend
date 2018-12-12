import React from "react"

const View_Movie = (props) => {
   if(props.selectedMovie.length > 0) {
      return props.selectedMovie.map(movie => {
      return(
      <div key= {movie.id} class="card">
         <img class="card-img-top" src={movie.poster_url} alt="Movie poster"></img>
         <div class="card-body">
         <h5 class="card-title">{movie.title}</h5>
         <p class="card-text">{movie.director}</p>
         <p class="card-text">{movie.rating}</p>
         <p class="card-text">{movie.release_year}</p>
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