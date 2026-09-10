import React, { useState } from 'react';
import { FaJenkins, FaGithub, FaDocker, FaAws, FaTerminal, FaCode, FaLock } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiPrometheus, SiGrafana } from 'react-icons/si';
import '../styles/skills.css';

const skillCategories = [
  { title: 'CI/CD & Automation', skills: [{ name: 'Jenkins', icon: <FaJenkins /> }, { name: 'GitHub Actions', icon: <FaGithub /> }, { name: 'GitLab CI', icon: <FaCode /> }, { name: 'ArgoCD', icon: <SiKubernetes /> }, { name: 'Python Scripting', icon: <FaCode /> }] },
  { title: 'Containers & Orchestration', skills: [{ name: 'Docker', icon: <FaDocker /> }, { name: 'Docker Compose', icon: <FaDocker /> }, { name: 'Kubernetes', icon: <SiKubernetes /> }, { name: 'Helm Charts', icon: <SiKubernetes /> }, { name: 'Podman', icon: <FaDocker /> }] },
  { title: 'Infrastructure as Code', skills: [{ name: 'Terraform', icon: <SiTerraform /> }, { name: 'AWS CloudFormation', icon: <FaAws /> }, { name: 'Ansible', icon: <SiAnsible /> }, { name: 'Cloud Deployment Manager', icon: <FaAws /> }] },
  { title: 'Cloud Platforms', skills: [{ name: 'AWS', icon: <FaAws /> }, { name: 'Google Cloud', icon: <FaAws /> }] },
  { title: 'Monitoring & Observability', skills: [{ name: 'Prometheus', icon: <SiPrometheus /> }, { name: 'Grafana', icon: <SiGrafana /> }, { name: 'ELK Stack', icon: <FaCode /> }, { name: 'CloudWatch', icon: <FaAws /> }] },
  { title: 'Development & Version Control', skills: [{ name: 'Git & GitHub', icon: <FaGithub /> }, { name: 'Python', icon: <FaCode /> }, { name: 'Bash/Shell Scripting', icon: <FaTerminal /> }, { name: 'YAML/JSON', icon: <FaCode /> }, { name: 'Linux/Unix', icon: <FaTerminal /> }] },
  { title: 'Security & Networking', skills: [{ name: 'Secret Management', icon: <FaLock /> }, { name: 'AWS IAM', icon: <FaLock /> }, { name: 'Network Security', icon: <FaLock /> }, { name: 'SSL/TLS', icon: <FaLock /> }, { name: 'Firewall Configuration', icon: <FaLock /> }] }
];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skillCategories[activeIndex];

  return (
    <section className="skills-section" aria-labelledby="skills-title">
      <div className="skills-inner">
        <div className="skills-heading">
          <p className="skills-kicker"><span /> The toolchain</p>
          <h2 id="skills-title">Systems<br /><em>in motion.</em></h2>
          <p>Every tool has a job. Together, they form a delivery system that can move from idea to reliable software.</p>
        </div>
        <div className="skills-console">
          <div className="skills-console-top"><span>YSR / CAPABILITY MAP</span><span>SELECT A LAYER</span></div>
          <nav className="skills-tabs" aria-label="Skill categories">
            {skillCategories.map((category, index) => (
              <button type="button" className={index === activeIndex ? 'is-active' : ''} onClick={() => setActiveIndex(index)} key={category.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>{category.title}
              </button>
            ))}
          </nav>
          <div className="skills-detail" key={activeCategory.title}>
            <div className="skills-detail-heading"><span className="skills-detail-number">{String(activeIndex + 1).padStart(2, '0')}</span><div><p>ACTIVE LAYER</p><h3>{activeCategory.title}</h3></div></div>
            <div className="skills-chip-cloud">
              {activeCategory.skills.map((skill) => <div className="skills-chip" key={skill.name}><span>{skill.icon}</span>{skill.name}</div>)}
            </div>
            <div className="skills-detail-footer"><span>{activeCategory.skills.length} tools in this layer</span><span className="skills-signal"><i /> SYSTEM READY</span></div>
          </div>
        </div>
        <div className="skills-footer"><span>01</span><div className="skills-footer-line" /><span>INFRASTRUCTURE / AUTOMATION / OBSERVABILITY</span><strong>07 LAYERS</strong></div>
      </div>
    </section>
  );
};

export default Skills;
