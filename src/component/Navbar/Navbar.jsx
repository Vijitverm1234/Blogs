import React from 'react'
import './Navbar.css'
import { Home, Book, Star, HomeIcon, BookAIcon, Presentation, Info, MessageCircle } from 'lucide-react';
const Navbar = () => {
  return (
    <nav>
        <div className="left">
        <img src='Logo.gif' alt="" height={80}  />
        </div>
        <div className='middle'>
            
            <div><HomeIcon></HomeIcon> Home</div>
            <div> <BookAIcon></BookAIcon> Blogs</div>
            <div> <Info></Info> About</div>
        </div>
        <div className="right">
           <button className='connect'>
          <MessageCircle></MessageCircle>  Connect ?
           </button>
        </div>
    </nav>
  )
}

export default Navbar
