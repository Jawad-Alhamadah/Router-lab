import React from 'react'
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div className=' bg-purple-700 p-3'>
        <ul className='flex space-x-7'>
            <Link className='text-white text-2xl'  to="/">Home</Link>
            <Link className='text-white text-2xl'  to="/login">Login</Link>
            
     
        </ul>

      
    </div>
  )
}

export default Nav
