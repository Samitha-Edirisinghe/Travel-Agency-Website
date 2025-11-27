// src/components/Header/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <h2>TravelWorld</h2>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#destination">Destinations</a></li>
            <li><button className="btn">Book Now</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;