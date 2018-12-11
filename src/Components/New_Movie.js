import React from "react"

const New_Movie = (props) => {
   return (
      <form className= "form-container">
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
            <input name= "newMovie_release_year" onChange= {props.handleChange} type= "text" className= "form-control" placeholder= "Enter Movie Release Year"></input>
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
         <button type= "submit" className= "btn btn-primary">Submit</button>
      </form>
   )
}

export default New_Movie