import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="/" className="navbar__logo">Mert Aytemiz</a>
      </div>
      <div className="navbar__right">
        <ul className="navbar__menu">
          <li>
            <a href="#aboutme">About Me</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
