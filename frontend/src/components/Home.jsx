import React, { useEffect, useRef, useState } from 'react';
import { FaAws, FaDocker, FaJenkins, FaArrowRight, FaDownload, FaTerminal, FaCheckCircle, FaShieldAlt } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiArgo, SiPrometheus, SiGrafana } from 'react-icons/si';
import profilePhoto from '../assets/profile-photo1.png';
import '../styles/home.css';

const PIPELINE_STAGES = [
  { id: 'code', title: 'Source & GitOps', icon: <FaJenkins />, desc: 'Semantic versioning & automated trigger via GitHub webhooks', stat: 'Trunk-based' },
  { id: 'build', title: 'Containerization', icon: <FaDocker />, desc: 'Multi-stage lean Docker images cached on AWS ECR', stat: 'Cached layers' },
  { id: 'security', title: 'DevSecOps Audit', icon: <FaShieldAlt />, desc: 'Trivy CVE checks & SonarQube quality gates', stat: '0 High CVEs' },
  { id: 'deploy', title: 'EKS Kubernetes', icon: <SiKubernetes />, desc: 'Declarative ArgoCD GitOps sync to Amazon EKS cluster', stat: 'Zero-Downtime' },
  { id: 'observe', title: 'Observability', icon: <SiGrafana />, desc: 'Prometheus metrics scraping & Grafana telemetry alerts', stat: 'Sub-second SLIs' },
];

