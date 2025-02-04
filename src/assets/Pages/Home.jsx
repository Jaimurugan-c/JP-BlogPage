import React from 'react'
import Banner from '../../Componets/Banner'
import Blogpage from '../../Componets/Blogpage'
const Home = () => {
  return (
    <div>
    <Banner/>
    <div className='max-w-7xl mx-auto'>
      <Blogpage/>
    </div>
    </div>
  )
}

export default Home
