import React from "react"
import { Link } from 'react-router-dom'

const New_Movie = (props) => {
   return (
      <div className= "form-container">
         <h2>Add a New Movie</h2>
      <form className= "edit-form-container">
         <div className= "form-group">
            <label>Movie Title</label>
            <input name= "newMovie_title" onChange= {props.handleChange} type= "text" className= "form-control" placeholder= "Enter Movie Title"></input>
         </div>
         <div className= "form-group">
            <label>Movie Director</label>
            <input name= "newMovie_director" onChange= {props.handleChange} type= "text" className= "form-control" placeholder= "Enter Movie Director"></input>
         </div>
         <div className= "form-group">
            <label>Release Year</label>
            <input name= "newMovie_release_year" onChange= {props.handleChange} type= "number" className= "form-control" placeholder= "Enter Movie Release Year"></input>
         </div>
         <div className= "form-group">
            <label>Poster URL</label>
            <input name= "newMovie_poster_URL" onChange= {props.handleChange} type= "text" className= "form-control" placeholder= "Enter Movie Release Year"></input>
         </div>
         <div className= "form-group">
            <label>Rate This Movie</label>
            <select name= "newMovie_rating" onChange= {props.handleChange} className= "form-control">
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
            </select>
         </div>
         <Link to= "/movies">
            <button onClick= {props.submitNewMovie} type= "submit" className= "btn btn-primary">Submit</button>
         </Link>
      </form>
      </div>
   )
}

export default New_Movie