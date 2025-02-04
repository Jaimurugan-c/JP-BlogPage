import React from 'react'
import Blogpage from '../../Componets/Blogpage'

const Blog = () => {
  return (
  <>
  <div className='py-40 bg-black text-center text-white px-4'>
      <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Blog-page</h1>
  </div>
  <div className='max-w-7xl mx-auto'>
   <Blogpage/>
  </div>
  </>
  )
}

export default Blog
