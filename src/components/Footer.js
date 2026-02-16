import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="YorkU Steel Bridge Logo" className="footer-logo" />
          <p>Building excellence in engineering</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/subteams">Subteams</Link>
          <Link to="/contact">Contact/Sponsor</Link>
          <Link to="/faq">FAQ</Link>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScsZQtUL2F8i5tkxxuuqqo8QWuMCJX1jzST4t6NSuoPOMIj8Q/viewform" target="_blank" rel="noopener noreferrer">Member Signup</a>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>York University</p>
          <p>Toronto, ON, Canada</p>
          <a href="mailto:yorkusteelbridge@gmail.com">yorkusteelbridge@gmail.com</a>
          <div className="footer-social">
            <a href="https://www.instagram.com/yorkusteelbridge/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="https://www.linkedin.com/company/yorku-steel-bridge" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} York University Steel Bridge Team. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
