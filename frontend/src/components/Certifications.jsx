import React, { useState } from 'react';
import { FaExternalLinkAlt, FaAward, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { SiAmazon, SiKubernetes, SiPython } from 'react-icons/si';

import awsLogo from '../assets/aws-certified-solutions-architect-associate.png';
import k8sCert from '../assets/kodekloud-course-completion-certificate.png';
import gitCert from '../assets/9860353139.jpg';
import awsGenAI from '../assets/aws-educate-introduction-to-generative-ai-training-.png';
import awsCloud101 from '../assets/aws-educate-introduction-to-cloud-101.png';
import pythonCert from '../assets/9860356750.jpg';

import '../styles/certifications.css';

const CERTS_DATA = [
  {
    id: 'aws-saa',
    featured: true,
    title: 'AWS Certified Solutions Architect - Associate',
    code: 'SAA-C03',
    issuer: 'Amazon Web Services',
    credentialId: '71a946c7-ad57-40d7-8380-10c2c317cc9d',
    image: awsLogo,
    icon: <SiAmazon />,
    verifyUrl: 'https://www.credly.com/badges/71a946c7-ad57-40d7-8380-10c2c317cc9d/public_url',
    color: '#FF9900',
    skills: ['Multi-Tier Architecture', 'AWS EKS & VPC', 'IAM Least-Privilege', 'High Availability', 'Cost Optimization']
  },
  {
    id: 'k8s-kodekloud',
    featured: true,
    title: 'Kubernetes Certification - Level 1',
    code: 'K8S-LVL-1',
    issuer: 'KodeKloud',
    credentialId: '88d4b237-67af-4a6f-8cea-b6507b10e568',
    image: k8sCert,
    icon: <SiKubernetes />,
    verifyUrl: 'https://engineer.kodekloud.com/certificate-verification/88d4b237-67af-4a6f-8cea-b6507b10e568',
    color: '#326CE5',
    skills: ['Pod Scheduling', 'Deployments & Services', 'ConfigMaps & Secrets', 'Namespaces & RBAC']
  },
  {
    id: 'aws-storage',
    featured: false,
    title: 'AWS Educate - Cloud Storage & Architecture',
    code: 'NET101',
    issuer: 'Amazon Web Services',
    credentialId: '9e86151e-1a62-42c9-a8ba-d9ed27fe4006',
    image: awsCloud101,
    icon: <SiAmazon />,
    verifyUrl: 'https://www.credly.com/badges/9e86151e-1a62-42c9-a8ba-d9ed27fe4006/public_url',
    color: '#FF9900',
    skills: ['Amazon S3', 'EBS Volumes', 'EFS Network Storage', 'Cloud Architecture 101']
  },
  {
    id: 'aws-genai',
    featured: false,
    title: 'AWS Educate - Introduction to Generative AI',
    code: 'LFS167',
    issuer: 'Amazon Web Services',
    credentialId: '6cd92aa5-2630-4255-9ee2-2f6a63499a9a',
    image: awsGenAI,
    icon: <SiAmazon />,
    verifyUrl: 'https://www.credly.com/badges/6cd92aa5-2630-4255-9ee2-2f6a63499a9a/public_url',
    color: '#FF9900',
    skills: ['Amazon Bedrock', 'Foundation Models', 'Cloud AI Ethics', 'Prompt Engineering']
  },
  {
    id: 'git-adv',
    featured: false,
    title: 'Advanced Git Programming & Branching',
    code: 'GIT-ADV',
    issuer: 'Mindluster',
    credentialId: '9860353139',
    image: gitCert,
    icon: <FaShieldAlt />,
    verifyUrl: '#',
    color: '#F05032',
    skills: ['Interactive Rebase', 'Trunk-based Workflows', 'Merge Conflict Resolution', 'Git Hooks']
  },
  {
    id: 'python-dev',
    featured: false,
    title: 'Python Programming & Scripting',
    code: 'PY-AUTO',
    issuer: 'Mindluster',
    credentialId: '9860356750',
    image: pythonCert,
    icon: <SiPython />,
    verifyUrl: '#',
    color: '#3776AB',
    skills: ['Automation Scripting', 'API Integration', 'Data Structures', 'File I/O Ops']
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="certifications-section" id="certifications" aria-labelledby="certs-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>VERIFIED CREDENTIAL ARCHIVE</span>
          </div>
          <h2 id="certs-heading" className="section-title-large">
            Certified expertise, <span className="gradient-text-cyan">proven industry standards.</span>
          </h2>
          <p className="section-subtitle">
            Every credential represents rigorous testing and hands-on laboratory milestones
            in cloud architecture, container management, and software engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certs-grid">
          {CERTS_DATA.map((cert) => (
            <div
              key={cert.id}
              className={`cert-card ${cert.featured ? 'featured-cert' : ''} reveal`}
              style={{ '--cert-color': cert.color }}
            >
              <div className="cert-card-inner">
                {/* Header row */}
                <div className="cert-top-bar">
                  <span className="cert-code-tag">{cert.code}</span>
                  <div className="cert-issuer-badge">
                    <span className="issuer-icon" style={{ color: cert.color }}>
                      {cert.icon}
                    </span>
                    <span>{cert.issuer}</span>
                  </div>
                </div>

                {/* Badge image frame */}
                <div
                  className="cert-image-frame"
                  onClick={() => setSelectedCert(cert)}
                  title="Click to view credential details"
                >
                  <img src={cert.image} alt={cert.title} />
                  <div className="cert-frame-shine" />
                </div>

                {/* Content */}
                <h3 className="cert-title">{cert.title}</h3>

                <div className="cert-id-row">
                  <span className="id-label">CREDENTIAL ID:</span>
                  <span className="id-val" title={cert.credentialId}>
                    {cert.credentialId.length > 22
                      ? `${cert.credentialId.substring(0, 20)}...`
                      : cert.credentialId}
                  </span>
                </div>

                {/* Skill tags */}
                <div className="cert-skill-pills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-pill">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="cert-card-bottom">
                  {cert.verifyUrl !== '#' ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-verify-link"
                    >
                      <FaAward />
                      <span>Verify on Credly / Issuer</span>
                      <FaExternalLinkAlt size={11} />
                    </a>
                  ) : (
                    <span className="cert-verified-static">
                      <FaCheckCircle /> Verified Credential
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for viewing credential full image if clicked */}
        {selectedCert && (
          <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
            <div className="cert-modal-dialog" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                className="cert-modal-close"
                onClick={() => setSelectedCert(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="cert-modal-body">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-modal-img"
                />
                <h3>{selectedCert.title}</h3>
                <p className="modal-issuer">Issued by {selectedCert.issuer}</p>
                <p className="modal-id">ID: {selectedCert.credentialId}</p>
                {selectedCert.verifyUrl !== '#' && (
                  <a
                    href={selectedCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn cyber-btn-primary"
                  >
                    <span>Open Public Verification</span>
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
