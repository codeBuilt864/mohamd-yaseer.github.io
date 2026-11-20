import React, { useState } from 'react';
import {
  FaGithub, FaExternalLinkAlt, FaCheckCircle,
  FaRocket, FaNetworkWired
} from 'react-icons/fa';
import '../styles/projects.css';

const PROJECTS_DATA = [
  {
    id: 'devsecops-eks',
    num: '01',
    badge: 'FLAGSHIP ARCHITECTURE',
    title: 'Three-Tier DevSecOps Pipeline on AWS EKS',
    subtitle: 'End-to-End GitOps with ArgoCD, Automated Security Gates & Prometheus Telemetry',
    summary: 'Architected and implemented a production-ready DevSecOps pipeline for a distributed three-tier application hosted on Amazon EKS. Features automated security scans, declarative GitOps sync, and proactive observability.',
    tags: ['AWS EKS', 'Terraform IaC', 'ArgoCD', 'Jenkins', 'Trivy', 'SonarQube', 'Prometheus', 'Grafana'],
    github: 'https://github.com/codeBuilt864/three-tier-devsecops-project',
    accentColor: '#00F0FF',
    architecture: [
      { layer: 'Infrastructure', tech: 'Terraform', detail: 'Modular VPC, Public/Private Subnets, EKS Cluster, NAT Gateways, IAM IRSA roles' },
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
  },
  {
    id: 'jenkins-terraform-eks',
    num: '02',
    badge: 'INFRASTRUCTURE AS CODE',
    title: 'Automated EKS Cluster Provisioning with Terraform & Jenkins',
    subtitle: 'Declarative Cloud Infrastructure Pipeline for Repeatable Cluster Orchestration',
    summary: 'Designed an automated Infrastructure as Code workflow enabling single-click provisioning of Amazon EKS clusters via Jenkins pipelines. Solves the pain point of inconsistent, error-prone manual cluster builds.',
    tags: ['Terraform', 'AWS EKS', 'Jenkins', 'AWS IAM', 'Docker', 'Automation'],
    github: 'https://github.com/codeBuilt864/Jenkins-Terraform-EKS',
    accentColor: '#8B5CF6',
    architecture: [
      { layer: 'VPC Design', tech: 'Terraform VPC Module', detail: 'Dedicated CIDR blocks across multiple availability zones with private worker subnets' },
      { layer: 'Compute Layer', tech: 'Amazon EKS', detail: 'Managed node groups with auto-scaling policies based on CPU and memory thresholds' },
      { layer: 'Automation Orchestration', tech: 'Jenkinsfile', detail: 'Pipeline stages for `terraform init`, `validate`, `plan` with manual approval gate, and `apply`' },
      { layer: 'Access & Security', tech: 'AWS IAM & OIDC', detail: 'Configured OIDC provider to bind Kubernetes service accounts directly to IAM policies' }
    ],
    outcomes: [
      'Reduced cluster creation time from ~25 minutes of manual console clicking to a 1-click declarative pipeline run.',
      'Enforced immutable infrastructure practices: state stored securely with remote S3 backend and DynamoDB state locking.',
      'Zero manual drift between environment iterations across development, test, and production.'
    ]
  },
  {
    id: 'ecommerce-cicd',
    num: '03',
    badge: 'MICROSERVICES & CONTAINERIZATION',
    title: 'E-Commerce CI/CD Pipeline & Kubernetes Deployment',
    subtitle: 'Resilient Multi-Tier Microservices with Automated Jenkins Builds & Autoscaling',
    summary: 'Containerized and deployed a multi-tier e-commerce web application featuring Java Spring Boot backend, MySQL persistence, and automated Jenkins CI/CD pipelines deploying to Kubernetes with rolling health checks.',
    tags: ['Kubernetes', 'Docker', 'Jenkins', 'MySQL', 'CI/CD', 'HPA', 'Ingress'],
    github: 'https://github.com/codeBuilt864/Ecommerce-App-Kastro',
    accentColor: '#10B981',
    architecture: [
      { layer: 'App Stack', tech: 'Java & MySQL', detail: 'Decoupled presentation, business logic, and persistent storage layers' },
      { layer: 'Packaging', tech: 'Docker Multi-Stage', detail: 'Minimal JRE runtime containers reducing final image size by over 60%' },
      { layer: 'Orchestration', tech: 'Kubernetes Pods & Services', detail: 'ClusterIP internal routing, PersistentVolumeClaims for MySQL data retention' },
      { layer: 'Resilience', tech: 'HPA & Readiness Probes', detail: 'Automated horizontal scaling and liveness/readiness probes preventing dead traffic' }
    ],
    outcomes: [
      'Built end-to-end automated pipeline: Code push -> Maven Test -> Docker Build -> Kubernetes Manifest Apply.',
      'Configured persistent volumes ensuring database state survives pod restarts and cluster node rebalancing.',
      'Achieved self-healing deployment with Kubernetes automated pod rescheduling upon node disruption.'
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
            security gating, and automated delivery pipelines.
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
                  <span>Public Open Source Repository</span>
                </div>
                <a
                  href={activeProj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn cyber-btn-primary"
                >
                  <FaGithub className="btn-icon" />
                  <span>Inspect Code & Manifests</span>
                  <FaExternalLinkAlt size={12} className="btn-icon-end" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
