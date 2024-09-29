import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'
function About(props) {
  return (
    <div>
    <Nav></Nav>
    
    <div className='flex flex-col space-y-4  max-md:p-2 p-10 bg-purple-100 w-[100%] overflow-hidden shadow-black shadow-md'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="bootcamp Img" className='shadow-purple-400 shadow-sm w-[15em] max-md:w-[8em]' />
      <div className='p-1 border-1 flex flex-col space-y-4'>
        <h2 className='max-md:text-2xl text-5xl font-bold text-purple-600'>Javascript</h2>
        <p className='text-black max-md:text-lg text-2xl '>
            This is javascript bootcamp.
            You learn....stuff. 
            All related to web development.
            Sign up please.

            We teach react, React AND REACT.
        </p>
        
        <div className='max-md:grid flex max-md:space-x-0 space-x-9 '>
            <div className='max-md:text-lg text-2xl'>Time: <span className='text-purple-700 font-semibold  '>10/10/2024</span></div>
            <div className='max-md:text-lg text-2xl'> location : <span className='text-purple-700 font-semibold  '>riyadh</span></div>
            <div className='max-md:text-lg text-2xl'> Duration: <span className='text-purple-700 font-semibold  '>5 months</span></div>
        </div>
       
      </div>
    </div>
    </div>
  )
}

export default About
