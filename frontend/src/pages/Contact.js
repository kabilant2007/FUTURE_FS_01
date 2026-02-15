import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import axios from 'axios';
import '../styles/App.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Send to backend
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      
      if (response.data.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Get In Touch</h1>
        <p>Let's discuss your project or just say hello!</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Contact Information</h2>
          
          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <a href="mailto:kabilant2007@gmail.com">kabilant2007@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>Chennai, India</p>
            </div>
          </div>

          <h3 className="social-title">Connect With Me</h3>
          <div className="social-icons">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" title="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Me a Message</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ Thank you for your message! I'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="error-message">
              ✗ {error}
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
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
                placeholder="kabilant2007@gmail.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="What is this about?"
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
                placeholder="Your message here..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
