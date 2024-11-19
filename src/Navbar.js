import React, { useState } from 'react';
import './App.css';
import insta from './svg/instagram.svg';
import line from './svg/pembatas.svg';
import logo from './svg/bfs.svg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Burger Icon */}
      <div className="burger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <a href="#description">Description</a>
        <a href="#features">Features</a>
        <a href="#how-to-play">How to Play</a>
        <a href="#videodemos">Video Demo</a>
        <a href="#about">About</a>
        <a href="#available-now">Available Now</a>
      </div>
      <div className="navbar-icons">
        <img src={insta} alt="Line" className="navbarImageInsta"/>
        <img src={line} alt="Line" className="navbarImageLine"/>
        <img src={logo} alt="Line" className="navbarImageLogo"/>

      </div>
    </nav>


  );
};

export default Navbar;
