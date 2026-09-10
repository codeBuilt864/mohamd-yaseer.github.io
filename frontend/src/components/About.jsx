import React, { useEffect, useRef, useState } from 'react';
import { FaArrowUpRightFromSquare, FaCodeBranch, FaTerminal } from 'react-icons/fa6';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import '../styles/about.css';

const About = () => {
  const aboutSectionRef = useRef(null);
  const touchStartY = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(1);
  const slides = [
    { command: '$ whoami', title: <>Builder of<br /><strong>better feedback loops.</strong></>, copy: 'I started with Linux fundamentals and found my place where development meets operations.', icon: <FaTerminal /> },
    { command: '$ origin --show', title: <>Curiosity became<br /><strong>a practical craft.</strong></>, copy: 'Personal projects and focused learning turned questions into reliable, repeatable systems.', icon: <FaCodeBranch /> },
    { command: '$ values --list', title: <>Make complexity<br /><strong>easier to trust.</strong></>, copy: 'I care about useful feedback, clear ownership, and automation that removes friction.', icon: <FaTerminal /> },
    { command: '$ stack --focus', title: <>Infrastructure<br /><strong>in motion.</strong></>, copy: 'Cloud platforms, containers, and infrastructure as code are where I do my deepest learning.', icon: <SiTerraform /> },
    { command: '$ next --run', title: <>Keep learning.<br /><strong>Keep shipping.</strong></>, copy: 'The next step is deeper Kubernetes, Terraform, and observability work shared with the community.', icon: <SiKubernetes /> }
  ];

  const changeSlide = (direction) => {
    setSlideDirection(direction);
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    const section = aboutSectionRef.current;
    const card = section?.querySelector('.about-card');
    if (!section || !card) return undefined;

    let frameId;
    const updateParallax = () => {
      frameId = undefined;
      const bounds = section.getBoundingClientRect();
      const progress = (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height);
      const offset = Math.max(-28, Math.min(28, (progress - 0.5) * 56));
      card.style.setProperty('--about-scroll-y', `${offset}px`);
    };
    const handleScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const moveCard = (event) => {
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty('--about-rotate-x', `${y * -7}deg`);
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    card.style.setProperty('--about-rotate-y', `${x * 9}deg`);
    card.style.setProperty('--about-spot-x', `${event.clientX - bounds.left}px`);
    card.style.setProperty('--about-spot-y', `${event.clientY - bounds.top}px`);

  };

  const resetCard = (event) => {
    event.currentTarget.style.setProperty('--about-rotate-x', '0deg');
    event.currentTarget.style.setProperty('--about-rotate-y', '0deg');
    event.currentTarget.style.setProperty('--about-spot-x', '50%');
    event.currentTarget.style.setProperty('--about-spot-y', '50%');
    touchStartY.current = null;
  };

  const handleWheel = (event) => {
    if (Math.abs(event.deltaY) < 10) return;
    event.preventDefault();
    changeSlide(event.deltaY > 0 ? 1 : -1);
  };

  const handleTouchStart = (event) => {
    touchStartY.current = event.touches[0].clientY;
  };

  const handleTouchEnd = (event) => {
    if (touchStartY.current === null) return;
    const distance = touchStartY.current - event.changedTouches[0].clientY;
    if (Math.abs(distance) > 35) changeSlide(distance > 0 ? 1 : -1);
    touchStartY.current = null;
  };

  return (
    <section ref={aboutSectionRef} className="about-section" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-heading">
          <p className="about-kicker"><span /> The person behind the pipeline</p>
          <h2 id="about-title">Curious by<br /><em>default.</em></h2>
          <p className="about-intro">I am Mohamed Yaseer, a junior DevOps engineer learning to turn complicated infrastructure into something teams can trust.</p>
          <a className="about-link" href="https://linkedin.com/in/mhdyaseer" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <FaArrowUpRightFromSquare /></a>
        </div>

        <div className="about-card-wrap">
          <div className="about-card" data-slide={String(activeSlide + 1).padStart(2, '0')} onMouseMove={moveCard} onMouseLeave={resetCard} onWheel={handleWheel} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="about-card-top"><span>YSR / PROFILE</span><span>STATUS: LEARNING</span></div>
            <div className={`about-card-main ${slideDirection > 0 ? 'slide-forward' : 'slide-back'}`} key={activeSlide}>
              <div className="about-card-icon">{slides[activeSlide].icon}</div>
              <p className="about-card-command">{slides[activeSlide].command}</p>
              <h3>{slides[activeSlide].title}</h3>
              <p className="about-card-copy">{slides[activeSlide].copy}</p>
            </div>
            <div className="about-card-bottom"><button type="button" className="about-slide-button" onClick={() => changeSlide(-1)} aria-label="Previous slide">&#8592;</button><span>{String(activeSlide + 1).padStart(2, '0')} / 05</span><span className="about-card-line" /><span className="about-card-hint">SCROLL TO EXPLORE</span><button type="button" className="about-slide-button" onClick={() => changeSlide(1)} aria-label="Next slide">&#8594;</button></div>
          </div>
          <div className="about-orbit-mark about-orbit-mark-one"><SiTerraform /></div>
          <div className="about-orbit-mark about-orbit-mark-two"><SiKubernetes /></div>
        </div>

        <div className="about-details">
          <article className="about-detail-row"><span className="about-detail-index">01</span><div><h3>My journey</h3><p>Through personal projects, online courses, and challenges like #100DaysOfDevOps and KodeKloud, I have built practical experience in deployment automation and infrastructure.</p></div><FaCodeBranch /></article>
          <article className="about-detail-row"><span className="about-detail-index">02</span><div><h3>My philosophy</h3><p>DevOps is culture before tools. I care about reducing silos, creating useful feedback, and making automation remove friction rather than hide complexity.</p></div><FaTerminal /></article>
          <article className="about-detail-row"><span className="about-detail-index">03</span><div><h3>What is next</h3><p>Right now I am deepening my Kubernetes, Terraform, and observability skills while sharing what I learn with the community.</p></div><SiKubernetes /></article>
        </div>
      </div>
    </section>
  );
};

export default About;