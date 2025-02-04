import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram, FaTwitter } from 'react-icons/fa6'
const Footer = () => {
  return (
    <div className='bg-gray-900'>
     <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
      md:px-24 lg:px-4'>
   <div className="grid mb-8 lg:grid-cols-6 ">
    <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
        <div >
            <p className='text-white font-medium
             tracking-wide'>Category</p>
            <ul className='mt-2 space-y-2'>
                <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>News</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>World</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Games</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>References</a></li>
            </ul>
        </div>
          
        <div >
            <p className='text-white font-medium tracking-wide'>Apples</p>
            <ul className='mt-2 space-y-2'>
                <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Web</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>E-com</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Business</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Entertainment</a></li>
                 <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Portfolio</a></li>
            </ul>
        </div>
        <div >
            <p className='text-white font-medium 
            tracking-wide'>Cherry</p>
            <ul className='mt-2 space-y-2'>
                <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Media</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Brochers</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Non-profit</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Education</a></li>
                 <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Projects</a></li>
            </ul>
        </div>
        <div >
            <p className='text-white font-medium 
            tracking-wide'>Business</p>
            <ul className='mt-2 space-y-2'>
                <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Info</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Personal</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Wiki</a></li>
                  <li> <a href="/" 
                className='text-gray-200 transition-colors duration-300
                 hover:text-orange-500'>Forum</a></li>
                 
            </ul>
        </div>
       
    </div>
    <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5' >
            <p className='text-white font-medium 
            tracking-wide'>Get in touch</p>
           <form className='mt-4 flex flex-col md:flex-row ' >
            <input type='mail' name='mail'id='mail' 
            className='flex-grow w-full h-12 px-4 mb-3 transition-duration-200
             bg-white border border-gray-200 rounded shadow-sm
             aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none
              ' placeholder="Enter your mail" />
              <button type='submit' 
              className='inline-flex items-center 
              justify-center  border
              h-12 px-6 
              font-medium tracking-wide text-white transition
               duration-200 rounded shadow-md hover:bg-orange-500 focus:outline-none'
              >Send!</button>
           </form>
        </div>
   </div>
  <div className='flex flex-col justify-between 
  pt-5 pb-10 border-t
   border-gray-600 sm:flex-row'>
    <p className='text-white text-sm'> © Copyrights 2025 || All rights resvered.</p>
    <div className='flex items-center  space-x-4'>
      <a href="" className='text-gray-500 
      transition-all duration-200 hover:text-blue-200'><FaTwitter className='h-6 w-6'/></a>
       <a href="" className='text-gray-500 
      transition-all duration-200 hover:text-blue-200'><FaInstagram className='h-6 w-6'/></a>
       <a href="" className='text-gray-500 
      transition-all duration-200 hover:text-blue-200'><FaFacebook className='h-6 w-6'/></a>
    </div>
  </div>
 

     </div>
    </div>
  )
}

export default Footer