const Home = () => {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const cardRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  // Live time ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' IST'
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Auto-cycle pipeline visualizer every 3.5s
  useEffect(() => {
    const stageTimer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 3500);
    return () => clearInterval(stageTimer);
  }, []);

  // Interactive Particle Constellation Mesh Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(65, Math.floor(window.innerWidth / 24));
    const particles = [];
    const mouse = { x: -1000, y: -1000, radius: 140 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        baseColor: Math.random() > 0.4 ? 'rgba(0, 240, 255,' : 'rgba(139, 92, 246,',
      });
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse gravity / repel
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x -= (dx / dist) * force * 1.5;
          p.y -= (dy / dist) * force * 1.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.baseColor} 0.6)`;
        ctx.fill();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 110) {
            const opacity = (1 - distance / 110) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 240, 255, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 3D Tilt calculation for the hero profile card
  const handleCardMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / (rect.height / 2)) * 12;
    const rotateY = (x / (rect.width / 2)) * 12;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    card.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  const handleCardMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const resumeDownloadUrl = `${process.env.PUBLIC_URL || ''}/Mohamed_Yaaseer_CV.pdf`;

  return (
    <div className="home-shell" ref={heroRef}>
      <canvas ref={canvasRef} className="hero-canvas-mesh" />

      {/* Cyber Glow Accents */}
      <div className="hero-cyber-glow glow-cyan" />
      <div className="hero-cyber-glow glow-violet" />

      {/* Live System Status HUD */}
      <div className="hero-system-hud">
        <div className="hud-badge-group">
          <div className="hud-pill live-pill">
            <span className="live-pulse-dot" />
            <span className="hud-label">CLUSTER US-EAST-1</span>
            <span className="hud-val">HEALTHY</span>
          </div>
          <div className="hud-pill d-none-mobile">
            <span className="hud-label">UPTIME</span>
            <span className="hud-val">99.99%</span>
          </div>
          <div className="hud-pill d-none-mobile">
            <span className="hud-label">LATENCY</span>
            <span className="hud-val">18ms</span>
          </div>
          <div className="hud-pill">
            <span className="hud-label">LOCAL CLOCK</span>
            <span className="hud-val">{currentTime || 'LIVE'}</span>
          </div>
        </div>
        <div className="hud-status-open">
          <FaCheckCircle className="check-icon" />
          <span>OPEN TO CLOUD & DEVOPS ROLES</span>
        </div>
      </div>

      <div className="hero-main-container">
        {/* Left Column: Authoritative Copy & CTAs */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="eyebrow-symbol">&gt;&gt;</span>
            <span>MOHAMED YASEER // CLOUD SYSTEMS & DEVOPS</span>
          </div>

          <h1 className="hero-headline">
            Architecting <span className="gradient-text-cyan">resilient cloud foundations</span> &{' '}
            <span className="gradient-text-violet">autonomous pipelines.</span>
          </h1>

          <p className="hero-summary">
            DevOps & Cloud Engineer specializing in Amazon EKS Kubernetes orchestration,
            production-grade Terraform IaC, DevSecOps automation, and end-to-end observability.
            Turning fragile release cycles into calm, repeatable velocity.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="cyber-btn cyber-btn-primary">
              <span>View Architecture Builds</span>
              <FaArrowRight className="btn-icon" />
            </a>

            <a
              href={resumeDownloadUrl}
              download="CV_Rahmaththulla_Mohamed_Yaaseer.pdf"
              className="cyber-btn cyber-btn-secondary"
            >
              <FaDownload className="btn-icon" />
              <span>Download CV</span>
            </a>

            <a href="#cockpit" className="cyber-btn cyber-btn-outline">
              <FaTerminal className="btn-icon" />
              <span>Interactive Console</span>
            </a>
          </div>

          {/* Key Metrics Strip */}
          <div className="hero-metrics-strip">
            <div className="metric-box">
              <span className="metric-num">AWS SAA</span>
              <span className="metric-desc">Solutions Architect Associate</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-num">100%</span>
              <span className="metric-desc">Infrastructure as Code</span>
            </div>
            <div className="metric-divider" />
            <div className="metric-box">
              <span className="metric-num">Zero</span>
              <span className="metric-desc">Downtime GitOps Target</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Holographic Profile Matrix */}
        <div className="hero-visual-col">
          <div
            ref={cardRef}
            className="hologram-card"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="hologram-frame">
              <div className="hologram-border-scanner" />
              <div className="hologram-image-wrap">
                <img
                  src={profilePhoto}
                  alt="Mohamed Yaseer - DevOps Engineer"
                  className="profile-img"
                />
                <div className="hologram-glare" />
                <div className="hologram-scanline" />
              </div>

              {/* Holographic Header & Footer Overlays */}
              <div className="card-overlay-header">
                <span className="sys-id">SYS_ID // YSR-001</span>
                <span className="sys-status">STATUS: ONLINE</span>
              </div>

              <div className="card-overlay-footer">
                <div className="user-meta">
                  <h3>MOHAMED YASEER</h3>
                  <p>AWS Certified • Kubernetes • Terraform</p>
                </div>
              </div>
            </div>

            {/* Orbiting Orbital Pills */}
            <div className="orbit-pill pill-aws" title="Amazon Web Services">
              <FaAws className="pill-icon" />
              <span>AWS EKS / VPC</span>
            </div>
            <div className="orbit-pill pill-k8s" title="Kubernetes">
              <SiKubernetes className="pill-icon" />
              <span>K8s Cluster</span>
            </div>
            <div className="orbit-pill pill-tf" title="Terraform">
              <SiTerraform className="pill-icon" />
              <span>Terraform IaC</span>
            </div>
            <div className="orbit-pill pill-argo" title="ArgoCD GitOps">
              <SiArgo className="pill-icon" />
              <span>ArgoCD GitOps</span>
            </div>
            <div className="orbit-pill pill-prom" title="Prometheus / Grafana">
              <SiPrometheus className="pill-icon" />
              <span>Observability</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Live CI/CD Pipeline Simulator Ribbon */}
      <div className="pipeline-ribbon-section">
        <div className="pipeline-ribbon-inner">
          <div className="pipeline-header-row">
            <div className="pipeline-tag">
              <span className="pulse-dot-cyan" />
              <span>DEPLOYMENT ARCHITECTURE // INTERACTIVE TELEMETRY</span>
            </div>
            <span className="pipeline-hint">Hover stages to inspect deployment telemetry</span>
          </div>

          <div className="pipeline-stages-track">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isActive = idx === activeStage;
              const isPast = idx < activeStage;
              return (
                <div
                  key={stage.id}
                  className={`pipeline-stage-card ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                  onMouseEnter={() => setActiveStage(idx)}
                >
                  <div className="stage-top">
                    <span className="stage-index">0{idx + 1}</span>
                    <span className="stage-icon">{stage.icon}</span>
                  </div>
                  <h4 className="stage-title">{stage.title}</h4>
                  <p className="stage-desc">{stage.desc}</p>
                  <div className="stage-stat-badge">
                    <span className="stat-indicator" />
                    <span>{stage.stat}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
