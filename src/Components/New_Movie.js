import React from "react"

const New_Movie = (props) => {
   return (
      <form className= "form-container">
         <div className= "form-group">
            <label>Movie Title</label>
            <input type= "text" className= "form-control" placeholder= "Enter Movie Title"></input>
         </div>
         <div className= "form-group">
            <label>Movie Director</label>
            <input type= "text" className= "form-control" placeholder= "Enter Movie Director"></input>
         </div>
         <div className= "form-group">
            <label>Release Year</label>
            <input type= "text" className= "form-control" placeholder= "Enter Movie Release Year"></input>
         </div>
         <div className= "form-group">
            <label>Rate This Movie</label>
            <select className= "form-control">
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