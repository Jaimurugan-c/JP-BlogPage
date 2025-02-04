import React from 'react'
import { Outlet } from 'react-router-dom'
import AboutPage from '../../Componets/Acomp'

const About = () => {
  return (
    <div>
       <div className='py-40 bg-black text-center text-white px-4'>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>About-us</h1>
  </div>
      <Outlet/>
      {AboutPage}
      <AboutPage/>
    </div>
    
  )
}

export default About
