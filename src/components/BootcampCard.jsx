import React from 'react'
import { Link } from 'react-router-dom'
function BootcampCard(props) {
  return (
    <div className=' bg-purple-100 max-md:w-[16em] w-[22em] rounded-xl overflow-hidden shadow-black shadow-md'>
      <img src={props.src} alt="bootcamp Img" className='shadow-purple-400 shadow-md' />
      <div className='p-3 border-1 flex flex-col'>
        <h2 className='text-2xl font-bold text-purple-600'>Javascript</h2>
        <p className='text-purple-500 text-lg font-'>
            This is javascript bootcamp.
            You learn....stuff. 
            All related to web development.
            Sign up please.
        </p>
        <button className="text-lg font-semibold self-end bg-purple-600 px-5 py-1 rounded-md text-white"><Link className='text-white text-2xl'  to="/about" time="10/10/2024">About</Link></button>
      </div>
    </div>
  )
}

export default BootcampCard
