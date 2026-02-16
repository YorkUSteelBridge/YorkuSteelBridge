import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-hero">
        <div className="hero-content">
          <img src={logo} alt="YorkU Steel Bridge Logo" className="hero-logo" />
          <h1 className="hero-title">York University</h1>
          <h2 className="hero-subtitle">Steel Bridge Team</h2>
          <p className="hero-description">
            Building excellence in engineering through innovation, precision, and teamwork.
            Join us as we design, analyze, and construct steel bridges that push the boundaries of structural engineering.
          </p>
          <div className="hero-buttons">
            <Link to="/about" className="btn">Learn More</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScsZQtUL2F8i5tkxxuuqqo8QWuMCJX1jzST4t6NSuoPOMIj8Q/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Join the Team</a>
            <Link to="/contact" className="btn btn-outline">Get Involved</Link>
          </div>
        </div>
      </div>

      <div className="landing-features">
        <div className="section">
          <h2 className="section-title">What We Do</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3>Design & Analysis</h3>
              <p>Advanced structural analysis and innovative bridge designs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Fabrication</h3>
              <p>Precision fabrication and assembly of steel structures</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Teamwork</h3>
              <p>Collaborative environment fostering engineering excellence</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Competition</h3>
              <p>Competing in regional and national steel bridge competitions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="landing-cta">
        <div className="section">
          <h2>Ready to Build Something Amazing?</h2>
          <p>Join our team or support our mission</p>
          <div className="cta-buttons">
            <Link to="/subteams" className="btn btn-outline">Explore Subteams</Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScsZQtUL2F8i5tkxxuuqqo8QWuMCJX1jzST4t6NSuoPOMIj8Q/viewform" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Member Signup</a>
            <Link to="/contact" className="btn btn-outline">Sponsor Us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
