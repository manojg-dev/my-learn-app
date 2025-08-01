import React from 'react';

function Navbar() {
  return (
    <nav className="navbar-3d">
      <div className="navbar-container">
        <span className="navbar-logo">My Learn App</span>
        <ul className="navbar-links">
          <li><a href="#main-slider">Home</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#services-section">Services</a></li>
          <li><a href="#contact-section">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
