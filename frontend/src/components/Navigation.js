import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navigation.css';

function Navigation({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          &lt;Kabilan T /&gt;
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setMenuOpen(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
