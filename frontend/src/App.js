import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import InteractiveTerminal from './components/InteractiveTerminal';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import ScrollReveal from './components/ScrollReveal';
import { ThemeProvider } from './context/ThemeContext';

// Import CSS System
import './styles/index.css';
import './styles/themes.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* Custom Glowing Cursor */}
        <CustomCursor />

        {/* Global Scroll Observer */}
        <ScrollReveal />

        {/* Sticky Glassmorphic Header */}
        <Header />

        {/* Main Content Sections */}
        <main id="main-content">
          <section id="home" aria-label="Home section">
            <Home />
          </section>

          <section id="about" aria-label="About section">
            <About />
          </section>

          <section id="skills" aria-label="Skills section">
            <Skills />
          </section>

          <section id="projects" aria-label="Projects section">
            <Projects />
          </section>

          {/* Interactive DevOps Cockpit Section */}
          <section id="cockpit" className="cockpit-section" aria-label="Interactive Terminal section">
            <div className="section-container">
              <div className="section-header-centered reveal">
                <div className="section-badge">
                  <span className="badge-dot" />
                  <span>INTERACTIVE CONTROL PLANE</span>
                </div>
                <h2 className="section-title-large">
                  DevOps Cockpit & <span className="gradient-text-cyan">Cloud Console.</span>
                </h2>
                <p className="section-subtitle">
                  Interact with the simulated AWS control plane. Type commands like{' '}
                  <code>whoami</code>, <code>skills</code>, <code>projects</code>, or{' '}
                  <code>pipeline</code> to inspect real telemetry.
                </p>
              </div>

              <div className="reveal">
                <InteractiveTerminal />
              </div>
            </div>
          </section>

          <section id="certifications" aria-label="Certifications section">
            <Certifications />
          </section>

          <section id="resume" aria-label="Resume section">
            <Resume />
          </section>

          <section id="contact" aria-label="Contact section">
            <Contact />
          </section>
        </main>

        {/* Comprehensive Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
