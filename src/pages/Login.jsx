import React from 'react'
import Nav from '../components/Nav'

function Login() {
  return (
    <div>
      <Nav/>
     

    <div className='flex justify-center mt-28 '>

    <div className=' rounded-lg overflow-hidden bg-purple-100 max-md:grid flex mt-26 max-md:w-[20em] text-center h-[20em] max-md:h-[15em] w-[30em]'>
        <div className='bg-purple-700 p-7'>
          <h2 className='mt-3 text-purple-50 text-2xl font-bold'>Login to Our Site</h2>
        </div>
        <div className='max-md:space-y-5 space-y-6 p-2 flex flex-col justify-center items-center'>
          <input type="text"  className='p-1 bg-purple-50 border-[1px] border-purple-800 ' placeholder='username'/>
          <input type="text" className='p-1 bg-purple-50 border-[1px] border-purple-800 ' placeholder='password' />
        </div>

      </div>
    </div>
     
    </div>
  )
}

export default Login
