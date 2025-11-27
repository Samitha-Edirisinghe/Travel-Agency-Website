// src/components/SpecialOffers/SpecialOffers.js
import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
  const offers = [
    {
      title: "Tropical World People",
      image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80"
    },
    {
      title: "Mountain Lake Village",
      image: "https://images.unsplash.com/photo-1464822759844-d62ed505c1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      title: "Golf & Luxury",
      image: "https://images.unsplash.com/photo-1591492163381-3d9e1d341ac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      title: "Cultural Heritage",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];

  return (
    <section id="offers" className="special-offers section">
      <div className="container">
        <h2 className="section-title">Special Upcoming Offers</h2>
        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <div className="offer-image">
                <img src={offer.image} alt={offer.title} />
                <div className="offer-overlay">
                  <h3>{offer.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;