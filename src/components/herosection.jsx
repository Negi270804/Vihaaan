
import React from 'react';
import Hero from "../assets/Hero.jpg";
import './herosection.css';  // Importing the CSS file

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <div className="main-heading heading-1">No more learning alone.</div>
        <div className="main-heading-2 subheading">Real-time feedback lets your teacher support you better,</div>
        <div className="main-heading-2 subheading"> right when you need it.</div>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="Hero" />
      </div>
    </div>
  );
};

export default HeroSection;
