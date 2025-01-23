import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navigation'>

      <ul className='elements'>
        <li><Link to="/">ABOUT</Link></li>
        <li><Link to="/Certification">CERTIFICATIONS</Link></li>
        <li><Link to="/Education">EDUCATION</Link></li>
        <li><Link to="/Projects">PROJECTS</Link></li>
      </ul>
    </div>
  )
}

export default Navbar