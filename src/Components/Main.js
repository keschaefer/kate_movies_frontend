import React from 'react';
import { Link } from 'react-router-dom'

const Main = () => {
   return(
      <div className= 'main-home'>
         <img src='https://media.vanityfair.com/photos/56afc980f5d299ff0d00cc8f/master/w_768,c_limit/FINAL-hollywood-portfolio-2016-vf-cover-annie-leibovitz-jennifer-lawrence-viola-davis-jane-fonda.jpg' alt='women in film 2016 Vanity Fair Cover'></img>
         <Link to='/movies'>
            <button>Go To My Movies</button>
         </Link>
      </div>
   )
}

export default Main