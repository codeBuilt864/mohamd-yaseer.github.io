import React, { useState } from 'react';
import {
  FaJenkins, FaGithub, FaDocker, FaAws, FaCode,
  FaLock, FaCheckCircle, FaNetworkWired, FaLayerGroup
} from 'react-icons/fa';
import {
  SiKubernetes, SiTerraform, SiAnsible, SiPrometheus,
  SiGrafana, SiArgo, SiLinux, SiPython, SiHelm, SiGnubash, SiYaml
} from 'react-icons/si';
import '../styles/skills.css';

const SKILL_CATEGORIES = [
  { id: 'all', label: 'All Disciplines' },
  { id: 'cloud', label: 'Cloud & IaC' },
  { id: 'containers', label: 'Kubernetes & Containers' },
  { id: 'cicd', label: 'CI/CD & GitOps' },
  { id: 'observability', label: 'Observability & SRE' },
  { id: 'security', label: 'DevSecOps & Governance' },
  { id: 'core', label: 'Linux & Scripting' },
];

const SKILLS_DATA = [
  // Cloud & IaC
  { name: 'Amazon Web Services (AWS)', category: 'cloud', level: 'Advanced', icon: <FaAws />, color: '#FF9900', desc: 'EKS, VPC, EC2, S3, IAM, CloudWatch, Route53, RDS, ECR architecture.' },
  { name: 'Terraform (IaC)', category: 'cloud', level: 'Advanced', icon: <SiTerraform />, color: '#7B42BC', desc: 'Modular infrastructure as code, remote state in S3/DynamoDB, zero-drift execution.' },
  { name: 'AWS CloudFormation', category: 'cloud', level: 'Proficient', icon: <FaAws />, color: '#FF9900', desc: 'Native AWS template authoring, nested stacks, and automated rollback triggers.' },
  { name: 'Ansible', category: 'cloud', level: 'Proficient', icon: <SiAnsible />, color: '#EE0000', desc: 'Idempotent configuration management, server provisioning, and role automation.' },

  // Containers
  { name: 'Kubernetes (K8s)', category: 'containers', level: 'Advanced', icon: <SiKubernetes />, color: '#326CE5', desc: 'Deployments, Services, Ingress, ConfigMaps, Secrets, RBAC, HPA, and multi-node clusters.' },
  { name: 'Docker & Docker Compose', category: 'containers', level: 'Advanced', icon: <FaDocker />, color: '#2496ED', desc: 'Multi-stage Dockerfiles, minimal image hardening, layer caching, local orchestration.' },
  { name: 'Helm 3 Package Manager', category: 'containers', level: 'Advanced', icon: <SiHelm />, color: '#0F1689', desc: 'Custom Helm charts, values templating, dependency management, and releases.' },

  // CI/CD
  { name: 'Jenkins CI/CD', category: 'cicd', level: 'Advanced', icon: <FaJenkins />, color: '#D24939', desc: 'Declarative scripted Jenkinsfiles, multi-branch pipelines, shared libraries, webhook integration.' },
  { name: 'ArgoCD (GitOps)', category: 'cicd', level: 'Advanced', icon: <SiArgo />, color: '#EF7B4D', desc: 'Declarative continuous delivery, auto-syncing Git repos to live Kubernetes clusters.' },
  { name: 'GitHub Actions', category: 'cicd', level: 'Proficient', icon: <FaGithub />, color: '#00F0FF', desc: 'Automated CI workflows, matrix builds, release packaging, and secret scanning.' },
  { name: 'GitLab CI/CD', category: 'cicd', level: 'Proficient', icon: <FaCode />, color: '#FC6D26', desc: 'Multi-stage .gitlab-ci.yml pipelines with dynamic environments and artifact tracking.' },

  // Observability
  { name: 'Prometheus', category: 'observability', level: 'Advanced', icon: <SiPrometheus />, color: '#E6522C', desc: 'Metric collection, PromQL queries, Node Exporter, kube-state-metrics, and Alertmanager rules.' },
  { name: 'Grafana Telemetry', category: 'observability', level: 'Advanced', icon: <SiGrafana />, color: '#F46800', desc: 'Real-time telemetry dashboards, SLO/SLI tracking, data source aggregation.' },
  { name: 'AWS CloudWatch', category: 'observability', level: 'Advanced', icon: <FaAws />, color: '#FF9900', desc: 'Log groups, metric filters, alarm triggers, and synthesized application monitors.' },
  { name: 'ELK / Log Aggregation', category: 'observability', level: 'Proficient', icon: <FaNetworkWired />, color: '#005571', desc: 'Centralized cluster log streaming, parsing, and real-time error auditing.' },

  // DevSecOps
  { name: 'Trivy Vulnerability Scanner', category: 'security', level: 'Advanced', icon: <FaLock />, color: '#00B4D8', desc: 'Automated container image CVE detection embedded directly in CI pipelines.' },
  { name: 'SonarQube Quality Gate', category: 'security', level: 'Advanced', icon: <FaCode />, color: '#4E9BCD', desc: 'Static code analysis (SAST), code smells, security hotspots, and coverage gates.' },
  { name: 'AWS IAM & Least Privilege', category: 'security', level: 'Advanced', icon: <FaLock />, color: '#FF9900', desc: 'Role-based access controls, IRSA (IAM Roles for Service Accounts), policy auditing.' },
  { name: 'Secrets Management', category: 'security', level: 'Proficient', icon: <FaLock />, color: '#38BDF8', desc: 'Sealed Secrets, HashiCorp Vault patterns, and encrypted environmental configurations.' },

  // Core & Linux
  { name: 'Linux / Unix OS', category: 'core', level: 'Advanced', icon: <SiLinux />, color: '#FCC624', desc: 'Kernel parameters, systemd, process debugging, network stack, and permissions.' },
  { name: 'Bash & Shell Scripting', category: 'core', level: 'Advanced', icon: <SiGnubash />, color: '#4EAA25', desc: 'Automated maintenance, deployment hooks, text processing with sed/awk.' },
  { name: 'Python for Automation', category: 'core', level: 'Proficient', icon: <SiPython />, color: '#3776AB', desc: 'Boto3 cloud automation, API integrations, and infrastructure testing scripts.' },
  { name: 'Git & Version Control', category: 'core', level: 'Advanced', icon: <FaGithub />, color: '#F05032', desc: 'Trunk-based workflows, rebasing, bisect debugging, and protected branch governance.' },
  { name: 'YAML & JSON Architecture', category: 'core', level: 'Advanced', icon: <SiYaml />, color: '#CB171E', desc: 'Validation schemas, structured cloud configurations, and manifest templating.' },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === selectedCategory);

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header-centered reveal">
          <div className="section-badge">
            <span className="badge-dot" />
            <span>OPERATIONAL CAPABILITY MATRIX</span>
          </div>
          <h2 id="skills-heading" className="section-title-large">
            Battle-tested tools, <span className="gradient-text-cyan">coherent delivery systems.</span>
          </h2>
          <p className="section-subtitle">
            Every tool in this stack serves a dedicated purpose in the build, deploy, and observe lifecycle.
            Explore the categorized toolchain below.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="skills-filter-nav reveal">
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`filter-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              <span>{cat.label}</span>
              {selectedCategory === cat.id && <span className="tab-active-indicator" />}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills-cards-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card reveal"
              style={{
                '--brand-color': skill.color,
                animationDelay: `${index * 0.04}s`,
              }}
            >
              <div className="skill-card-top">
                <div className="skill-icon-wrap" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-level-badge">
                  <FaCheckCircle className="check-mini" />
                  <span>{skill.level}</span>
                </div>
              </div>

              <h3 className="skill-title">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>

              <div className="skill-card-footer">
                <div className="skill-meter-track">
                  <div
                    className="skill-meter-fill"
                    style={{
                      width: skill.level === 'Advanced' ? '92%' : '80%',
                      backgroundColor: skill.color,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cloud Architecture Flowchart Banner */}
        <div className="tech-pipeline-flow-banner reveal">
          <div className="flow-banner-header">
            <FaLayerGroup className="flow-icon" />
            <span>PRODUCTION DEPLOYMENT TOPOLOGY FLOW</span>
          </div>
          <div className="flow-steps">
            <div className="flow-step">
              <span className="step-tag">01 // CODE</span>
              <strong>Git & GitHub</strong>
              <small>Semantic Branching</small>
            </div>
            <span className="flow-arrow">&rarr;</span>
            <div className="flow-step">
              <span className="step-tag">02 // BUILD</span>
              <strong>Jenkins Pipeline</strong>
              <small>Multi-stage Build</small>
            </div>
            <span className="flow-arrow">&rarr;</span>
            <div className="flow-step">
              <span className="step-tag">03 // AUDIT</span>
              <strong>SonarQube & Trivy</strong>
              <small>Security Gate</small>
            </div>
            <span className="flow-arrow">&rarr;</span>
            <div className="flow-step">
              <span className="step-tag">04 // GITOPS</span>
              <strong>ArgoCD & EKS</strong>
              <small>Zero Downtime</small>
            </div>
            <span className="flow-arrow">&rarr;</span>
            <div className="flow-step">
              <span className="step-tag">05 // TELEMETRY</span>
              <strong>Prometheus / Grafana</strong>
              <small>Alertmanager SLIs</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
