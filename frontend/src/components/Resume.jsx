import React from 'react';
import {
  FaDownload, FaExternalLinkAlt, FaFilePdf,
  FaBriefcase, FaGraduationCap, FaTrophy, FaLanguage
} from 'react-icons/fa';
import '../styles/resume.css';

const Resume = () => {
  const cvFileUrl = `${process.env.PUBLIC_URL || ''}/Mohamed_Yaaseer_CV.pdf`;

  return (
    <section className="resume-section" id="resume" aria-labelledby="resume-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>CURRICULUM VITAE // VERIFIED</span>
          </div>
          <h2 id="resume-heading" className="section-title-large">
            Professional trajectory & <span className="gradient-text-cyan">verified credentials.</span>
          </h2>
          <p className="section-subtitle">
            Hands-on track record delivering 5+ end-to-end cloud deployments, multi-stage CI/CD pipelines
            across AWS and Azure, and architecting resilient Kubernetes environments.
          </p>
        </div>

        <div className="resume-dual-panel-layout">
          {/* Left Panel: Executive Summary & Highlights */}
          <div className="resume-left-panel reveal">
            <div className="resume-card-hero">
              <div className="resume-badge-status">
                <span className="pulse-dot-green" />
                <span>OPEN FOR CLOUD, SRE & DEVOPS ROLES</span>
              </div>
              <h3 className="resume-applicant-name">RAHMATHTHULLA MOHAMED YAASEER</h3>
              <p className="resume-applicant-role">Aspiring Cloud | SRE | DevOps Engineer</p>

              <div className="resume-actions-row">
                <a
                  href={cvFileUrl}
                  download="CV_Rahmaththulla_Mohamed_Yaaseer.pdf"
                  className="cyber-btn cyber-btn-primary"
                >
                  <FaDownload className="btn-icon" />
                  <span>Download CV (PDF)</span>
                </a>
                <a
                  href={cvFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn cyber-btn-outline"
                >
                  <FaExternalLinkAlt className="btn-icon" />
                  <span>Open Fullscreen</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="resume-highlights-container">
              {/* Summary */}
              <div className="highlight-section">
                <h4 className="highlight-title">
                  <FaBriefcase className="hl-icon" /> Professional Summary
                </h4>
                <p className="resume-summary-body">
                  Results-driven DevOps & Full Stack Engineer with hands-on experience building scalable
                  cloud infrastructure and robust web applications. Proven track record delivering 5+ end-to-end
                  cloud deployments across AWS and Azure, with 20+ completed MERN stack projects.
                </p>
              </div>

              {/* Education */}
              <div className="highlight-section">
                <h4 className="highlight-title">
                  <FaGraduationCap className="hl-icon" /> Education & Academic Background
                </h4>
                <div className="milestone-box">
                  <div className="milestone-header">
                    <strong>Bachelor of Information and Communication Technology (BICT)</strong>
                    <span className="milestone-badge">Expected 2027</span>
                  </div>
                  <p className="milestone-inst">Rajarata University of Sri Lanka</p>
                  <span className="milestone-stat">Current GPA: 3.20 / 4.00</span>
                </div>

                <div className="milestone-box">
                  <div className="milestone-header">
                    <strong>G.C.E. Advanced Level (2018) – Technology Stream</strong>
                    <span className="milestone-badge">Passed</span>
                  </div>
                  <p className="milestone-inst">Science for Tech (SFT: B), ICT (B), Engineering Tech (ET: C)</p>
                </div>
              </div>

              {/* Honors & Languages */}
              <div className="highlight-section">
                <h4 className="highlight-title">
                  <FaTrophy className="hl-icon" /> Honors & Leadership
                </h4>
                <div className="honor-box">
                  <div className="honor-title">
                    <FaTrophy className="trophy-gold" />
                    <strong>Two-Time Chess Champion — Rajarata University Chess Team</strong>
                  </div>
                  <p>
                    Secured 1st place in 2 university tournaments; applied tactical strategy,
                    pattern analysis, and high-pressure decision-making to complex engineering challenges.
                  </p>
                </div>

                <div className="languages-strip">
                  <span className="lang-title"><FaLanguage /> Languages:</span>
                  <span className="lang-pill">English (Professional)</span>
                  <span className="lang-pill">Tamil (Native)</span>
                  <span className="lang-pill">Sinhala (Conversational)</span>
                  <span className="lang-pill">German (A2)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Embedded Real PDF Viewer */}
          <div className="resume-right-panel reveal">
            <div className="resume-viewer-frame">
              <div className="viewer-top-toolbar">
                <div className="viewer-file-info">
                  <FaFilePdf className="pdf-icon" />
                  <span>CV_Rahmaththulla_Mohamed_Yaaseer.pdf</span>
                </div>
                <div className="viewer-toolbar-actions">
                  <span className="doc-version-tag">OFFICIAL_CV // 2026</span>
                </div>
              </div>

              <div className="viewer-iframe-wrapper">
                <iframe
                  className="resume-embed-iframe"
                  src={`${cvFileUrl}#view=FitH`}
                  title="Mohamed Yaaseer Official CV"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
