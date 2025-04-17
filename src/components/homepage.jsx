import React from 'react';
import Navbar from './navbar';
import HeroSection from './herosection';
import Footer from './footer';
import './homepage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default HomePage;
