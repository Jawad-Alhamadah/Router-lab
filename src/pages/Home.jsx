import React from 'react'
import Nav from '../components/Nav'
import BootcampCard from '../components/BootcampCard'
function Home() {
  return (
    <div>
        <Nav></Nav>
        <div className='p-5 justify-center flex flex-wrap'>
        <BootcampCard src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"></BootcampCard>
        </div>
       
        
    </div>
  )
}

export default Home
