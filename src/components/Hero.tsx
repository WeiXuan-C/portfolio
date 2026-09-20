import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  FileText, 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Sparkles, 
  ChevronDown, 
  Code,
  Layers,
  TerminalSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { InteractiveIdentity } from './InteractiveIdentity';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Decorative gradient glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & Storytelling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1422]/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono shadow-lg shadow-emerald-500/5 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for Full-Stack & Engineering Roles</span>
          </motion.div>

          {/* Large Animated Name & Title */}
          <div className="space-y-2">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                {portfolioData.personal.name}.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight flex items-center gap-2 flex-wrap"
            >
              <span className="text-emerald-400 font-mono">IT Student</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-200">Software Developer</span>
              <span className="text-slate-600">/</span>
              <span className="text-cyan-400 font-mono">UI/UX Enthusiast</span>
            </motion.p>
          </div>

          {/* Personal Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="space-y-2 max-w-xl"
          >
            <p className="text-xl sm:text-2xl font-semibold text-slate-100 italic tracking-tight border-l-2 border-emerald-400 pl-4 py-0.5">
              "{portfolioData.personal.tagline}"
            </p>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed pl-4">
              {portfolioData.personal.statement}
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto"
          >
            <button
              id="hero-cta-projects"
              onClick={() => onNavigate('projects')}
              className="group flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-sm shadow-xl shadow-emerald-500/25 hover:brightness-110 hover:shadow-emerald-500/40 transition-all cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-connect"
              onClick={() => onNavigate('contact')}
              className="group flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0e1320] border border-slate-700/80 hover:border-emerald-500/50 text-slate-200 font-semibold text-sm hover:bg-slate-800/80 transition-all cursor-pointer"
            >
              <span>Let's Connect</span>
            </button>

            <button
              id="hero-cta-resume"
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-emerald-300 hover:border-emerald-500/40 text-sm font-medium transition-all"
              title="Open ATS Resume Generator & PDF Export"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>Resume & PDF</span>
            </button>
          </motion.div>

          {/* Social Links & Micro Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full"
          >
            <span className="text-xs font-mono text-slate-500">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                id="hero-social-email"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.twitter}
                target="_blank"
                rel="noreferrer"
                id="hero-social-twitter"
                className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/40 transition-colors"
                aria-label="Twitter / X Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>

            <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400">
              <TerminalSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Singapore / Global Remote</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Interactive Developer Identity Workstation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 w-full"
        >
          <InteractiveIdentity />
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={() => onNavigate('about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-500 hover:text-emerald-400 transition-colors text-xs font-mono"
        aria-label="Scroll to About Section"
      >
        <span>DISCOVER</span>
        <ChevronDown className="w-4 h-4" />
      </motion.button>
    </section>
  );
};
