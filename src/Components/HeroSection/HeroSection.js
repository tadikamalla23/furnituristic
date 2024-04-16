import React from 'react';
import './HeroSection.css'; // Ensure this file exists and contains the necessary styles
import bgImage from '../Images/sofa.jpeg'; // Ensure this path correctly points to your desired background image

const HeroSection = () => {
  return (
    <div className="card bg-dark text-white hero">
      <img src={bgImage} className="card-img" alt="Sofa" /> {/* Ensure alt text is descriptive */}
      <div className="card-img-overlay">
        <h1 className="card-title">Furnituristic..</h1>
        <p className="card-text">A new augumented reality experience for buying your ouw furniture..</p>
      </div>
    </div>
  );
}

export default HeroSection;
