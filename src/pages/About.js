import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <div className="section">
        <h1 className="section-title">About Us</h1>
        
        <div className="about-content">
          <div className="about-section">
            <h2 className="section-subtitle">Our Mission</h2>
            <p>
              The York University Steel Bridge Team is dedicated to fostering excellence in structural engineering 
              through hands-on experience in designing, analyzing, fabricating, and constructing steel bridges. 
              We compete in regional and national competitions, pushing the boundaries of engineering innovation 
              while developing practical skills that prepare our members for successful careers in engineering.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-subtitle">Who We Are</h2>
            <p>
              We are a diverse group of engineering students at York University who share a passion for structural 
              engineering and bridge design. Our team consists of dedicated members from various engineering disciplines 
              who work collaboratively to bring innovative bridge designs to life. Through our participation in steel 
              bridge competitions, we gain valuable experience in project management, teamwork, and technical problem-solving.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-subtitle">What We Do</h2>
            <p>
              Our team engages in a comprehensive process that includes structural analysis, design optimization, 
              detailed drafting, precision fabrication, and competitive assembly. We participate in the annual 
              Steel Bridge Competition, where teams from universities across the region compete to build the most 
              efficient, lightweight, and structurally sound bridge. This competition challenges us to balance 
              design innovation with practical constraints, teaching us valuable lessons in engineering judgment 
              and project execution.
            </p>
          </div>

          <div className="about-section">
            <h2 className="section-subtitle">Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <h3>Innovation</h3>
                <p>Pushing the boundaries of structural design and engineering solutions</p>
              </div>
              <div className="value-card">
                <h3>Excellence</h3>
                <p>Striving for the highest standards in all aspects of our work</p>
              </div>
              <div className="value-card">
                <h3>Teamwork</h3>
                <p>Collaborating effectively to achieve common goals</p>
              </div>
              <div className="value-card">
                <h3>Learning</h3>
                <p>Continuous growth and development of engineering skills</p>
              </div>
            </div>
          </div>

          <div className="about-section">
            <h2 className="section-subtitle">Join Us</h2>
            <p>
              Whether you're interested in structural analysis, fabrication, project management, or outreach, 
              there's a place for you on our team. We welcome students from all engineering disciplines who 
              are eager to learn and contribute. Check out our subteams page to learn more about how you can 
              get involved, or fill out our{' '}
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScsZQtUL2F8i5tkxxuuqqo8QWuMCJX1jzST4t6NSuoPOMIj8Q/viewform" target="_blank" rel="noopener noreferrer">member signup form</a> to join!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
