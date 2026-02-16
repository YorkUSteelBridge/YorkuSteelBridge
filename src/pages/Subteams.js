import React, { useState } from 'react';
import '../styles/Subteams.css';

const Subteams = () => {
  const [activeTab, setActiveTab] = useState('finance');

  const subteams = {
    finance: {
      title: 'Finance and Logistics',
      icon: '💰',
      description: 'The Finance and Logistics subteam manages the team\'s budget, procurement, and resource allocation. They ensure we have the materials and resources needed to succeed.',
      responsibilities: [
        'Budget planning and management',
        'Material procurement and vendor relations',
        'Resource allocation and inventory management',
        'Financial reporting and documentation',
        'Grant and sponsorship coordination'
      ]
    },
    promotions: {
      title: 'Promotions and Outreach',
      icon: '📢',
      description: 'The Promotions and Outreach subteam handles all external communications, marketing, and community engagement. They help build our brand and connect with sponsors and the community.',
      responsibilities: [
        'Social media management',
        'Website and content creation',
        'Sponsor relations and outreach',
        'Event planning and coordination',
        'Public relations and media'
      ]
    },
    drafting: {
      title: 'Drafting and Analysis',
      icon: '📐',
      description: 'The Drafting and Analysis subteam is responsible for the technical design and structural analysis of our bridges. They use advanced software to optimize designs.',
      responsibilities: [
        'Structural analysis and calculations',
        'CAD drafting and modeling',
        'Design optimization',
        'Load analysis and testing',
        'Technical documentation'
      ]
    },
    fabrication: {
      title: 'Fabrication and Assembly',
      icon: '🔧',
      description: 'The Fabrication and Assembly subteam brings designs to life. They handle the physical construction, welding, and assembly of our steel bridges.',
      responsibilities: [
        'Welding and metalworking',
        'Precision cutting and fabrication',
        'Assembly and construction',
        'Quality control and inspection',
        'Competition day assembly'
      ]
    },
    teams: {
      title: 'Teams',
      icon: '👥',
      description: 'The Teams subteam coordinates our competition teams and manages team dynamics. They ensure smooth collaboration and effective communication across all subteams.',
      responsibilities: [
        'Team coordination and management',
        'Competition strategy and planning',
        'Training and skill development',
        'Performance evaluation',
        'Team building activities'
      ]
    }
  };

  return (
    <div className="subteams">
      <div className="section">
        <h1 className="section-title">Our Subteams</h1>
        <p className="subteams-intro">
          Our team is organized into specialized subteams, each playing a crucial role in our success. 
          Click on a subteam below to learn more about their responsibilities and how you can get involved.
        </p>

        <div className="subteams-tabs">
          {Object.keys(subteams).map((key) => (
            <button
              key={key}
              className={`subteam-tab ${activeTab === key ? 'active' : ''}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="tab-icon">{subteams[key].icon}</span>
              <span className="tab-text">{subteams[key].title}</span>
            </button>
          ))}
        </div>

        <div className="subteam-content">
          <div className="subteam-card">
            <div className="subteam-header">
              <span className="subteam-icon">{subteams[activeTab].icon}</span>
              <h2 className="subteam-title">{subteams[activeTab].title}</h2>
            </div>
            <p className="subteam-description">{subteams[activeTab].description}</p>
            <div className="subteam-responsibilities">
              <h3>Key Responsibilities:</h3>
              <ul>
                {subteams[activeTab].responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subteams;
