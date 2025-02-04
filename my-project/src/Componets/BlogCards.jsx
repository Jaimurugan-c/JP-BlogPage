import React from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from 'react-icons/fa';
const BlogCards = ({Blogs,currentPage,selectedCategory,pageSize}) => {
    const filteredBlogs = Blogs.filter((blogs)=>!selectedCategory||blogs.category === selectedCategory)
    .slice((currentPage-1)*pageSize,currentPage*pageSize);
    console.log(filteredBlogs)
  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
        {
      filteredBlogs.map((blog) =>
      <Link 
      key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
        <div>
            <img src={blog.image} alt='' className='w-full'/>
        </div>
        <h3 className='mt-4 mb-2 font-bold hover:text-blue-600'>{blog.title}</h3>
           
            <p className='mb-2  text-gray-700'><FaUser className='inline-flex item-center mr-2'/>{blog.author}</p>
            <p className='text-sm text-gray-900' >Published:{blog.published_date}</p>
            
      </Link>)
      }
    </div>
  )
}

export default BlogCards
