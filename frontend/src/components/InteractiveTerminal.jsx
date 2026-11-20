import React, { useState, useRef, useEffect } from 'react';
import { FaTerminal, FaPlay, FaTrash, FaExpandAlt, FaCompressAlt } from 'react-icons/fa';
import '../styles/terminal.css';

const COMMANDS = {
  help: `Available commands:
  • whoami        - About Mohamed Yaseer & engineering philosophy
  • skills        - Core toolchain & proficiency matrix
  • projects      - Flagship architecture case studies
  • certs         - Verified credentials & cloud badges
  • pipeline      - Trigger interactive CI/CD pipeline simulation
  • contact       - Direct uplink (Email, LinkedIn, GitHub)
  • status        - Live cluster health & latency telemetry
  • clear         - Clear terminal screen`,

  whoami: `MOHAMED YASEER // DevOps & Cloud Systems Engineer
--------------------------------------------------
Location    : India (Available for Global Remote & Hybrid)
Focus       : Scalable Kubernetes topologies, Infrastructure as Code,
              resilient CI/CD pipelines, and proactive observability.
Philosophy  : "Make complex systems feel inevitable. Automate what moves,
              observe what lives, and secure what scales."
Cert        : AWS Certified Solutions Architect - Associate (SAA-C03)`,

  skills: `CORE ENGINEERING STACK:
--------------------------------------------------
[+] Cloud & IaC      : AWS (EKS, VPC, EC2, S3, IAM), Terraform, CloudFormation, Ansible
[+] Containers       : Docker, Docker Compose, Kubernetes, Helm Charts, Podman
[+] CI/CD & GitOps   : Jenkins (Pipelines as Code), GitHub Actions, ArgoCD, GitLab CI
[+] Observability    : Prometheus, Grafana, CloudWatch, ELK Stack
[+] DevSecOps        : Trivy, SonarQube, IAM Least-Privilege, Secrets Management
[+] Core / Scripting : Linux/Unix Kernel, Bash Shell, Python, YAML/JSON, Git`,

  projects: `SELECTED ARCHITECTURAL BUILDS:
--------------------------------------------------
01. Three-Tier DevSecOps Pipeline on AWS EKS
    - GitOps automated delivery with ArgoCD & Jenkins
    - Terraform modular VPC & EKS cluster provisioning
    - SonarQube quality gates & Trivy container security
    -> GitHub: github.com/codeBuilt864/three-tier-devsecops-project

02. Automated EKS Cluster Provisioning
    - Codified AWS EKS infrastructure with Terraform & Jenkins
    - Reduced cluster setup time from 20+ min to single click
    -> GitHub: github.com/codeBuilt864/Jenkins-Terraform-EKS

03. E-Commerce Microservices Pipeline & K8s
    - Containerized Java/MySQL multi-tier architecture
    - Rolling zero-downtime updates & Horizontal Pod Autoscaling
    -> GitHub: github.com/codeBuilt864/Ecommerce-App-Kastro`,

  certs: `VERIFIED CREDENTIAL ARCHIVE:
--------------------------------------------------
[1] AWS Certified Solutions Architect - Associate (SAA-C03)
    Issuer: Amazon Web Services | Credly ID: 71a946c7-ad57-40d7-8380-10c2c317cc9d
[2] Kubernetes Level 1 - Certified
    Issuer: KodeKloud | ID: 88d4b237-67af-4a6f-8cea-b6507b10e568
[3] AWS Educate - Introduction to Generative AI
    Issuer: Amazon Web Services
[4] AWS Educate - Cloud Storage & Architecture 101
    Issuer: Amazon Web Services
[5] Advanced Git Programming
    Issuer: Mindluster`,

  contact: `COMMUNICATION CHANNELS:
--------------------------------------------------
Email     : yaseermhdofficial01@gmail.com
LinkedIn  : linkedin.com/in/mhdyaseer
GitHub    : github.com/codeBuilt864
Status    : OPEN FOR OPPORTUNITIES (DevOps / SRE / Cloud Engineer)`,

  status: `NODE TELEMETRY & CLUSTER HEALTH:
--------------------------------------------------
Cluster Region   : us-east-1 (N. Virginia)
Control Plane    : ACTIVE [v1.30.2-eks]
Uptime           : 99.998%
Nodes Ready      : 4 / 4 (Worker nodes healthy)
Latency          : 18ms
Security Status  : 0 Critical / 0 High CVEs (Trivy Scan Passed)`,

  sudo: `Permission granted! You already have root privileges to explore this portfolio. Feel free to run 'pipeline' or 'projects'.`
};

const InteractiveTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'system', text: 'Initializing YSR-OS v2.6 Cloud Console...' },
    { type: 'system', text: 'Connected to node ysr-cluster-01 [AWS us-east-1] - Type "help" or click prompts below.' },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isSimulating, setIsSimulating] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }

    if (trimmed === 'pipeline') {
      runPipelineSimulation();
      return;
    }

    const output = COMMANDS[trimmed] || `command not found: "${trimmed}". Type "help" to see available commands.`;

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: cmdText },
      { type: 'output', text: output },
    ]);
  };

  const runPipelineSimulation = () => {
    setIsSimulating(true);
    setHistory((prev) => [
      ...prev,
      { type: 'input', text: 'pipeline' },
      { type: 'system', text: '⚡ Initializing Automated CI/CD DevSecOps Pipeline...' },
    ]);

    const steps = [
      '[1/5] Git Checkout: commit 8c4d9a [feat: resilient autoscaling policies]',
      '[2/5] Static Analysis & SonarQube Scan: 0 Bugs, 0 Vulnerabilities, Grade: A+',
      '[3/5] Container Build: docker build -t ysr/cloud-svc:v2.6 . [Multi-stage cached]',
      '[4/5] Security Gate: Trivy image vulnerability scan passed (0 critical / 0 high)',
      '[5/5] GitOps ArgoCD Sync -> AWS EKS cluster deployment: Rolled out pods 3/3 READY',
      '✅ PIPELINE SUCCESSFUL: Zero-downtime deployment verified in 14.2s! Prometheus monitoring live.'
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setHistory((prev) => [...prev, { type: 'pipeline-step', text: step }]);
        if (idx === steps.length - 1) {
          setIsSimulating(false);
        }
      }, (idx + 1) * 600);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSimulating) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleChipClick = (cmd) => {
    if (isSimulating) return;
    executeCommand(cmd);
  };

  return (
    <div className={`terminal-container ${isMaximized ? 'terminal-maximized' : ''}`}>
      <div className="terminal-header">
        <div className="terminal-window-buttons">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <div className="terminal-header-title">
          <FaTerminal className="term-icon" />
          <span>ysr@cloud-control-plane: ~ (bash)</span>
        </div>
        <div className="terminal-header-actions">
          <button
            type="button"
            className="term-action-btn"
            onClick={() => setHistory([])}
            title="Clear terminal"
            aria-label="Clear terminal"
          >
            <FaTrash size={11} />
          </button>
          <button
            type="button"
            className="term-action-btn"
            onClick={() => setIsMaximized(!isMaximized)}
            title={isMaximized ? "Restore" : "Maximize"}
            aria-label="Toggle size"
          >
            {isMaximized ? <FaCompressAlt size={11} /> : <FaExpandAlt size={11} />}
          </button>
        </div>
      </div>

      <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
        {history.map((entry, idx) => (
          <div key={idx} className={`term-line term-${entry.type}`}>
            {entry.type === 'input' && <span className="term-prompt-symbol">ysr@aws:~$ </span>}
            <pre className="term-text">{entry.text}</pre>
          </div>
        ))}
        {isSimulating && (
          <div className="term-line term-simulating">
            <span className="term-spinner" /> <span>Pipeline executing...</span>
          </div>
        )}
        <form onSubmit={handleSubmit} className="term-input-row">
          <span className="term-prompt-symbol">ysr@aws:~$ </span>
          <input
            ref={inputRef}
            type="text"
            className="term-input"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            disabled={isSimulating}
            placeholder={isSimulating ? 'Pipeline running...' : 'Type command here (e.g. "skills", "projects", "pipeline")...'}
            spellCheck="false"
            autoComplete="off"
          />
        </form>
        <div ref={terminalEndRef} />
      </div>

      <div className="terminal-quick-chips">
        <span className="chips-label">Quick run:</span>
        {['whoami', 'skills', 'projects', 'certs', 'pipeline', 'status', 'contact'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            className="terminal-chip"
            onClick={() => handleChipClick(cmd)}
            disabled={isSimulating}
          >
            <FaPlay className="chip-play-icon" /> {cmd}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTerminal;
