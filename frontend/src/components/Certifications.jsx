import React, { useState } from 'react';
import { FaArrowUpRightFromSquare, FaShieldHalved } from 'react-icons/fa6';
import { SiAmazon, SiKubernetes, SiPython } from 'react-icons/si';
import awsLogo from '../assets/aws-certified-solutions-architect-associate.png';
import lfs101 from '../assets/9860353139.jpg';
import lfs167 from '../assets/aws-educate-introduction-to-generative-ai-training-.png';
import networking from '../assets/aws-educate-introduction-to-cloud-101.png';
import kubernaters from '../assets/kodekloud-course-completion-certificate.png';
import '../styles/certifications.css';

const certifications = [
  { name: 'AWS Solution Architecture', code: 'AWS SAA-003', provider: 'Amazon Web Services', credentialId: '71a946c7-ad57-40d7-8380-10c2c317cc9d', badge: awsLogo, icon: <SiAmazon />, url: 'https://www.credly.com/badges/71a946c7-ad57-40d7-8380-10c2c317cc9d/public_url' },
  { name: 'KodeKloud Certificate', code: 'KUBERNETES / LEVEL 1', provider: 'KodeKloud', credentialId: '88d4b237-67af-4a6f-8cea-b6507b10e568', badge: kubernaters, icon: <SiKubernetes />, url: 'https://engineer.kodekloud.com/certificate-verification/88d4b237-67af-4a6f-8cea-b6507b10e568' },
  { name: 'Advanced Git Programming', code: 'ADVANCED GIT', provider: 'Mindluster', credentialId: '9860353139', badge: lfs101, icon: <FaShieldHalved />, url: '#' },
  { name: 'AWS Educate Introduction to Generative AI', code: 'LFS167', provider: 'Amazon Web Services', credentialId: '6cd92aa5-2630-4255-9ee2-2f6a63499a9a', badge: lfs167, icon: <SiAmazon />, url: 'https://www.credly.com/badges/6cd92aa5-2630-4255-9ee2-2f6a63499a9a/public_url' },
  { name: 'AWS Educate Getting Started with Storage', code: 'NET101', provider: 'Amazon Web Services', credentialId: '9e86151e-1a62-42c9-a8ba-d9ed27fe4006', badge: networking, icon: <SiAmazon />, url: 'https://www.credly.com/badges/9e86151e-1a62-42c9-a8ba-d9ed27fe4006/public_url' },
  { name: 'Python', code: 'PYTHON', provider: 'Mindluster', credentialId: '9860356750', badge: lfs101, icon: <SiPython />, url: '#' }
];

const Certifications = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCertificate = certifications[activeIndex];

  return (
    <section className="certifications-section" aria-labelledby="certifications-title">
      <div className="certifications-inner">
        <div className="certifications-heading">
          <p className="certifications-kicker"><span /> Verified signal</p>
          <h2 id="certifications-title">Proof of<br /><em>curiosity.</em></h2>
          <p>Credentials are milestones, not destinations. Each one marks a deeper layer of the systems I am learning to build.</p>
        </div>
        <div className="certifications-console">
          <div className="certifications-console-top"><span>YSR / CREDENTIAL ARCHIVE</span><span>{String(activeIndex + 1).padStart(2, '0')} / 06</span></div>
          <nav className="certification-list" aria-label="Certifications">
            {certifications.map((certificate, index) => <button type="button" key={certificate.code} className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)}><span>{String(index + 1).padStart(2, '0')}</span><strong>{certificate.name}</strong><small>{certificate.provider}</small></button>)}
          </nav>
          <article className="certificate-preview">
            <div className="certificate-preview-glow" />
            <div className="certificate-preview-icon">{activeCertificate.icon}</div>
            <p className="certificate-preview-label">CREDENTIAL / VERIFIED</p>
            <h3>{activeCertificate.name}</h3>
            <p className="certificate-preview-code">{activeCertificate.code}</p>
            <div className="certificate-image-frame"><img src={activeCertificate.badge} alt={`${activeCertificate.name} certificate`} /></div>
            <div className="certificate-meta"><span>ISSUED BY<br /><strong>{activeCertificate.provider}</strong></span><span>ID<br /><strong>{activeCertificate.credentialId}</strong></span></div>
            {activeCertificate.url !== '#' && <a className="certificate-link" href={activeCertificate.url} target="_blank" rel="noopener noreferrer">Verify credential <FaArrowUpRightFromSquare /></a>}
          </article>
        </div>
        <div className="certifications-footer"><span>06 CREDENTIALS</span><div /><span>CLOUD / CONTAINERS / CODE</span><strong>CONTINUOUS LEARNING</strong></div>
      </div>
    </section>
  );
};

export default Certifications;
