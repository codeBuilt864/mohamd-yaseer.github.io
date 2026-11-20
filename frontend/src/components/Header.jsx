import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { FaTerminal, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/header.css';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#cockpit', label: 'Console' },
  { href: '#certifications', label: 'Certs' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled state
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);

      // Scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolledRatio = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolledRatio);

      // Scroll spy
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Scroll Progress Bar at the top of navbar */}
      <div
        className="nav-scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="nav-container">
        {/* Brand Logo */}
        <a href="#home" onClick={(e) => handleLinkClick(e, '#home')} className="brand-logo">
          <div className="logo-hex-wrap">
            <span className="logo-text">YSR</span>
          </div>
          <div className="logo-meta">
            <span className="logo-title">MOHAMED YASEER</span>
            <span className="logo-subtitle">
              <span className="logo-pulse-dot" /> DEVOPS // CLOUD SAA
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-menu" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`nav-menu-link ${isActive ? 'is-active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label === 'Console' && <FaTerminal className="nav-term-icon" />}
                <span>{link.label}</span>
                {isActive && <span className="nav-active-pill" />}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="nav-actions-right">
          <ThemeToggle />

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="nav-hire-btn d-none-mobile"
          >
            <span>Let's Talk</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${activeSection === link.href.substring(1) ? 'is-active' : ''}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              <span>{link.label}</span>
            </a>
          ))}
          <a
            href="#contact"
            className="mobile-nav-cta"
            onClick={(e) => handleLinkClick(e, '#contact')}
          >
            Initiate Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
