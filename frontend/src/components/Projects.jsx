import React, { useState } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaCheckCircle,
  FaRocket, FaNetworkWired, FaPlayCircle, FaLinkedin
} from 'react-icons/fa';
import '../styles/projects.css';

const PROJECTS_DATA = [
  {
    id: 'k8s-autoscale-cicd',
    num: '01',
    badge: 'KUBERNETES & GITOPS',
    title: 'Automated CI/CD & Auto-Scaling Kubernetes Deployment',
    subtitle: 'Zero-Downtime Blue-Green Ingress Delivery with Java Spring Boot & Jenkins',
    summary: 'Built an automated GitOps delivery pipeline deploying Java Spring Boot microservices to an auto-scaling Kubernetes cluster with zero manual intervention. Engineered resilient blue-green deployments with Kubernetes ingress load balancing to deliver seamless rolling updates under variable traffic surges.',
    tags: ['Kubernetes', 'Java Spring Boot', 'Docker', 'Jenkins', 'HPA', 'Ingress Nginx', 'CI/CD'],
    github: 'https://github.com/codeBuilt864/Ecommerce-App-Kastro',
    demoUrl: 'https://www.linkedin.com/posts/mhdyaseer_devops-cicd-kubernetes-activity-7410881762047746048-jo2h?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFxWThMBTVgocDUxKYQJodfqtHGpZlE5lso',
    demoLabel: 'LinkedIn Demo Video',
    accentColor: '#00F0FF',
    architecture: [
      { layer: 'Application Layer', tech: 'Java Spring Boot', detail: 'Microservice backend containerized via multi-stage Docker builds to reduce image footprint' },
      { layer: 'CI Pipeline', tech: 'Jenkins & Webhooks', detail: 'Automated code checkout, Maven test validation, Docker image creation, and registry push' },
      { layer: 'Cluster Orchestration', tech: 'Kubernetes (K8s)', detail: 'Declarative Pod manifests, ClusterIP routing, and automated Ingress controller balancing' },
      { layer: 'Resilience & Scaling', tech: 'HPA & Blue-Green', detail: 'Horizontal Pod Autoscaler with CPU/memory metrics and zero-downtime rolling deployments' }
    ],
    outcomes: [
      'Built an automated GitOps pipeline deploying Java Spring Boot services to an auto-scaling cluster with 0 manual intervention.',
      'Engineered blue-green deployments with Kubernetes ingress load balancing delivering seamless rolling updates under variable traffic.',
      'Integrated automated testing, Docker image packaging, and deployment webhooks within Jenkins pipelines triggered on code commits.'
    ]
  },
  {
    id: 'azure-mern-cicd',
    num: '02',
    badge: 'MULTI-STAGE CLOUD CI/CD',
    title: 'Multi-Stage CI/CD Pipeline for 3-Tier MERN on Azure',
    subtitle: 'Production-Grade Cloud Automation with Jenkins, Docker & Azure Virtual Machines',
    summary: 'Architected an end-to-end CI/CD workflow using Jenkins pipelines to deploy a complete 3-tier MERN stack onto Azure cloud infrastructure. Containerized frontend, backend, and MongoDB database layers with Docker to enforce complete environment parity across development and production.',
    tags: ['Microsoft Azure', 'Jenkins', 'Docker', 'Bash Scripting', 'React.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/codeBuilt864',
    demoUrl: 'https://lnkd.in/p/gwPx_rH6',
    demoLabel: 'LinkedIn Live Demo',
    accentColor: '#38BDF8',
    architecture: [
      { layer: 'Cloud Infrastructure', tech: 'Azure Cloud VMs', detail: 'Secured Azure Virtual Network, Network Security Groups (NSGs), and Linux host compute' },
      { layer: 'Automation Engine', tech: 'Jenkins & Bash', detail: 'Multi-stage scripted pipeline orchestrating linting, image build, security checks, and deploy' },
      { layer: 'Containerization', tech: 'Docker & Compose', detail: 'Isolated container stacks for React frontend, Express API gateway, and MongoDB persistence' },
      { layer: 'Deployment Strategy', tech: 'Rolling Updates', detail: 'Zero-downtime container swaps with health-check verification and rollback safeguards' }
    ],
    outcomes: [
      'Architected end-to-end CI/CD workflow deploying 3-tier MERN application onto Azure infrastructure.',
      'Containerized frontend, backend, and database layers with Docker enforcing 100% environment parity.',
      'Automated testing, artifact creation, and zero-downtime rolling updates on Azure VMs, eliminating manual release overhead.'
    ]
  },
  {
    id: 'fullstack-mern-book',
    num: '03',
    badge: 'FULL-STACK CLOUD ARCHITECTURE',
    title: 'Full-Stack E-Commerce Book Platform',
    subtitle: 'High-Concurrency MERN Web Application with Modular REST APIs & User Auth',
    summary: 'Built and deployed a full-stack e-commerce web platform enabling book browsing, seller listings, and end-to-end checkout workflows. Designed modular RESTful APIs using Express.js and MongoDB schemas for structured catalog and transaction management.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT Auth'],
    github: 'https://github.com/codeBuilt864/mern-book-MS',
    demoUrl: 'https://github.com/codeBuilt864/mern-book-MS',
    demoLabel: 'GitHub Codebase',
    accentColor: '#10B981',
    architecture: [
      { layer: 'Frontend UI', tech: 'React.js & CSS Modules', detail: 'Responsive client-side routing, state-managed search filtering, and shopping cart workflow' },
      { layer: 'API Gateway', tech: 'Express.js & Node.js', detail: 'Modular REST endpoints with JWT authentication, request validation, and error middleware' },
      { layer: 'Database', tech: 'MongoDB & Mongoose', detail: 'Schema-governed document collections for product catalogs, user accounts, and order history' },
      { layer: 'Source & CI', tech: 'Git & GitHub Workflows', detail: 'Automated code validation, version tagging, and modular npm dependency pipelines' }
    ],
    outcomes: [
      'Built and deployed a full-stack e-commerce web platform enabling book browsing, seller listings, and end-to-end checkout workflows.',
      'Designed modular RESTful APIs using Express.js and MongoDB schemas for structured catalog and transaction management.',
      'Developed a responsive, state-managed React frontend with client-side routing, search filtering, and secure user authentication.'
    ]
  },
  {
    id: 'devsecops-eks',
    num: '04',
    badge: 'AWS CLOUD & DEVSECOPS',
    title: 'Three-Tier DevSecOps Pipeline on AWS EKS',
    subtitle: 'End-to-End GitOps with ArgoCD, Automated Security Gates & Prometheus Telemetry',
    summary: 'Architected and implemented a production-ready DevSecOps pipeline for a distributed three-tier application hosted on Amazon EKS. Features automated security scans with Trivy and SonarQube, declarative GitOps sync via ArgoCD, and proactive observability with Prometheus & Grafana.',
    tags: ['AWS EKS', 'Terraform IaC', 'ArgoCD', 'Jenkins', 'Trivy', 'SonarQube', 'Prometheus', 'Grafana'],
    github: 'https://github.com/codeBuilt864/three-tier-devsecops-project',
    demoUrl: 'https://github.com/codeBuilt864/three-tier-devsecops-project',
    demoLabel: 'Explore GitOps Repo',
    accentColor: '#8B5CF6',
    architecture: [
      { layer: 'Infrastructure IaC', tech: 'Terraform', detail: 'Modular VPC, Public/Private Subnets, EKS Cluster, NAT Gateways, IAM IRSA roles' },
      { layer: 'CI Pipeline', tech: 'Jenkins & Docker', detail: 'Automated GitHub webhook triggers, multi-stage Docker builds, pushed to AWS ECR' },
      { layer: 'Security Gates', tech: 'Trivy & SonarQube', detail: 'Static code analysis and container image CVE vulnerability thresholds before deploy' },
      { layer: 'Continuous Delivery', tech: 'ArgoCD (GitOps)', detail: 'Monitors Git manifest repository and synchronizes state to EKS with auto-healing' },
      { layer: 'Observability', tech: 'Prometheus & Grafana', detail: 'Node and pod resource scraping with Grafana dashboards for latency and error rates' }
    ],
    outcomes: [
      'Codified 100% of AWS infrastructure with modular Terraform for repeatable destruction and provisioning.',
      'Embedded Trivy vulnerability scanner preventing high/critical CVEs from ever reaching staging or production.',
      'Achieved zero-downtime rolling updates managed autonomously through ArgoCD GitOps reconciliation.'
    ]
  }
];

