import React from 'react';
import { FaArrowUp, FaArrowUpRightFromSquare, FaGithub, FaLinkedin } from 'react-icons/fa6';
import '../styles/footer.css';

const Footer = () => (
  <footer className="site-footer" role="contentinfo">
    <div className="footer-inner">
      <div className="footer-main">
        <div className="footer-prompt">
          <p className="footer-kicker"><span /> End of transmission</p>
          <h2>Build something<br /><em>meaningful?</em></h2>
          <a className="footer-cta" href="#contact">Start a conversation <FaArrowUpRightFromSquare /></a>
        </div>
        <div className="footer-links">
          <div><p>NAVIGATE</p><a href="#home">Home</a><a href="#about">About</a><a href="#projects">Projects</a><a href="#resume">Resume</a></div>
          <div><p>FIND ME</p><a href="https://github.com/codeBuilt864" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub</a><a href="https://linkedin.com/in/mhdyaseer" target="_blank" rel="noopener noreferrer"><FaLinkedin /> LinkedIn</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>YSR / DEVOPS / CLOUD</span><div /><span>© {new Date().getFullYear()} Mohamed Yaseer</span><a href="#home" aria-label="Back to top"><FaArrowUp /></a></div>
    </div>
  </footer>
);

export default Footer;
