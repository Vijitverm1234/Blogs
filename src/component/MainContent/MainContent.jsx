import React from 'react'
import './MainContent.css'
const MainContent = ({blogs,currBlog}) => {
  return (
    <div className='container' >
         <div className='main-pic'>
            <img src={blogs[currBlog].main_photo} alt="" />
         </div> 
         <hr />
         <div className='description'>
            <div className='heading'>Objective</div>
             {blogs[currBlog].des}
         </div>
        <hr />
         <div className='list'>
            <div className='heading'>Observations</div>
             {blogs[currBlog].list.map((item,ind)=>(
                <li key={ind}>{item}</li>
             ))}
         </div>
         <hr />
         <div className='conclusion'>
            <div className='heading'>Conclusion</div>
            {blogs[currBlog].conclusion}
         </div>
         <hr />
         <div className="screenshot">
            <div className='heading'>ScreenShot</div>
            <div className="screenshot-grid">
          {blogs[currBlog].screenshot.map((item, ind) => (
            <img src={item} key={ind} alt={`${blogs[currBlog].title} screenshot ${ind + 1}`} className="screenshot-img" />
          ))}
          </div>
        </div>
        <hr />
    </div>
  )
}

export default MainContent
