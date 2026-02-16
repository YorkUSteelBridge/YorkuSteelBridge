import React, { useState } from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the Steel Bridge Competition?',
      answer: 'The Steel Bridge Competition is an annual event where university teams design, fabricate, and construct scale-model steel bridges. Teams are judged on construction speed, bridge weight, deflection, and overall design efficiency.'
    },
    {
      question: 'Who can join the team?',
      answer: 'We welcome students from all engineering disciplines at York University. Whether you\'re interested in structural analysis, fabrication, project management, or outreach, there\'s a place for you on our team. No prior experience is required - we provide training and mentorship.'
    },
    {
      question: 'How much time commitment is required?',
      answer: 'Time commitment varies by subteam and role, but typically ranges from 5-10 hours per week during the academic year. During competition season (spring), commitment may increase. We understand that academics come first and work around your schedule.'
    },
    {
      question: 'Do I need prior experience with welding or fabrication?',
      answer: 'No prior experience is necessary! We provide training in welding, fabrication, and other technical skills. Our experienced members and faculty advisors will help you learn everything you need to know.'
    },
    {
      question: 'How is the team funded?',
      answer: 'Our team is funded through a combination of university support, corporate sponsorships, grants, and fundraising efforts. We are always looking for sponsors who want to support engineering education and innovation.'
    },
    {
      question: 'What competitions do you participate in?',
      answer: 'We participate in regional and national steel bridge competitions, including the ASCE/AISC Student Steel Bridge Competition. These competitions provide valuable hands-on experience and networking opportunities.'
    },
    {
      question: 'How can I get involved?',
      answer: 'You can get involved by filling out our member signup form, attending our team meetings, reaching out through our contact form, or connecting with us on Instagram and LinkedIn. We typically recruit new members at the beginning of each academic year, but welcome interested students year-round.'
    },
    {
      question: 'What skills will I gain?',
      answer: 'Team members gain valuable skills in structural analysis, CAD design, welding and fabrication, project management, teamwork, and problem-solving. These skills are highly valued by employers and complement your academic studies.'
    },
    {
      question: 'Can I join multiple subteams?',
      answer: 'Yes! Many team members are involved in multiple subteams, especially as they gain experience. We encourage cross-team collaboration and learning.'
    },
    {
      question: 'How can my company become a sponsor?',
      answer: 'We\'d love to discuss sponsorship opportunities with you! Please fill out our contact form and select "Sponsorship" as your interest, or reach out directly to our team leadership. We offer various sponsorship levels with corresponding benefits.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <div className="section">
        <h1 className="section-title">Frequently Asked Questions</h1>
        <p className="faq-intro">
          Have questions about our team? Check out our FAQ below. If you don't find what you're looking for, 
          feel free to contact us!
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <div 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
