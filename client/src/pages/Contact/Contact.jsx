import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page fade-in">
      <div className="container">
        <header className="contact-header">
          <h1>Get in Touch</h1>
          <p>Have a question or a suggestion? We'd love to hear from you.</p>
        </header>

        <div className="contact-content-grid">
          <div className="contact-form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="contact-info-container">
            <h3>Contact Information</h3>
            <p>Reach out to us directly or visit our office in Pune.</p>
            <ul className="contact-list">
              <li><FaMapMarkerAlt /> <span>Pune, Maharashtra, India</span></li>
              <li><FaEnvelope /> <span>contact@cleanconnect.com</span></li>
              <li><FaPhone /> <span>+91 123 456 7890</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;