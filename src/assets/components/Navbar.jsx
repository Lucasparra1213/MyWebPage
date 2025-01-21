import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='navigation'>

      <ul>
        <li><Link to="/">ABOUT</Link></li>
        <li><Link to="/Certification">CERTIFICATION</Link></li>
        <li><Link to="/Education">EDUCATION</Link></li>
        <li><Link to="/Projects">PROJECTS</Link></li>
      </ul>
    </div>
  )
}

export default Navbar