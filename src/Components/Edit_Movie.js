import React from "react"
import { Link } from "react-router-dom"

const Edit_Movie = (props) => {
   return props.selectedMovie.map(movie => {
      return (
      <div className= "form-container">
         <h2>Edit Your Movie</h2> 
         <form className= "edit-form-container">
               <div className= "form-group">
                  <label>Movie Title</label>
                  <input name= "editMovie_title" onChange= {props.handleChange} type= "text" className= "form-control" defaultValue={movie.title}></input>
               </div>
               <div className= "form-group">
                  <label>Movie Director</label>
                  <input name= "editMovie_director" onChange= {props.handleChange} type= "text" className= "form-control" defaultValue= {movie.director}></input>
               </div>
               <div className= "form-group">
                  <label>Release Year</label>
                  <input name= "editMovie_release_year" onChange= {props.handleChange} type= "number" className= "form-control" defaultValue= {movie.release_year}></input>
               </div>
               <div className= "form-group">
                  <label>Poster URL</label>
                  <input name= "editMovie_poster_URL" onChange= {props.handleChange} type= "text" className= "form-control" defaultValue= {movie.poster_url}></input>
               </div>
               <div className= "form-group">
                  <label>Rate This Movie</label>
                  <select name= "editMovie_rating" onChange= {props.handleChange} className= "form-control" defaultValue= {movie.rating}>
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                  </select>
               </div>
               {/* <Link to= "/movies"> */}
                  <button onClick= {props.editMovie} type= "submit" className= "btn btn-primary">Submit</button>
               {/* </Link> */}
            </form>
      </div>
      )
})
}

export default Edit_Movie

