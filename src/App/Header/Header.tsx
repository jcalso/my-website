import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import './Header.css';

const Header: React.FC = () => {
  return (
    <Router>
      <div className="header">
        <Link to="/" className="brand-name"> Jonathan Calso</Link>
        <ul className="nav-links">
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/resume">RESUME</Link></li>
            <li><Link to="/thoughts">THOUGHTS</Link></li>
        </ul>
        <Routes>
          <Route path="/about"/>
          <Route path="/resume"/>
          <Route path="/thoughts" />
        </Routes>
      </div>
    </Router>
  );
}
export default Header;