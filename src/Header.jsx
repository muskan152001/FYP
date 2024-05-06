import React from 'react';
import './Header.css'; // Importing the CSS file for styling
import  logo from './images/logo.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>
        Skin Cancer Detection
        </h1>
        {/* Your logo image */}
        <img src={logo} alt="Skin Cancer Detection" />
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About-Us</a></li>
          <li><a href="#tools">Tools</a></li> 
          <li><a href="#contact">Contact Us</a></li>
        </ul>
        </nav>
        
      <button className="get-started-button">Get Started</button>
      
    </header>

  );
}
export default Header;
