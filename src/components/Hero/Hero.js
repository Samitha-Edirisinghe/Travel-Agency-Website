// src/components/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Discover Your Life, Travel</h1>
          <h2>Where You Want</h2>
          <p>We are the most famous and familiar place in our lives to play with the world in the world.</p>
          <button className="btn">Explore Now</button>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1335&q=80" 
            alt="Travel Destination" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;