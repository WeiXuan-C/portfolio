import React, { useState } from 'react';
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
  TerminalSquare,
  Phone
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { InteractiveIdentity } from './InteractiveIdentity';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenResume }) => {
  const [availabilityText, setAvailabilityText] = useState<string>(portfolioData.personal.availability);
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Decorative gradient glow orbs (Black & Gold luxury) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-amber-600/15 via-yellow-500/10 to-amber-800/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[320px] h-[260px] bg-yellow-600/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Typography & Storytelling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-start text-left space-y-6"
        >
          {/* Status Badge & Avatar */}
          <div className="flex items-center gap-3">
            {portfolioData.personal.avatar && (
              <img 
                src={portfolioData.personal.avatar} 
                alt={portfolioData.personal.name}
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full object-cover border-2 border-amber-400/90 shadow-[0_0_18px_rgba(245,158,11,0.35)]"
              />
            )}
            {/* Interactive Availability Pill (Click to cycle status) */}
            <motion.button
              id="hero-availability-pill"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                const statuses = [
                  "Undergraduate @ MMU Cyberjaya (Year 3 Sem 3) • Open to Collaboration",
                  "⚡ Architecting with Flutter, Next.js 15, Supabase & Gemma 3 VLM",
                  "🏆 Multi-Award Winning Developer (Inventx Gold & Hackathon Honors)"
                ];
                const currentIndex = statuses.indexOf(availabilityText);
                const nextIndex = (currentIndex + 1) % statuses.length;
                setAvailabilityText(statuses[nextIndex]);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0e0e16]/95 border border-amber-500/35 hover:border-amber-400/60 text-amber-300 text-xs font-mono shadow-[0_0_15px_rgba(245,158,11,0.1)] backdrop-blur-md cursor-pointer transition-colors"
              title="Click to switch status"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>{availabilityText}</span>
            </motion.button>
          </div>

          {/* Large Animated Name & Title */}
          <div className="space-y-2">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-neutral-100 tracking-tight leading-[1.05]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Hi, I'm <br />
              <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 bg-clip-text text-transparent font-serif tracking-normal">
                {portfolioData.personal.name}
              </span>
              {portfolioData.personal.chineseName && (
                <span className="text-2xl sm:text-3xl font-medium text-neutral-400 ml-3 font-sans">
                  ({portfolioData.personal.chineseName})
                </span>
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="text-base sm:text-lg font-medium text-neutral-300 tracking-tight flex items-center gap-2 flex-wrap"
            >
              <span className="text-amber-300 font-mono">MMU Cyberjaya Software Eng</span>
              <span className="text-neutral-700">/</span>
              <span className="text-yellow-400 font-mono">Year 3 Sem 3 (CGPA 3.90)</span>
              <span className="text-neutral-700">/</span>
              <span className="text-neutral-300">Multi-Award Winning Developer</span>
            </motion.p>
          </div>

          {/* Personal Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="space-y-2 max-w-xl"
          >
            <p className="text-xl sm:text-2xl font-semibold text-neutral-100 italic tracking-tight border-l-2 border-amber-400 pl-4 py-0.5">
              "{portfolioData.personal.tagline}"
            </p>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed pl-4">
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
              className="group flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-neutral-950 font-bold text-sm shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:brightness-110 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-cta-connect"
              onClick={() => onNavigate('contact')}
              className="group flex-1 sm:flex-initial flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0e0e16] border border-amber-500/30 hover:border-amber-400 text-neutral-200 hover:text-amber-300 font-semibold text-sm hover:bg-[#151520] transition-all cursor-pointer"
            >
              <span>Let's Connect</span>
            </button>

            <button
              id="hero-cta-resume"
              onClick={onOpenResume}
              className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-[#0e0e16] border border-amber-500/30 text-amber-300 hover:text-amber-200 hover:border-amber-400 text-sm font-medium transition-all cursor-pointer hover:shadow-[0_0_15px_rgba(245,158,11,0.2)]"
              title="Open ATS Resume Generator & PDF Export"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Resume & PDF</span>
            </button>
          </motion.div>

          {/* Social Links & Micro Specs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="flex items-center gap-4 pt-4 border-t border-amber-500/15 w-full"
          >
            <span className="text-xs font-mono text-neutral-500">Connect:</span>
            <div className="flex items-center gap-2">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                id="hero-social-github"
                className="p-2 rounded-lg bg-[#0e0e16] border border-amber-500/25 text-neutral-400 hover:text-amber-300 hover:border-amber-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                id="hero-social-linkedin"
                className="p-2 rounded-lg bg-[#0e0e16] border border-amber-500/25 text-neutral-400 hover:text-amber-300 hover:border-amber-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                id="hero-social-email"
                className="p-2 rounded-lg bg-[#0e0e16] border border-amber-500/25 text-neutral-400 hover:text-amber-300 hover:border-amber-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.twitter}
                target="_blank"
                rel="noreferrer"
                id="hero-social-twitter"
                className="p-2 rounded-lg bg-[#0e0e16] border border-amber-500/25 text-neutral-400 hover:text-amber-300 hover:border-amber-400 transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
              {portfolioData.personal.whatsapp && (
                <a
                  href={`https://wa.me/${portfolioData.personal.whatsapp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noreferrer"
                  id="hero-social-whatsapp"
                  className="p-2 rounded-lg bg-[#0e0e16] border border-amber-500/25 text-neutral-400 hover:text-amber-300 hover:border-amber-400 transition-colors"
                  aria-label="WhatsApp"
                  title={`WhatsApp: ${portfolioData.personal.phone}`}
                >
                  <Phone className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="ml-auto hidden sm:flex items-center gap-2 text-xs font-mono text-neutral-400">
              <TerminalSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>{portfolioData.personal.location}</span>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-neutral-500 hover:text-amber-400 transition-colors text-xs font-mono cursor-pointer"
        aria-label="Scroll to About Section"
      >
        <span>DISCOVER</span>
        <ChevronDown className="w-4 h-4 text-amber-400" />
      </motion.button>
    </section>
  );
};
