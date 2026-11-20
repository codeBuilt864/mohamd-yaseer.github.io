import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="section-container">
        <div className="footer-top-grid">
          {/* Brand & Manifesto Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <span className="logo-badge">YSR</span>
              <span className="logo-name">MOHAMED YASEER</span>
            </div>
            <p className="footer-tagline">
              DevOps & Cloud Systems Engineer. AWS Certified Solutions Architect.
              Automating scalable infrastructure, resilient Kubernetes clusters, and zero-downtime delivery pipelines.
            </p>
            <div className="footer-telemetry-badge">
              <span className="telemetry-dot" />
              <span>AWS US-EAST-1 // SYSTEM INTEGRITY 100%</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-heading">NAVIGATION</h4>
            <div className="footer-links-list">
              <a href="#home">Home</a>
              <a href="#about">About & Philosophy</a>
              <a href="#skills">Toolchain & Skills</a>
              <a href="#projects">Flagship Projects</a>
              <a href="#cockpit">Interactive Terminal</a>
              <a href="#certifications">Verified Credentials</a>
              <a href="#resume">Curriculum Vitae</a>
              <a href="#contact">Contact Uplink</a>
            </div>
          </div>

          {/* Social Channels Column */}
          <div className="footer-connect-col">
            <h4 className="footer-heading">DIRECT CHANNELS</h4>
            <div className="footer-social-links">
              <a
                href="https://github.com/codeBuilt864"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <FaGithub />
                <span>GitHub (codeBuilt864)</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mhdyaseer/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
                <span>LinkedIn (/in/mhdyaseer)</span>
              </a>

              <a
                href="mailto:yaseermhdofficial01@gmail.com"
                className="social-btn"
                aria-label="Send Email"
              >
                <FaEnvelope />
                <span>yaseermhdofficial01@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            <span>&copy; {new Date().getFullYear()} Mohamed Yaseer. All rights reserved.</span>
            <span className="footer-tech-note d-none-mobile">
              Built with React • Powered by Continuous Integration
            </span>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
            title="Back to top"
          >
            <FaArrowUp />
            <span>Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