const Projects = () => {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const activeProj = PROJECTS_DATA[activeProjectIdx];

  return (
    <section className="projects-section" id="projects" aria-labelledby="projects-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>PRODUCTION BUILDS & CASE STUDIES</span>
          </div>
          <h2 id="projects-heading" className="section-title-large">
            Proof of practice, <span className="gradient-text-cyan">engineered for production.</span>
          </h2>
          <p className="section-subtitle">
            Detailed architectural case studies highlighting real-world infrastructure choices,
            security gating, automated delivery pipelines, and verified deployments.
          </p>
        </div>

        {/* Project Selector Nav Tabs */}
        <div className="project-selector-strip reveal">
          {PROJECTS_DATA.map((proj, idx) => (
            <button
              key={proj.id}
              type="button"
              className={`project-tab-btn ${idx === activeProjectIdx ? 'active' : ''}`}
              onClick={() => setActiveProjectIdx(idx)}
              style={{ '--tab-accent': proj.accentColor }}
            >
              <span className="tab-num">0{idx + 1}</span>
              <span className="tab-title-text">{proj.title}</span>
              <span className="tab-tech-preview">{proj.tags.slice(0, 3).join(' • ')}</span>
            </button>
          ))}
        </div>

        {/* Active Project Feature Card */}
        <div
          className="project-feature-case-card reveal"
          key={activeProj.id}
          style={{ '--project-accent': activeProj.accentColor }}
        >
          <div className="case-card-header">
            <div className="case-badge-row">
              <span className="case-badge">{activeProj.badge}</span>
              <span className="case-id-tag">ARCH_STUDY // 0{activeProjectIdx + 1}</span>
            </div>
            <h3 className="case-title">{activeProj.title}</h3>
            <p className="case-subtitle">{activeProj.subtitle}</p>
          </div>

          <div className="case-tags-list">
            {activeProj.tags.map((tag) => (
              <span key={tag} className="case-tag-pill">
                {tag}
              </span>
            ))}
          </div>

          <div className="case-body-grid">
            {/* Left: Summary & Architecture Breakdown */}
            <div className="case-left-col">
              <h4 className="column-label">
                <FaNetworkWired className="label-icon" /> Architectural Breakdown
              </h4>
              <p className="case-summary-text">{activeProj.summary}</p>

              <div className="architecture-table">
                {activeProj.architecture.map((arch, i) => (
                  <div key={i} className="arch-row">
                    <div className="arch-layer-cell">
                      <span className="arch-layer-name">{arch.layer}</span>
                      <strong className="arch-tech">{arch.tech}</strong>
                    </div>
                    <div className="arch-detail-cell">{arch.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quantified Outcomes & Direct Source */}
            <div className="case-right-col">
              <h4 className="column-label">
                <FaRocket className="label-icon" /> Key Engineering Outcomes
              </h4>

              <div className="outcomes-list">
                {activeProj.outcomes.map((outcome, i) => (
                  <div key={i} className="outcome-item">
                    <FaCheckCircle className="outcome-check" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>

              <div className="case-action-box">
                <div className="action-meta">
                  <span className="status-dot-green" />
                  <span>Verified Project Artifacts</span>
                </div>
                <div className="case-action-btns">
                  <a
                    href={activeProj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-btn cyber-btn-primary"
                  >
                    <FaGithub className="btn-icon" />
                    <span>Inspect Codebase</span>
                    <FaExternalLinkAlt size={12} className="btn-icon-end" />
                  </a>
                  {activeProj.demoUrl && (
                    <a
                      href={activeProj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-btn cyber-btn-outline"
                    >
                      {activeProj.demoUrl.includes('linkedin.com') || activeProj.demoUrl.includes('lnkd.in') ? (
                        <FaLinkedin className="btn-icon" />
                      ) : (
                        <FaPlayCircle className="btn-icon" />
                      )}
                      <span>{activeProj.demoLabel || 'Demo / Walkthrough'}</span>
                      <FaExternalLinkAlt size={12} className="btn-icon-end" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
