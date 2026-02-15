import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <h3>Let's Connect</h3>
          <p>Feel free to reach out for opportunities or just a friendly chat.</p>
        </div>

        <div className="social-links">
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter />
          </a>
          <a href="mailto:kabilant2007@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Kabilan T. All rights reserved. Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
