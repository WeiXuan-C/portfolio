import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { UiUxShowcase } from './components/UiUxShowcase';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { ResumeView } from './components/ResumeView';
import { RecruiterModeBanner } from './components/RecruiterModeBanner';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeMode, setIsResumeMode] = useState(false);
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  // Sync with URL hash / path for /resume
  useEffect(() => {
    const checkHashOrPath = () => {
      if (window.location.hash === '#resume' || window.location.pathname === '/resume') {
        setIsResumeMode(true);
      }
    };
    checkHashOrPath();
    window.addEventListener('hashchange', checkHashOrPath);
    return () => window.removeEventListener('hashchange', checkHashOrPath);
  }, []);

  // Update hash when switching resume mode
  const handleToggleResumeMode = (val: boolean) => {
    setIsResumeMode(val);
    if (val) {
      window.history.pushState(null, '', '#resume');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState(null, '', '#');
    }
  };

  // Scroll spy to update active section
  useEffect(() => {
    if (isResumeMode) return;

    const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'uiux', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isResumeMode]);

  const scrollToSection = (sectionId: string) => {
    if (isResumeMode) {
      setIsResumeMode(false);
      window.history.pushState(null, '', '#');
    }

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }, 50);
  };

  return (
    <div className={`relative min-h-screen bg-[#090b10] text-slate-100 ${isRecruiterMode ? 'recruiter-view' : ''}`}>
      {/* Custom interactive desktop cursor */}
      {!isRecruiterMode && <CustomCursor />}

      {/* Subtle particle tech canvas background */}
      {!isRecruiterMode && <ParticleBackground />}

      {/* Floating Header & Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        isResumeMode={isResumeMode}
        onToggleResumeMode={handleToggleResumeMode}
        isRecruiterMode={isRecruiterMode}
        onToggleRecruiterMode={() => setIsRecruiterMode(!isRecruiterMode)}
      />

      {/* Recruiter Mode notification banner when enabled */}
      {isRecruiterMode && !isResumeMode && (
        <div className="pt-20">
          <RecruiterModeBanner
            onDisable={() => setIsRecruiterMode(false)}
            onOpenResume={() => handleToggleResumeMode(true)}
          />
        </div>
      )}

      {/* Main View Area */}
      <main id="main-content">
        <AnimatePresence mode="wait">
          {isResumeMode ? (
            <motion.div
              key="resume-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <ResumeView onBackToPortfolio={() => handleToggleResumeMode(false)} />
            </motion.div>
          ) : (
            <motion.div
              key="portfolio-view"
              id="portfolio-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Hero 
                onNavigate={scrollToSection} 
                onOpenResume={() => handleToggleResumeMode(true)} 
              />
              <About onNavigate={scrollToSection} />
              <SkillsSection />
              <FeaturedProjects />
              <ExperienceTimeline />
              <UiUxShowcase />
              <InteractiveTerminal onOpenResume={() => handleToggleResumeMode(true)} />
              <GithubSection />
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
