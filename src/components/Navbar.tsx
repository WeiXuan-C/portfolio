import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Briefcase, 
  Menu, 
  X, 
  Terminal, 
  Sparkles,
  ArrowUpRight,
  UserCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isResumeMode: boolean;
  onToggleResumeMode: (value: boolean) => void;
  isRecruiterMode: boolean;
  onToggleRecruiterMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  isResumeMode,
  onToggleResumeMode,
  isRecruiterMode,
  onToggleRecruiterMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'honors', label: 'Honors' },
    { id: 'experience', label: 'Experience' },
    { id: 'uiux', label: 'UI/UX' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 py-4 transition-all duration-300 pointer-events-none no-print">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Brand Identity / Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => {
            if (isResumeMode) onToggleResumeMode(false);
            onNavigate('hero');
          }}
          className="pointer-events-auto group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0a0a0e]/90 border border-amber-500/25 backdrop-blur-md hover:border-amber-400/60 transition-all text-left shadow-lg shadow-black/60"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-400 to-amber-600 p-[1.5px] shadow-inner group-hover:scale-105 transition-transform overflow-hidden">
            <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden">
              {portfolioData.personal.avatar ? (
                <img 
                  src={portfolioData.personal.avatar} 
                  alt={portfolioData.personal.name} 
                  className="w-full h-full object-cover" 
                />
              ) : (
                <span className="text-amber-300 font-bold text-xs">WX</span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-neutral-100 tracking-tight flex items-center gap-1.5">
              {portfolioData.personal.name}
              <span className="text-[11px] text-amber-300 font-normal">({portfolioData.personal.chineseName})</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-neutral-400 font-mono">
              MMU Cyberjaya • Software Eng
            </span>
          </div>
        </button>

        {/* Center: Desktop Nav Links (Hidden in Resume Mode) */}
        {!isResumeMode && (
          <nav className="hidden md:flex pointer-events-auto items-center gap-1 px-3 py-1.5 rounded-full bg-[#0a0a0e]/90 border border-amber-500/25 backdrop-blur-xl shadow-xl shadow-black/70">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => onNavigate(link.id)}
                  className={`relative px-3.5 py-1 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'text-amber-300 font-semibold'
                      : 'text-neutral-400 hover:text-neutral-200 hover:bg-[#14141c]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-amber-500/15 border border-amber-500/40 rounded-full shadow-[0_0_12px_rgba(245,158,11,0.2)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right: Actions (Resume Generator, Recruiter Mode, Mobile Menu) */}
        <div className="pointer-events-auto flex items-center gap-2">
          {/* Recruiter Mode Toggle */}
          <button
            id="nav-recruiter-mode-toggle"
            onClick={onToggleRecruiterMode}
            title="Toggle Recruiter Scanning Mode (low animation, direct summary)"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-all shadow-md cursor-pointer ${
              isRecruiterMode
                ? 'bg-amber-500/25 text-amber-300 border-amber-400 shadow-amber-500/20'
                : 'bg-[#0a0a0e]/90 text-neutral-400 border-amber-500/20 hover:text-neutral-200 hover:border-amber-500/40'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>{isRecruiterMode ? 'Recruiter Mode: ON' : 'Recruiter Mode'}</span>
          </button>

          {/* View Resume / Back to Portfolio Toggle Button */}
          <button
            id="nav-resume-mode-btn"
            onClick={() => onToggleResumeMode(!isResumeMode)}
            className={`flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full transition-all shadow-lg cursor-pointer ${
              isResumeMode
                ? 'bg-neutral-800 text-neutral-200 border border-neutral-700 hover:bg-neutral-700'
                : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(245,158,11,0.45)]'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{isResumeMode ? '← Back to Portfolio' : 'View Resume / PDF'}</span>
          </button>

          {/* Mobile hamburger */}
          {!isResumeMode && (
            <button
              id="nav-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[#0a0a0e]/95 border border-amber-500/30 text-neutral-300 hover:text-amber-300 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-amber-400" /> : <Menu className="w-4 h-4 text-amber-400" />}
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && !isResumeMode && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pointer-events-auto mt-2 p-4 rounded-2xl bg-[#0a0a0e]/95 border border-amber-500/30 backdrop-blur-2xl shadow-2xl space-y-2"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  id={`mobile-nav-${link.id}`}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-2 text-xs font-medium rounded-xl text-left transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                      : 'text-neutral-300 hover:bg-neutral-800/60'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-2 border-t border-amber-500/20 flex items-center justify-between gap-2">
              <button
                onClick={() => {
                  onToggleRecruiterMode();
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium rounded-xl bg-neutral-900 border border-amber-500/30 text-amber-300"
              >
                <UserCheck className="w-3.5 h-3.5" />
                <span>{isRecruiterMode ? 'Recruiter ON' : 'Recruiter Mode'}</span>
              </button>
              <button
                onClick={() => {
                  onToggleResumeMode(true);
                  setMobileMenuOpen(false);
                }}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-neutral-950"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume / PDF</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
