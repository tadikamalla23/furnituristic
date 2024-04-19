import React from 'react';

import bgImage from '../Images/background-sofa.png';

import './HeroSection.css'; 

const HeroSection = () => {
  return (
    <div className="card bg-dark text-white hero">
      <img src={bgImage} className="card-img" alt="Sofa" /> 
      <div className="card-img-overlay">
        <h1 className="card-title">Furnituristic..</h1>
        <p className="card-text">A new augumented reality experience for buying your ouw furniture..</p>
      </div>
    </div>
  );
}

export default HeroSection;
