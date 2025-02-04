import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import Pagination from './Pagination';
import SideBar from './SideBar';
import CategorySelection from './CategorySelection';


const Blogpage = () => {
  const [blogs,setBlogs]= useState([])
  const[currentPage,setcurrentPage]=useState(1);
  const pageSize=12;
  const[selectedCategory,setselectedcategory]=useState(null);
  const [activecategory,setActivecategory]=useState(null);
  useEffect(() =>{
    async function fethchBlogs() {
      let url=`http://localhost:5000/blogs?page$(currentPage)&limit=(pageSize)`
        if(selectedCategory){
          url += '&category=$(selectedCategory)'
        }
      const response = await fetch (url);
      const data = await response.json();
      
      setBlogs(data);
    }
    fethchBlogs()
  },[currentPage,pageSize,selectedCategory])
   const handlePageChange=(pageNumber)=>{
    setcurrentPage(pageNumber)
   }  
   const handlecategorychange=()=>{
    setselectedcategory(Category)
    setcurrentPage(1);
    setActivecategory(Category)
   }
  return (
    <div>
       <div><CategorySelection onSelectCategory={handlecategorychange} selectedCategory={selectedCategory} activecategory={activecategory}/></div>
       <div className='flex flex-col lg:flex-row gap-16'>
        <BlogCards  Blogs={blogs} currentPage={currentPage}selectedCategory={selectedCategory}pageSize={pageSize}/>
        <div className='mt-12'>
        <SideBar/>
       </div>
       </div>
      
       <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
       </div>
    </div>
  )
}

export default Blogpage
