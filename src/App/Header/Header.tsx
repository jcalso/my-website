import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <div className="header">
        <a href="#" className="brand-name"> Jonathan Calso</a>
        <ul className="nav-links">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#resume">RESUME</a></li>
            <li><a href="#contact">CONTACT</a></li>
        </ul>
    </div>

  );
}

export default Header;