import React, { useState } from 'react';
import {
  FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane,
  FaCopy, FaCheck, FaMapMarkerAlt, FaClock
} from 'react-icons/fa';
import { sendEmail } from '../services/emailService';
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const emailAddress = 'yaseermhdofficial01@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    const result = await sendEmail(formData);

    if (result.success) {
      setStatusMessage({
        type: 'success',
        text: 'Transmission confirmed! Your message has been sent successfully. I will respond within 24 hours.',
      });
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatusMessage({
        type: 'error',
        text: 'Transmission failed. Please reach out directly via email: yaseermhdofficial01@gmail.com',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>DIRECT COMMUNICATIONS UPLINK</span>
          </div>
          <h2 id="contact-heading" className="section-title-large">
            Let's build <span className="gradient-text-cyan">something resilient.</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an infrastructure challenge, a cloud migration,
            or an opportunity for a dedicated DevOps engineer, my inbox is open.
          </p>
        </div>

        <div className="contact-grid-layout">
          {/* Left Column: Direct Channels & Signal */}
          <div className="contact-channels-card reveal">
            <div className="channels-card-header">
              <span className="channel-tag">CHANNEL // DIRECT</span>
              <h3>Get In Touch</h3>
              <p>Response SLA: Under 24 hours</p>
            </div>

            <div className="channels-list">
              {/* Email channel with 1-click copy */}
              <div className="channel-item email-channel">
                <div className="channel-icon-wrap">
                  <FaEnvelope />
                </div>
                <div className="channel-info">
                  <span className="channel-label">ELECTRONIC MAIL</span>
                  <a href={`mailto:${emailAddress}`} className="channel-link">
                    {emailAddress}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-copy-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <FaCheck className="copy-ok" /> : <FaCopy />}
                </button>
              </div>

              {/* LinkedIn channel */}
              <a
                href="https://www.linkedin.com/in/mhdyaseer/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-wrap linkedin-wrap">
                  <FaLinkedin />
                </div>
                <div className="channel-info">
                  <span className="channel-label">PROFESSIONAL NETWORK</span>
                  <span className="channel-link">linkedin.com/in/mhdyaseer</span>
                </div>
              </a>

              {/* GitHub channel */}
              <a
                href="https://github.com/codeBuilt864"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-item"
              >
                <div className="channel-icon-wrap github-wrap">
                  <FaGithub />
                </div>
                <div className="channel-info">
                  <span className="channel-label">CODE REPOSITORY</span>
                  <span className="channel-link">github.com/codeBuilt864</span>
                </div>
              </a>
            </div>

            {/* Availability details */}
            <div className="channels-meta-box">
              <div className="meta-row">
                <FaMapMarkerAlt className="meta-icon" />
                <span>Location: India (Open to Global Remote / Relocation)</span>
              </div>
              <div className="meta-row">
                <FaClock className="meta-icon" />
                <span>Timezone: IST (UTC +5:30) • Flexible for international teams</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Contact Form */}
          <div className="contact-form-card reveal">
            <div className="form-card-header">
              <span className="form-card-tag">ENCRYPTED // FORM DISPATCH</span>
              <h3>Transmit a Message</h3>
            </div>

            {statusMessage && (
              <div className={`status-banner banner-${statusMessage.type}`}>
                <span className="status-indicator-dot" />
                <span>{statusMessage.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="cyber-form">
              <div className="form-field-group">
                <label htmlFor="name" className="field-label">
                  Your Full Name <span className="req">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Alex Morgan"
                  className="cyber-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="email" className="field-label">
                  Your Email Address <span className="req">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. alex@company.com"
                  className="cyber-input"
                />
              </div>

              <div className="form-field-group">
                <label htmlFor="message" className="field-label">
                  Message / Project Scope <span className="req">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Describe your architecture requirements, infrastructure project, or team role..."
                  className="cyber-textarea"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="cyber-btn cyber-btn-primary form-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="btn-spinner" />
                    <span>Transmitting Signal...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="btn-icon" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
