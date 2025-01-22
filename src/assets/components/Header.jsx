import React from 'react';
import '../styles/Header.css';


const Header = () => {
  return (
    <div className='header-container'>
      <img src="/Images/Lucas .2.png" alt="Profile Img" />
      <h1>Lucas Parra</h1>
      <h2>UI Developer</h2>
      <div className='logos'>
        <a href="https://github.com/Lucasparra1213">
          <img src="/Images/Github.svg" alt="GitHub Logo" />
        </a>
        <a href="https://www.linkedin.com/in/lucasjparra/">
          <img src="/Images/LinkedIn.svg" alt="LinkedIn Logo" />
        </a>
        <a className='download' href='/downloads/Resume_Lucas_Parra.pdf' download="Resume_Lucas_Parra.pdf" target="_blank">
        <img src='/Images/Download.svg' alt='Download Resume'/>

        </a>

      </div>
    </div>
  );
}

export default Header;
