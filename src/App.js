// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import SpecialOffers from './components/SpecialOffers/SpecialOffers';
import Gallery from './components/Gallery/Gallery';
import RecommendedDestination from './components/RecommendedDestination/RecommendedDestination';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhyChooseUs />
      <SpecialOffers />
      <Gallery />
      <RecommendedDestination />
      <Footer />
    </div>
  );
}

export default App;