import React from 'react'

const CategorySelection = ({onSelectCategory, activeCategory}) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

  return (
    <div className='px-4 mb-4 gap-3 lg:space-x-16 flex flex-wrap items-center border-b-2 py-5 text-gray-900 font-semibold'>
        <button className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`} 
        onClick={() => onSelectCategory(null)}>All</button>
        {
            categories.map((Category) =>(
                <button
                onClick={() => onSelectCategory(Category)}
                className={`mr-2 space-x-16 ${activeCategory === Category ? "active-button" : ""}`}
                key={Category}>{Category}</button>
            ))
        }
      
    </div>
  )
}

export default CategorySelection