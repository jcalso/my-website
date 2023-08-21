import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
  return (
    <div>        
        <div className="header">
          <Link to="/" className="brand-name"> Jonathan Calso</Link>
          <ul className="nav-links">
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/resume">RESUME</Link></li>
              <li><Link to="/thoughts">THOUGHTS</Link></li>
          </ul>
        </div>
    </div>
  );
}

export default Header;