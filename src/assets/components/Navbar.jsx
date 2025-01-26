import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navigation'>

      <div className='elements'>
        <a><Link to="/">ABOUT</Link></a>
        <a><Link to="/Certification">CERTIFICATIONS</Link></a>
        <a><Link to="/Education">EDUCATION</Link></a>
        <a><Link to="/Projects">PROJECTS</Link></a>
      </div>
    </div>
  )
}

export default Navbar