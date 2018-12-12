import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
   return (
      <div className= "header">
         <span>Kate's Movie Picks</span>
            <Link to="/movies">
               <button className= "movies-btn btn btn-primary">Go To My Movies</button>
            </Link>
      </div>
   )
}

export default Header