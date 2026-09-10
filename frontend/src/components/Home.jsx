import React, { useEffect } from 'react';
import { FaJenkins, FaDocker, FaAws, FaChartLine } from 'react-icons/fa';
import { SiTerraform, SiKubernetes } from 'react-icons/si';
import profilePhoto from '../assets/profile-photo1.png';
import '../styles/home.css';


const Home = () => {
  useEffect(() => {
    const hero = document.querySelector('.home-hero');
    if (!hero) return undefined;
    const moveScene = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      hero.style.setProperty('--pointer-x', `${x * 12}px`);
      hero.style.setProperty('--pointer-y', `${y * 12}px`);
    };
    window.addEventListener('pointermove', moveScene);
    return () => window.removeEventListener('pointermove', moveScene);
  }, []);

  return (
    <div className="home-shell">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="hero-grid" /><div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="home-hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Available for meaningful builds</p>
            <h1 id="home-title">I make complex systems<br /><em>feel inevitable.</em></h1>
            <p className="hero-description">DevOps-minded cloud engineer turning fragile releases into calm, observable infrastructure. I build the bridge between a good idea and the moment it reaches the world.</p>
            <div className="hero-actions"><a className="hero-button hero-button-primary" href="#projects">Explore my work <span aria-hidden="true">&#8599;</span></a><a className="hero-button hero-button-quiet" href="#contact">Start a conversation <span aria-hidden="true">&#8594;</span></a></div>
            <div className="hero-metrics" aria-label="Experience highlights"><div><strong>05</strong><span>core disciplines</span></div><div><strong>24/7</strong><span>systems mindset</span></div><div><strong>infinity</strong><span>curiosity</span></div></div>
          </div>
          <div className="hero-stage" aria-label="Yaseer's cloud engineering profile">
            <div className="stage-label stage-label-top">SYSTEM / 001</div><div className="orbit orbit-wide" /><div className="orbit orbit-tight" />
            <div className="orbit-node node-one"><FaDocker /><span>container</span></div><div className="orbit-node node-two"><FaAws /><span>cloud</span></div><div className="orbit-node node-three"><SiTerraform /><span>infra</span></div><div className="orbit-node node-four"><SiKubernetes /><span>kubernetes</span></div>
            <div
              className="profile-object"
              onMouseMove={(event) => {
                const bounds = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty('--spot-x', `${event.clientX - bounds.left}px`);
                event.currentTarget.style.setProperty('--spot-y', `${event.clientY - bounds.top}px`);
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.setProperty('--spot-x', '50%');
                event.currentTarget.style.setProperty('--spot-y', '50%');
              }}
            ><div className="profile-object-ring" /><img src={profilePhoto} alt="Mohamed Yaseer" /><div className="profile-object-shine" /></div>
            <div className="stage-caption"><span>MOHAMED YASEER</span><small>DEVOPS / CLOUD</small></div><div className="stage-label stage-label-bottom">BUILD / SHIP / OBSERVE</div>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span>Scroll to inspect</span><i aria-hidden="true">&#8595;</i></a>
      </section>
      <section className="capability-section" aria-labelledby="capability-title">
        <div className="capability-intro"><p className="eyebrow">The operating system</p><h2 id="capability-title">Quietly powerful<br /><em>under the hood.</em></h2><p>I am learning, shipping, and refining the small decisions that make digital products resilient.</p></div>
        <div className="capability-grid"><article className="capability-item"><FaJenkins /><span>01</span><h3>CI/CD pipelines</h3><p>Automated delivery that makes iteration feel natural.</p></article><article className="capability-item"><SiTerraform /><span>02</span><h3>Infrastructure as code</h3><p>Repeatable cloud foundations, versioned and legible.</p></article><article className="capability-item"><FaDocker /><span>03</span><h3>Containers</h3><p>Portable services that behave the same everywhere.</p></article><article className="capability-item"><FaChartLine /><span>04</span><h3>Observability</h3><p>Signals that turn “something is wrong” into clarity.</p></article></div>
      </section>
    </div>
  );
};

export default Home;