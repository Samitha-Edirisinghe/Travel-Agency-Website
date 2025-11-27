// src/components/RecommendedDestination/RecommendedDestination.js
import React from 'react';
import './RecommendedDestination.css';

const RecommendedDestination = () => {
  return (
    <section id="destination" className="recommended-destination section">
      <div className="container">
        <h2 className="section-title">Recommended Destination</h2>
        <div className="discount-banner">
          <h3>Don't Miss The 50% Discount If You Register Today</h3>
          <p>Register now and get 50% off on your first booking. Limited time offer!</p>
          <button className="btn">Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default RecommendedDestination;