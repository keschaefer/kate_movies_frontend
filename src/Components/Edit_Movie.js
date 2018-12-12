import React from "react"

const Edit_Movie = (props) => {
   // return props.editedMovie.map(movie => {
      return (
      <div>
         <h2>Edit Your Movie</h2> 
         <button>Back to Movies</button>
         <form className= "edit-form-container">
               <div className= "form-group">
                  <label>Movie Title</label>
                  <input name= "newMovie_title" onChange= {props.handleChangeEdit} type= "text" className= "form-control" placeholder= "Enter Movie Title"></input>
               </div>
               <div className= "form-group">
                  <label>Movie Director</label>
                  <input name= "newMovie_director" onChange= {props.handleChangeEdit} type= "text" className= "form-control" placeholder= "Enter Movie Director"></input>
               </div>
               <div className= "form-group">
                  <label>Release Year</label>
                  <input name= "newMovie_release_year" onChange= {props.handleChangeEdit} type= "number" className= "form-control" placeholder= "Enter Movie Release Year"></input>
               </div>
               <div className= "form-group">
                  <label>Poster URL</label>
                  <input name= "newMovie_poster_URL" onChange= {props.handleChangeEdit} type= "text" className= "form-control" placeholder= "Enter Movie Release Year"></input>
               </div>
               <div className= "form-group">
                  <label>Rate This Movie</label>
                  <select name= "newMovie_rating" onChange= {props.handleChangeEdit} className= "form-control">
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                  </select>
               </div>
               <button onClick= {props.submitNewMovie} type= "submit" className= "btn btn-primary">Submit</button>
            </form>
      </div>
      )
}

export default Edit_Movie

