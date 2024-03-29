import React from 'react';
import './AboutUs.css'
const AboutUs = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="about-us" id='aboutUs'>
      <h2>About Us</h2>
      <p>Connect with us on social media:</p>
      <ul className="social-links">
        <li>
          <a href="https://twitter.com/yourprofile"><i className="fa-brands fa-twitter"></i></a> 
        </li>
        <li>
          <a href="https://facebook.com/yourprofile"><i className="fa-brands fa-facebook"></i></a>
        </li>
        <li>
          <a href="https://instagram.com/yourprofile"> <i className="fa-brands fa-instagram"></i></a>
        </li>
      </ul>
      <footer>
        <p>&copy; {currentYear} Furnituristic. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
