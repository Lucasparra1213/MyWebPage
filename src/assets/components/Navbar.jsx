import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navigation'>

      <div className='elements'>
        <p><Link to="/">ABOUT</Link></p>
        <p><Link to="/Certification">CERTIFICATIONS</Link></p>
        <p><Link to="/Education">EDUCATION</Link></p>
        <p><Link to="/Projects">PROJECTS</Link></p>
      </div>
    </div>
  )
}

export default Navbar