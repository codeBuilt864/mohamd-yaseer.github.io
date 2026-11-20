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

  whoami: `RAHMATHTHULLA MOHAMED YAASEER // Aspiring Cloud | SRE | DevOps Engineer
--------------------------------------------------
Location    : Trincomalee, Sri Lanka (Available for Global Remote)
Contact     : +94 75 733 2727 | yaseermhdofficial01@gmail.com
Education   : Bachelor of Information and Communication Technology (BICT)
              Rajarata University of Sri Lanka (GPA: 3.20 / 4.00)
Honors      : Two-Time University Chess Champion (Rajarata University)
Focus       : 5+ Cloud Deployments, Multi-Stage CI/CD across AWS & Azure,
              Resilient Kubernetes Topologies, 20+ MERN Stack Projects.
Philosophy  : "Make complex systems feel inevitable. Automate what moves,
              observe what lives, and secure what scales."
Cert        : AWS Certified Solutions Architect - Associate (SAA-C03)`,

  skills: `CORE ENGINEERING STACK:
--------------------------------------------------
[+] Cloud & IaC      : AWS (EKS, VPC, EC2, S3, IAM), Microsoft Azure, Terraform, Ansible
[+] Containers       : Docker, Docker Compose, Kubernetes (K8s), Helm 3, Microservices
[+] CI/CD & GitOps   : Jenkins (Pipelines as Code), GitHub Actions, ArgoCD, Azure DevOps
[+] Observability    : Prometheus, Grafana Telemetry, CloudWatch, Alertmanager
[+] Full-Stack MERN  : MongoDB, Express.js, React.js, Node.js, RESTful APIs, JWT
[+] DevSecOps        : Trivy CVE Scanner, SonarQube SAST, IAM Least-Privilege, Secrets
[+] Core / Scripting : Linux OS Kernel, Bash Scripting, Python Automation, YAML/JSON, Git`,

  projects: `FEATURED PRODUCTION & CLOUD BUILDS:
--------------------------------------------------
01. Automated CI/CD & Auto-Scaling Kubernetes Deployment
    - Java Spring Boot, Docker, Kubernetes, Jenkins, HPA, Blue-Green
    - LinkedIn Video Demo: https://lnkd.in/p/gwPx_rH6
    - Code: github.com/codeBuilt864/Ecommerce-App-Kastro

02. Automated Multi-Stage CI/CD for 3-Tier MERN on Azure
    - Microsoft Azure VMs, Jenkins Pipelines, Docker, Bash Scripting
    - Zero-downtime rolling updates & environment parity
    - LinkedIn Video Demo: https://lnkd.in/p/gwPx_rH6

03. Full-Stack E-Commerce Book Platform
    - MongoDB, Express.js, React.js, Node.js, Modular REST APIs
    - Code: github.com/codeBuilt864/mern-book-MS

04. Three-Tier DevSecOps Pipeline on AWS EKS
    - GitOps with ArgoCD, Terraform IaC, Trivy, SonarQube, Prometheus & Grafana
    - Code: github.com/codeBuilt864/three-tier-devsecops-project`,

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
  const terminalBodyRef = useRef(null);
  const inputRef = useRef(null);

  // Keep internal terminal scrolled to bottom without scrolling window or jumping to navbar
  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, isSimulating]);

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
    e.stopPropagation();
    if (isSimulating) return;
    if (!inputVal.trim()) return;
    executeCommand(inputVal);
    setInputVal('');
  };

  const handleChipClick = (e, cmd) => {
    e.preventDefault();
    e.stopPropagation();
    if (isSimulating) return;
    executeCommand(cmd);
    inputRef.current?.focus({ preventScroll: true });
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
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setHistory([]);
            }}
            title="Clear terminal"
            aria-label="Clear terminal"
          >
            <FaTrash size={11} />
          </button>
          <button
            type="button"
            className="term-action-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMaximized(!isMaximized);
            }}
            title={isMaximized ? "Restore" : "Maximize"}
            aria-label="Toggle size"
          >
            {isMaximized ? <FaCompressAlt size={11} /> : <FaExpandAlt size={11} />}
          </button>
        </div>
      </div>

      <div
        ref={terminalBodyRef}
        className="terminal-body"
        onClick={() => inputRef.current?.focus({ preventScroll: true })}
      >
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
      </div>

      <div className="terminal-quick-chips">
        <span className="chips-label">Quick run:</span>
        {['whoami', 'skills', 'projects', 'certs', 'pipeline', 'status', 'contact'].map((cmd) => (
          <button
            key={cmd}
            type="button"
            className="terminal-chip"
            onClick={(e) => handleChipClick(e, cmd)}
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
