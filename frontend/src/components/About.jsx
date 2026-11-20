import React from 'react';
import { FaTerminal, FaCodeBranch, FaCheckCircle, FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import { SiAmazon, SiKubernetes, SiTerraform, SiDocker, SiLinux } from 'react-icons/si';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>CORE ARCHITECTURAL MANIFESTO</span>
          </div>
          <h2 id="about-heading" className="section-title-large">
            Driven by curiosity, <span className="gradient-text-cyan">engineered for resilience.</span>
          </h2>
          <p className="section-subtitle">
            I am Mohamed Yaseer, an AWS Certified Solutions Architect and DevOps engineer
            dedicated to turning complex distributed systems into predictable, automated, and observable cloud operations.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="about-bento-grid">
          {/* Card 1: Architectural Philosophy (Large 2-column span) */}
          <div className="bento-card bento-manifesto reveal">
            <div className="bento-glow-cyan" />
            <div className="bento-header">
              <span className="bento-tag">PHILOSOPHY // 01</span>
              <SiLinux className="bento-corner-icon" />
            </div>
            <h3 className="bento-title">DevOps is empathy codified into infrastructure.</h3>
            <p className="bento-text">
              Great software fails without resilient delivery pipelines. My approach centers on
              removing fear from production releases through immutable infrastructure, automated testing gates,
              and comprehensive observability. I treat infrastructure with the same rigor as application code:
              version-controlled, tested, peer-reviewed, and continuously deployed.
            </p>
            <div className="manifesto-pillars">
              <div className="pillar">
                <FaCheckCircle className="pillar-icon" />
                <div>
                  <strong>Declarative State</strong>
                  <span>100% Terraform IaC with zero manual drift.</span>
                </div>
              </div>
              <div className="pillar">
                <FaCheckCircle className="pillar-icon" />
                <div>
                  <strong>Shift-Left Security</strong>
                  <span>Trivy & SonarQube integrated before artifacts reach registry.</span>
                </div>
              </div>
              <div className="pillar">
                <FaCheckCircle className="pillar-icon" />
                <div>
                  <strong>Self-Healing Systems</strong>
                  <span>Kubernetes HPA & automated rollbacks on health probe failure.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: AWS Certified Credentials Highlight */}
          <div className="bento-card bento-credential reveal">
            <div className="bento-glow-violet" />
            <div className="bento-header">
              <span className="bento-tag">CREDENTIAL // SAA-C03</span>
              <FaAward className="bento-corner-icon" />
            </div>
            <div className="cred-highlight-wrap">
              <SiAmazon className="aws-cred-icon" />
              <div>
                <h4 className="cred-title">AWS Certified Solutions Architect</h4>
                <p className="cred-subtitle">Associate (SAA-C03)</p>
              </div>
            </div>
            <p className="cred-desc">
              Validated expertise in designing highly available, cost-optimized, fault-tolerant,
              and scalable distributed systems on Amazon Web Services.
            </p>
            <a
              href="https://www.credly.com/badges/71a946c7-ad57-40d7-8380-10c2c317cc9d/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="cred-verify-btn"
            >
              <span>Verify on Credly</span>
              <FaExternalLinkAlt size={11} />
            </a>
          </div>

          {/* Card 3: Engineering Roadmap Timeline (Full Span) */}
          <div className="bento-card bento-roadmap reveal">
            <div className="bento-header">
              <span className="bento-tag">JOURNEY & EVOLUTION // TIMELINE</span>
              <FaCodeBranch className="bento-corner-icon" />
            </div>
            <h3 className="bento-title">How curiosity evolved into production-grade systems.</h3>

            <div className="roadmap-grid">
              <div className="roadmap-step">
                <div className="step-num">STAGE 01</div>
                <h4 className="step-title">Systems & Linux Core</h4>
                <p className="step-desc">
                  Mastered Linux file hierarchies, process management, networking protocols,
                  and automated shell scripting for repetitive system operations.
                </p>
                <div className="step-tags">
                  <span>Linux</span>
                  <span>Bash</span>
                  <span>Networking</span>
                  <span>Git</span>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-num">STAGE 02</div>
                <h4 className="step-title">Containers & CI/CD</h4>
                <p className="step-desc">
                  Architected multi-stage Docker builds, established Jenkins declarative pipelines,
                  and automated artifact lifecycles with registry scanning.
                </p>
                <div className="step-tags">
                  <span>Docker</span>
                  <span>Jenkins</span>
                  <span>SonarQube</span>
                  <span>ECR</span>
                </div>
              </div>

              <div className="roadmap-step">
                <div className="step-num">STAGE 03</div>
                <h4 className="step-title">Kubernetes & Terraform</h4>
                <p className="step-desc">
                  Provisioned production Amazon EKS clusters using modular Terraform code,
                  configuring Ingress controllers, Secrets, ConfigMaps, and namespaces.
                </p>
                <div className="step-tags">
                  <span>AWS EKS</span>
                  <span>Terraform IaC</span>
                  <span>Helm</span>
                  <span>IAM</span>
                </div>
              </div>

              <div className="roadmap-step active-step">
                <div className="step-num">STAGE 04 (CURRENT)</div>
                <h4 className="step-title">GitOps & Observability</h4>
                <p className="step-desc">
                  Implementing GitOps delivery workflows via ArgoCD, Prometheus telemetry,
                  Grafana dashboard alerts, and exploring eBPF kernel observability.
                </p>
                <div className="step-tags">
                  <span>ArgoCD</span>
                  <span>Prometheus</span>
                  <span>Grafana</span>
                  <span>DevSecOps</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Quick Telemetry Quick Facts */}
          <div className="bento-card bento-facts reveal">
            <div className="bento-header">
              <span className="bento-tag">TELEMETRY // VITAL STATS</span>
              <FaTerminal className="bento-corner-icon" />
            </div>
            <div className="facts-list">
              <div className="fact-item">
                <span className="fact-label">Cloud Platforms:</span>
                <span className="fact-value">AWS & Microsoft Azure</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Proven Deployments:</span>
                <span className="fact-value">5+ End-to-End Production Topologies</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Full-Stack Scale:</span>
                <span className="fact-value">20+ MERN Stack Applications</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Academic Merit:</span>
                <span className="fact-value">BICT, Rajarata University (GPA: 3.20)</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Strategic Edge:</span>
                <span className="fact-value">Two-Time University Chess Champion</span>
              </div>
            </div>
          </div>

          {/* Card 5: Core Values */}
          <div className="bento-card bento-values reveal">
            <div className="bento-header">
              <span className="bento-tag">STANDARD // PRODUCTION READY</span>
              <SiTerraform className="bento-corner-icon" />
            </div>
            <h4 className="bento-title">Never deploy manually what can be codified.</h4>
            <p className="bento-text">
              If an environment cannot be rebuilt from code in 10 minutes, it is not scalable.
              Everything from IAM roles to VPC subnets to cluster ingress lives in audited repositories.
            </p>
            <div className="values-stack-icons">
              <SiTerraform title="Terraform" />
              <SiKubernetes title="Kubernetes" />
              <SiDocker title="Docker" />
              <SiAmazon title="AWS" />
              <SiLinux title="Linux" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
