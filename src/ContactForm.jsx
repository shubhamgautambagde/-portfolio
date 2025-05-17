import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin, faSnapchat, faTwitter } from '@fortawesome/free-brands-svg-icons';

import BackToTopButton from './BackToTopButton';
import './stylle.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3033/api/send', formData);
      alert(response.data);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  return (
    <section id="contact">
      <h1 className="section-header">Contact Me</h1>
      <div className="contact-wrapper">

        {/* Contact info */}
        <div className="direct-contact-container">
          <ul className="contact-list">
            <li className="list-item">
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
              <a href="tel:9370403356" title="Give me a call if needed" className="contact-text phone">
                +91-9370403356
              </a>
            </li>
            <li className="list-item">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <a href="mailto:anushritiwari123@gmail.com" title="Send me an email" className="contact-text gmail">
                anushritiwari123@gmail.com
              </a>
            </li>
          </ul>
          <hr />
          <ul className="social-media-list">
            <li>
              
              <a href="https://www.snapchat.com/add/anushritiwari19/" target="_blank" rel="noreferrer" className="contact-icon">
                <FontAwesomeIcon icon={faSnapchat} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/anushritiwari/" target="_blank" rel="noreferrer" className="contact-icon">
                <FontAwesomeIcon icon={faLinkedin} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/19A8XrujQ5/" target="_blank" rel="noreferrer" className="contact-icon">
                <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
              </a>
            </li>
          </ul>
          <hr />
        </div>

        {/* Contact form */}
        <form id="contact-form" className="form-horizontal" onSubmit={handleSubmit} noValidate>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="E-Mail"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            className="form-control1 textarea"
            value={formData.message}
            onChange={handleChange}
            rows="10"
            required
          />
          <button className="send-button" type="submit" aria-label="Send Message">
            <div className="alt-send-button">
              <FontAwesomeIcon icon={faPaperPlane} className="fa" />
              <span className="send-text">SEND</span>
            </div>
          </button>
        </form>
      </div>

      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
