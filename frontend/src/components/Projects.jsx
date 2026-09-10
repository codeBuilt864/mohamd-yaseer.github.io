import React, { useState } from 'react';
import { FaGithub, FaCode, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import '../styles/projects.css';

const projects = [
  { number: '01', title: 'E-Commerce CI/CD Pipeline & Kubernetes Deployment', shortTitle: 'E-Commerce / Kubernetes', description: 'A full-stack e-commerce application deployed with a complete DevOps pipeline, demonstrating containerization, orchestration, and automated build, test, and deployment workflows.', tags: ['Kubernetes', 'Docker', 'Jenkins', 'CI/CD', 'MySQL', 'Monitoring'], outcomes: 'Built an automated Jenkins pipeline, containerized the Java/MySQL stack, and managed deployment on Kubernetes for scalable, resilient infrastructure.', github: 'https://github.com/codeBuilt864/Ecommerce-App-Kastro', icon: <SiKubernetes /> },
  { number: '02', title: 'Three-Tier DevSecOps Pipeline on AWS EKS', shortTitle: 'Three-Tier / DevSecOps', description: 'A production-grade full-stack application on AWS EKS using GitOps and DevSecOps workflows, with Terraform infrastructure, security scanning, CI/CD, and proactive monitoring.', tags: ['AWS EKS', 'Terraform', 'ArgoCD', 'Jenkins', 'DevSecOps', 'Prometheus/Grafana', 'Docker', 'Trivy'], outcomes: 'Automated AWS infrastructure with Terraform, embedded Trivy and SonarQube scanning, managed GitOps deployments with ArgoCD, and monitored the cluster with Prometheus and Grafana.', github: 'https://github.com/codeBuilt864/three-tier-devsecops-project', icon: <SiTerraform /> },
  { number: '03', title: 'Automated EKS Cluster Provisioning with Terraform & Jenkins', shortTitle: 'EKS / Terraform', description: 'Automated creation and management of Amazon EKS clusters with Infrastructure as Code and a Jenkins pipeline for repeatable, version-controlled provisioning.', tags: ['Terraform', 'AWS EKS', 'Jenkins', 'IaC', 'Automation', 'Kubernetes'], outcomes: 'Codified AWS EKS infrastructure for review and reuse, reducing cluster creation from roughly 20 minutes of manual work to a single reliable pipeline run.', github: 'https://github.com/codeBuilt864/Jenkins-Terraform-EKS', icon: <SiTerraform /> }
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  const movePanel = (event) => {
    const panel = event.currentTarget;
    const bounds = panel.getBoundingClientRect();
    panel.style.setProperty('--project-spot-x', `${event.clientX - bounds.left}px`);
    panel.style.setProperty('--project-spot-y', `${event.clientY - bounds.top}px`);
  };

  return (
    <section className="projects-section" aria-labelledby="projects-title">
      <div className="projects-inner">
        <div className="projects-heading">
          <p className="projects-kicker"><span /> Selected builds</p>
          <h2 id="projects-title">Proof of<br /><em>practice.</em></h2>
          <p>Real systems, real constraints, and the small infrastructure choices that make software easier to ship.</p>
        </div>
        <div className="projects-console">
          <div className="projects-console-top"><span>YSR / PROJECT LOG</span><span>{activeProject.number} / 03</span></div>
          <div className="projects-list" aria-label="Projects">
            {projects.map((project, index) => <button type="button" key={project.number} className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)}><span>{project.number}</span>{project.shortTitle}</button>)}
          </div>
          <article className="project-feature" onMouseMove={movePanel}>
            <div className="project-feature-mark">{activeProject.icon}</div>
            <p className="project-feature-label">PROJECT {activeProject.number} / DEPLOYMENT STUDY</p>
            <h3>{activeProject.title}</h3>
            <div className="project-tags">{activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <p className="project-description">{activeProject.description}</p>
            <div className="project-outcome"><span><FaCode /> Outcome</span><p>{activeProject.outcomes}</p></div>
            <a className="project-link" href={activeProject.github} target="_blank" rel="noopener noreferrer">View source <FaGithub /><FaArrowUpRightFromSquare /></a>
          </article>
        </div>
        <div className="projects-footer"><span>03 BUILDS</span><div /><span>PIPELINE / CLOUD / RESILIENCE</span><strong>OPEN SOURCE WORKFLOW</strong></div>
      </div>
    </section>
  );
};

export default Projects;
