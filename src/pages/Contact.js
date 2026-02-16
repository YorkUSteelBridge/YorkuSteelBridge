import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    type: 'contact'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
      type: 'contact'
    });
  };

  return (
    <div className="contact">
      <div className="section">
        <h1 className="section-title">Contact Us / Sponsor Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-section">
              <h2 className="section-subtitle">Get in Touch</h2>
              <p>
                Have questions about our team? Want to learn more about how to get involved? 
                Or interested in sponsoring our team? We'd love to hear from you!
              </p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <h3>📍 Location</h3>
                  <p>York University<br />Toronto, ON, Canada</p>
                </div>
                
                <div className="contact-item">
                  <h3>📧 Email</h3>
                  <p><a href="mailto:yorkusteelbridge@gmail.com">yorkusteelbridge@gmail.com</a></p>
                </div>
                
                <div className="contact-item">
                  <h3>🌐 Social Media</h3>
                  <p>
                    <a href="https://www.instagram.com/yorkusteelbridge/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    {' · '}
                    <a href="https://www.linkedin.com/company/yorku-steel-bridge" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </p>
                </div>
                
                <div className="contact-item">
                  <h3>📋 Join the Team</h3>
                  <p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScsZQtUL2F8i5tkxxuuqqo8QWuMCJX1jzST4t6NSuoPOMIj8Q/viewform" target="_blank" rel="noopener noreferrer">Member Signup Form</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="sponsor-section">
              <h2 className="section-subtitle">Become a Sponsor</h2>
              <p>
                Our team relies on the generous support of sponsors to fund materials, equipment, 
                and competition expenses. Sponsors play a crucial role in our success and help us 
                continue to compete at the highest level.
              </p>
              
              <div className="sponsor-benefits">
                <h3>Sponsor Benefits:</h3>
                <ul>
                  <li>Logo placement on our website and competition materials</li>
                  <li>Recognition at team events and competitions</li>
                  <li>Networking opportunities with engineering students</li>
                  <li>Tax-deductible donations</li>
                  <li>Supporting the next generation of engineers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="type">I am interested in:</label>
                <select 
                  id="type" 
                  name="type" 
                  value={formData.type}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="contact">General Contact</option>
                  <option value="join">Joining the Team</option>
                  <option value="sponsor">Sponsorship</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
