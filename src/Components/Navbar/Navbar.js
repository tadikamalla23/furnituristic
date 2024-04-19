import { Link, useLocation} from 'react-router-dom';
import React, { useState } from 'react';


import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const getFeaturedProductsLink = () => {
    if (location.pathname === '/') {
      return '#products';
    } 
    return '/products'; 
  };

  //rendering navbar
  return (<>
   <nav className="navbar">
      <div className="navbar-logo">
      <Link to="/" className='logoname'><i className="fa-solid fa-couch"></i> Furnituristic...</Link>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href={getFeaturedProductsLink()}>Featured Products</a>
        <a href="#contact">ContactUs</a>
        <a href="#aboutUs">AboutUs</a>
      </div>

    </nav> 
    </>
  );
}

export default Navbar;
