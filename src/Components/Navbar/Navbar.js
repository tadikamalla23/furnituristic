import React from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {

  return (<>
    <nav className="navbar">
        <div className="navbar-logo">
            <Link to="/" className='logoname'><i className="fa-solid fa-couch"></i> Furnituristic</Link>
        </div>
        <div className="navbar-links">
            <a href="#products">Featured Products</a>
            <a href="#contact">ContactUs</a>
            <a href="#aboutUs">AboutUs</a>
        </div>
    </nav>
    </>
  );
};

export default Navbar;
