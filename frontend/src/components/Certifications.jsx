import React, { useEffect, useRef, useState, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import { ThemeContext } from '../context/ThemeContext';

// Import your actual certificate images (place them in src/assets/)
// Example imports - update with your actual files:
import awsLogo from '../assets/aws-certified-solutions-architect-associate.png';
import lfs101 from '../assets/9860353139.jpg';
import lfs167 from '../assets/aws-educate-introduction-to-generative-ai-training-.png';
import networking from '../assets/aws-educate-introduction-to-cloud-101.png';
import kubernaters from  '../assets/kodekloud-course-completion-certificate.png'

// Styled Components
const CertificationCard = styled(Card)`
  border: 2px solid rgba(172, 129, 192, 0.3);
  background: ${props => props.$isDark ? 
    'rgba(255, 255, 255, 0.08)' : 
    'rgba(255, 255, 255, 0.95)'
  };
  backdrop-filter: blur(10px);
  border-radius: 16px;
  height: 280px;
  transition: all 0.4s ease;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ac81c0, #6c5ce7);
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(172, 129, 192, 0.25);
    border-color: rgba(172, 129, 192, 0.6);
  }
  
  .front-content, .back-content {
    transition: all 0.4s ease;
    height: 100%;
    padding: 1.5rem;
  }
  
  .back-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      ${props => props.$isDark ? 'rgba(108, 92, 231, 0.9)' : 'rgba(172, 129, 192, 0.95)'}, 
      ${props => props.$isDark ? 'rgba(76, 61, 191, 0.9)' : 'rgba(142, 99, 172, 0.95)'}
    );
    transform: translateY(100%);
    color: white;
  }
  
  &:hover .front-content {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  &:hover .back-content {
    transform: translateY(0);
  }
`;

const CertificationImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  margin-bottom: 1rem;
  filter: ${props => props.$isDark ? 'brightness(0.9)' : 'brightness(0.8)'};
  transition: filter 0.3s ease;
  
  ${CertificationCard}:hover & {
    filter: brightness(1.1);
  }
`;

const CertCodeBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background: ${props => props.$isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'};
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: ${props => props.$isDark ? '#fff' : '#333'};
  border: 1px solid ${props => props.$isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'};
`;

const Certifications = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Your certifications data - UPDATE WITH YOUR ACTUAL CERTIFICATIONS
  const certifications = [
    { 
      name: 'AWS Solution Architecture', 
      code: 'AWS SAA-003', 
      provider: 'Amazon Web Services', 
      credentialId: '71a946c7-ad57-40d7-8380-10c2c317cc9d', 
      badge: awsLogo,
      url: 'https://www.credly.com/badges/71a946c7-ad57-40d7-8380-10c2c317cc9d/public_url' // Add your actual credential URL
    },
    { 
      name: 'KodeKloud Certificate', 
      code: 'Kubernetes - Level 1', 
      provider: 'Kodukloud', 
      credentialId: ' 88d4b237-67af-4a6f-8cea-b6507b10e568', 
      badge: kubernaters,
      url: 'https://engineer.kodekloud.com/certificate-verification/88d4b237-67af-4a6f-8cea-b6507b10e568' // Add your actual credential URL
    },
    { 
      name: 'Advanced Git Programming', 
      code: 'Advanced Git', 
      provider: 'Mind luster', 
      credentialId: '9860353139', 
      badge: lfs101,
      url: '#' // Add your actual URL
    },
    { 
      name: 'AWS Educate Introduction to Generative AI', 
      code: 'LFS167', 
      provider: 'Amazon Web Services', 
      credentialId: '6cd92aa5-2630-4255-9ee2-2f6a63499a9a', 
      badge: lfs167,
      url: 'https://www.credly.com/badges/6cd92aa5-2630-4255-9ee2-2f6a63499a9a/public_url' // Add your actual URL
    },
    { 
      name: 'AWS Educate Getting Started with Storage', 
      code: 'NET101', 
      provider: 'Amazon Web Services', 
      credentialId: '9e86151e-1a62-42c9-a8ba-d9ed27fe4006', 
      badge: networking,
      url: 'https://www.credly.com/badges/9e86151e-1a62-42c9-a8ba-d9ed27fe4006/public_url' // Add your actual URL
    },
    // Add more certifications here
    { 
      name: 'Python', 
      code: 'python', 
      provider: 'Mind luster', 
      credentialId: '9860356750', 
      badge: lfs101,
      url: '#' // Add your actual URL
    },
  ];

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleCardClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Container className="section" ref={sectionRef}>
      <Row>
        <Col lg={8} className="mx-auto text-center">
          <h2 className="section-title">Certifications</h2>
          <p className="lead mb-5">
            Industry-recognized credentials validating my DevOps expertise
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center">
        {certifications.map((cert, index) => (
          <Col 
            key={index} 
            lg={4} 
            md={6} 
            className="mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
            }}
          >
            <CertificationCard 
              $isDark={isDarkMode}
              onClick={() => handleCardClick(cert.url)}
            >
              {/* Front Side */}
              <div className="front-content d-flex flex-column align-items-center justify-content-center text-center">
                <CertificationImage 
                  src={cert.badge} 
                  alt={cert.name}
                  $isDark={isDarkMode}
                />
                <CertCodeBadge $isDark={isDarkMode}>
                  {cert.code}
                </CertCodeBadge>
                <h5 style={{ 
                  color: isDarkMode ? '#ffffff' : '#333333',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {cert.name}
                </h5>
                <p style={{ 
                  color: isDarkMode ? '#b0b0b0' : '#666666',
                  fontSize: '0.9rem'
                }}>
                  {cert.provider}
                </p>
              </div>

              {/* Back Side (Hover) */}
              <div className="back-content d-flex flex-column align-items-center justify-content-center text-center">
                <CertificationImage 
                  src={cert.badge} 
                  alt={cert.name}
                  $isDark={true}
                />
                <h5 style={{ 
                  color: '#ffffff',
                  fontWeight: '600',
                  marginBottom: '0.5rem'
                }}>
                  {cert.name}
                </h5>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.9rem',
                  marginBottom: '0.3rem'
                }}>
                  <strong>Provider:</strong> {cert.provider}
                </p>
                <p style={{ 
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: '0.85rem',
                  marginBottom: '1rem'
                }}>
                  <strong>Credential ID:</strong> {cert.credentialId}
                </p>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#ffffff',
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  <span>View Certificate</span>
                  <span style={{ marginLeft: '0.3rem' }}>→</span>
                </div>
              </div>
            </CertificationCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certifications;