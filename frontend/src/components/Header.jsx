import React, { useContext, useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from '../context/ThemeContext';
import styled from 'styled-components';
import '../styles/header.css';

const ThemeToggleWrapper = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: rotate(10deg);
  }
`;

const NavbarBrandWrapper = styled.div`
  max-width: 60%;
  @media (max-width: 576px) {
    max-width: 50%;
  }
`;

const CustomToggle = styled(Navbar.Toggle)`
  border-color: var(--accent-color) !important;
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23C9A0DC' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
  }
`;

const Header = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);
  const scrollAnimationRef = useRef(null);
  useEffect(() => {
    const smoothScrollTo = (targetPosition) => {
      if (scrollAnimationRef.current) {
        window.cancelAnimationFrame(scrollAnimationRef.current);
      }

      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = Math.min(1100, Math.max(650, Math.abs(distance) * 0.55));
      const startTime = performance.now();
      const easeInOut = (progress) => progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const animate = (currentTime) => {
        const progress = Math.min(1, (currentTime - startTime) / duration);
        window.scrollTo(0, startPosition + distance * easeInOut(progress));
        if (progress < 1) {
          scrollAnimationRef.current = window.requestAnimationFrame(animate);
        } else {
          scrollAnimationRef.current = null;
        }
      };

      scrollAnimationRef.current = window.requestAnimationFrame(animate);
    };

    const handleNavClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      const href = link?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        // Clear all active states first
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active to clicked link
        link.classList.add('active');
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navbarHeight = document.querySelector('.navbar').offsetHeight;
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;

          targetElement.classList.remove('section-arrival');
          void targetElement.offsetWidth;
          targetElement.classList.add('section-arrival');
          window.setTimeout(() => targetElement.classList.remove('section-arrival'), 950);
          
          smoothScrollTo(Math.max(0, targetPosition));
        }
        
        // Close navbar on mobile after click
        setExpanded(false);
      }
    };
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
    
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
      if (scrollAnimationRef.current) {
        window.cancelAnimationFrame(scrollAnimationRef.current);
      }
    };
  }, []);
  
  // Add active class to nav links based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const activationLine = 120;
      let activeSection = sections[0]?.getAttribute('id');
      let closestDistance = Number.POSITIVE_INFINITY;

      sections.forEach(section => {
        const distance = Math.abs(section.getBoundingClientRect().top - activationLine);
        if (section.getBoundingClientRect().top <= activationLine && distance < closestDistance) {
          activeSection = section.getAttribute('id');
          closestDistance = distance;
        }
      });
      
      // Clear all active states
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      
      // Set active state only for current section
      if (activeSection) {
        const activeNavLink = document.querySelector(`.nav-link[href="#${activeSection}"]`);
        activeNavLink?.classList.add('active');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('navbar-glass');
        } else {
          navbar.classList.remove('navbar-glass');
        }
      }
    };
    
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target) && expanded) {
        setExpanded(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded]);
  
  return (
    <Navbar 
      as="nav"
      bg={isDarkMode ? "dark" : "light"} 
      variant={isDarkMode ? "dark" : "light"} 
      expand="lg" 
      sticky="top" 
      className="navbar-dark"
      expanded={expanded}
      ref={navbarRef}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container className="header-inner d-flex justify-content-between">
        <NavbarBrandWrapper>
          <Navbar.Brand href="#home" className="header-brand">
            <span className="header-brand-mark">YSR</span>
            <span className="header-brand-meta"><i /> DEVOPS / CLOUD</span>
          </Navbar.Brand>
        </NavbarBrandWrapper>
        <div className="d-flex align-items-center">
          <ThemeToggleWrapper className="d-flex d-lg-none me-2">
            <ThemeToggle />
          </ThemeToggleWrapper>
          <CustomToggle
            className="header-menu-toggle"
            aria-controls="basic-navbar-nav" 
            onClick={() => setExpanded(!expanded)}
            aria-label="Toggle navigation"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="header-nav ms-auto" as="ul">
            <Nav.Item as="li"><Nav.Link href="#about">About</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#skills">Skills</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#projects">Projects</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#certifications">Certifications</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#resume">Resume</Nav.Link></Nav.Item>
            <Nav.Item as="li"><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
            <Nav.Item as="li">
              <ThemeToggleWrapper className="d-none d-lg-flex">
                <ThemeToggle />
              </ThemeToggleWrapper>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
