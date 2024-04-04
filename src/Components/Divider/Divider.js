import React from 'react';
import './Divider.css';

const Divider = ({ text }) => {
  return (
    <div className="divider-container">
      <hr className="divider-line" />
      <span className="divider-text">{text}</span>
      <hr className="divider-line" />
    </div>
  );
}

export default Divider;
