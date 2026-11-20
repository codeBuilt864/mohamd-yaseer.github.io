import React from 'react';
import { FaDownload, FaExternalLinkAlt, FaFilePdf, FaCheckCircle, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import '../styles/resume.css';

const Resume = () => {
  const googleDriveFileId = '1_s1isDMIaatH5Ou-dPsTEPVJ252JzcTE';
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
  const previewUrl = `https://drive.google.com/file/d/${googleDriveFileId}/preview`;

  return (
    <section className="resume-section" id="resume" aria-labelledby="resume-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>CURRICULUM VITAE // 2026</span>
          </div>
          <h2 id="resume-heading" className="section-title-large">
            Professional trajectory & <span className="gradient-text-cyan">verified competencies.</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive profile of production builds, hands-on lab achievements,
            and cloud infrastructure credentials.
          </p>
        </div>

        <div className="resume-dual-panel-layout">
          {/* Left Panel: Executive Summary & Highlights */}
          <div className="resume-left-panel reveal">
            <div className="resume-card-hero">
              <div className="resume-badge-status">
                <span className="pulse-dot-green" />
                <span>OPEN FOR DEVOPS & SRE OPPORTUNITIES</span>
              </div>
              <h3 className="resume-applicant-name">MOHAMED YASEER</h3>
              <p className="resume-applicant-role">DevOps & Cloud Systems Engineer</p>

              <div className="resume-actions-row">
                <a
                  href={downloadUrl}
                  download="Mohamed_Yaseer_Resume.pdf"
                  className="cyber-btn cyber-btn-primary"
                >
                  <FaDownload className="btn-icon" />
                  <span>Download CV (PDF)</span>
                </a>
                <a
                  href={`https://drive.google.com/file/d/${googleDriveFileId}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn cyber-btn-outline"
                >
                  <FaExternalLinkAlt className="btn-icon" />
                  <span>View in Drive</span>
                </a>
              </div>
            </div>

            {/* Quick Summary Highlights */}
            <div className="resume-highlights-container">
              <div className="highlight-section">
                <h4 className="highlight-title">
                  <FaBriefcase className="hl-icon" /> Core Competencies
                </h4>
                <ul className="highlight-list">
                  <li>
                    <FaCheckCircle className="hl-check" />
                    <div>
                      <strong>Cloud Architecture & IaC</strong>
                      <span>Amazon Web Services (EKS, VPC, EC2, IAM) codified 100% in modular Terraform.</span>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="hl-check" />
                    <div>
                      <strong>Container Orchestration</strong>
                      <span>Kubernetes deployments, Ingress controllers, Helm charts, and multi-stage Dockerfiles.</span>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="hl-check" />
                    <div>
                      <strong>GitOps & CI/CD Pipelines</strong>
                      <span>ArgoCD declarative delivery paired with Jenkins scripted pipelines and Trivy security gates.</span>
                    </div>
                  </li>
                  <li>
                    <FaCheckCircle className="hl-check" />
                    <div>
                      <strong>Observability & Reliability</strong>
                      <span>Prometheus metrics scraping, Grafana dashboards, Alertmanager, and CloudWatch alerts.</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="highlight-section">
                <h4 className="highlight-title">
                  <FaGraduationCap className="hl-icon" /> Key Milestones & Learning
                </h4>
                <div className="milestone-box">
                  <strong>AWS Certified Solutions Architect (SAA-C03)</strong>
                  <p>Certified by Amazon Web Services in scalable and fault-tolerant cloud design.</p>
                </div>
                <div className="milestone-box">
                  <strong>KodeKloud Kubernetes Pro</strong>
                  <p>Intensive hands-on labs on live multi-node Kubernetes clusters.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Interactive Embedded PDF Viewer */}
          <div className="resume-right-panel reveal">
            <div className="resume-viewer-frame">
              <div className="viewer-top-toolbar">
                <div className="viewer-file-info">
                  <FaFilePdf className="pdf-icon" />
                  <span>mohamed-yaseer-resume.pdf</span>
                </div>
                <div className="viewer-toolbar-actions">
                  <span className="doc-version-tag">VER_2026.01</span>
                </div>
              </div>

              <div className="viewer-iframe-wrapper">
                <iframe
                  className="resume-embed-iframe"
                  src={previewUrl}
                  title="Mohamed Yaseer Resume Preview"
                  allow="autoplay"
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
