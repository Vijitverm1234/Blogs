import React from 'react'
import './Navbar.css'
import { Home, Book, Star, HomeIcon, BookAIcon, Presentation, Info, MessageCircle, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
        <div className="left">
        <img src='Logo.gif' alt="" height={80}  />
        </div>
        <div className='middle'>
            <Link style={{textDecoration:"none"}} to='/home'> <div><HomeIcon></HomeIcon> Home</div></Link>
            <Link style={{textDecoration:"none"}} to='/select'> <div><BookAIcon></BookAIcon> Blogs</div></Link>
            <Link style={{textDecoration:"none"}} to='/project'> <div><Workflow></Workflow> Project</div></Link>
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
