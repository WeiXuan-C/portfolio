import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Compass, 
  Heart, 
  Sparkles, 
  Award, 
  ChevronRight,
  Code2,
  ShieldCheck,
  Cpu,
  Trophy,
  Copy,
  Check,
  Zap,
  Terminal
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Counter component that animates from 0 to value when visible in viewport
const AnimatedCounter: React.FC<{ target: number; suffix?: string; duration?: number }> = ({ 
  target, 
  suffix = '', 
  duration = 1.6 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * target));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

// Creative Interactive Engineering Philosophy & Craft Showcase
const InteractiveCraftShowcase: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'resilience' | 'applied-ai' | 'hackathon'>('resilience');
  const [copied, setCopied] = useState(false);
  const [testedCount, setTestedCount] = useState(0);

  const pillars = [
    {
      id: 'resilience' as const,
      label: 'System Verification',
      shortLabel: 'Reliability',
      icon: ShieldCheck,
      badge: 'Enterprise QA & Testing',
      quote: 'Software reliability is not tested into existence; it is architected from day one through disciplined test assertions, edge-case coverage, and compliance standards.',
      focus: 'Zero Unhandled Regressions',
      detail: 'Rigorous SIT/UAT validation across enterprise POS, LHDN-compliant tax validation, and cross-platform APIs.'
    },
    {
      id: 'applied-ai' as const,
      label: 'Applied AI & Ergonomics',
      shortLabel: 'Applied AI',
      icon: Cpu,
      badge: 'Gemma 3 VLM & Hybrid RAG',
      quote: 'AI should empower without friction. Whether detecting hazards on live roads or querying video lectures, algorithms must serve human ergonomics seamlessly.',
      focus: 'Sub-Second Edge Inference',
      detail: 'Multi-modal vision understanding with Gemma 3 4B on mobile and dual-embedding vector retrieval on web.'
    },
    {
      id: 'hackathon' as const,
      label: 'Rapid Prototyping',
      shortLabel: 'Hackathons',
      icon: Trophy,
      badge: 'Multi-Award Winner',
      quote: 'Competitive hackathons prove our capability to translate high-level architectural ideas into battle-tested, award-winning production MVPs under tight deadlines.',
      focus: 'Rapid Production Execution',
      detail: 'Recognized with international gold and national awards across prestigious innovation arenas.'
    }
  ];

  const current = pillars.find(p => p.id === activePillar) || pillars[0];
  const Icon = current.icon;

  const handleCopyQuote = () => {
    navigator.clipboard.writeText(`"${current.quote}" — Chong Wei Xuan`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateCheck = () => {
    setTestedCount(c => c + 1);
  };

  return (
    <div className="p-6 rounded-3xl bg-[#0c0c13] border border-amber-500/25 space-y-4 shadow-xl relative overflow-hidden">
      {/* Subtle ambient gold radial background */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Interactive Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-2 pb-1 border-b border-amber-500/15">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#07070b] border border-amber-500/20">
          {pillars.map((p) => {
            const PIcon = p.icon;
            const isActive = activePillar === p.id;
            return (
              <button
                key={p.id}
                id={`craft-tab-${p.id}`}
                onClick={() => setActivePillar(p.id)}
                className={`relative px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive ? 'text-amber-300' : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCraftPill"
                    className="absolute inset-0 bg-amber-500/20 border border-amber-500/40 rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
                <PIcon className="w-3.5 h-3.5 relative z-10" />
                <span className="relative z-10 hidden sm:inline">{p.label}</span>
                <span className="relative z-10 sm:hidden">{p.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Minimalist Multi-Award Badge */}
        <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400/90 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>Award-Winning Engineering</span>
        </div>
      </div>

      {/* Dynamic Animated Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="space-y-3 pt-1"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-sm">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Pillar // {current.label}</span>
                <div className="text-xs font-semibold text-neutral-200">{current.badge}</div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                id="copy-quote-btn"
                onClick={handleCopyQuote}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#14141d] border border-amber-500/20 hover:border-amber-400/40 text-[11px] font-mono text-neutral-300 hover:text-amber-300 transition-colors cursor-pointer"
                title="Copy statement to clipboard"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-amber-400" />}
                <span>{copied ? 'Copied' : 'Quote'}</span>
              </button>

              <button
                id="simulate-verification-btn"
                onClick={handleSimulateCheck}
                className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-[11px] font-mono text-amber-300 transition-colors cursor-pointer"
                title="Interactive verification ping"
              >
                <Zap className="w-3 h-3 text-amber-400" />
                <span>Verify ({testedCount})</span>
              </button>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed border-l-2 border-amber-400/80 pl-3 py-0.5">
            "{current.quote}"
          </p>

          <div className="flex items-center justify-between pt-2 text-[11px] font-mono text-neutral-400 border-t border-amber-500/10">
            <span className="text-amber-300/90 font-medium flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
              Focus: {current.focus}
            </span>
            <span className="text-neutral-500 hidden md:inline">{current.detail}</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const About: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#0b0b0f] to-[#070709]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>ACADEMIC & ENGINEERING PROFILE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">
              Bridging Rigorous Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                with User-Centered Architecture.
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
            Bachelor of Computer Science (SE) student at MMU Cyberjaya (CGPA 3.90).
            Specialized in system testing, documentation, responsive web & mobile apps.
          </p>
        </div>

        {/* Animated Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {portfolioData.stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 rounded-2xl bg-[#0d0d14]/90 border border-amber-500/20 hover:border-amber-500/40 transition-colors shadow-lg group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors" />
              <div className="text-3xl sm:text-4xl font-extrabold text-neutral-100 font-display mb-1 flex items-baseline gap-0.5">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-semibold text-amber-300 font-mono mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-400 leading-normal">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0b0b10] border border-amber-500/20 space-y-5 leading-relaxed text-neutral-300 shadow-xl">
              <h3 className="text-xl font-bold text-neutral-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
                The Story Behind the Code
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                I am a Software Engineering undergraduate at <span className="text-amber-300 font-semibold">Multimedia University (MMU) Cyberjaya</span>, currently in my 3rd year 3rd semester maintaining an exceptional CGPA of <span className="text-amber-400 font-mono font-semibold">3.90 / 4.00</span> (following a <span className="text-amber-300 font-mono font-semibold">3.93</span> in Diploma in IT). I combine high academic standards with deep hands-on testing, documentation, and web/mobile development.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                During my software engineering internship at <span className="text-yellow-300 font-semibold">Moabi Enterprise</span>, I took ownership of system integration testing (SIT), user acceptance testing (UAT), and comprehensive technical documentation across three mission-critical modules: Food POS, Malaysia LHDN-compliant e-Invoicing, and Project Management.
              </p>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Beyond academic coursework and enterprise verification, I actively build in competitive hackathons and innovation challenges, where our software projects have garnered multiple international and national awards. For me, hackathons serve as the ultimate proving ground to pressure-test system resilience, sculpt intuitive ergonomics under 48-hour sprints, and turn ambitious architectural ideas into working production software.
              </p>

              <div className="pt-4 border-t border-amber-500/15 flex flex-wrap gap-2">
                {['Bachelor of CS (SE)', 'CGPA 3.90', 'Flutter', 'Next.js 15 & React 19', 'Supabase & PostgreSQL', 'Gemma 3 VLM', 'QA Testing & SIT/UAT', 'Technical Documentation'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-[#12121a] border border-amber-500/25 text-xs font-mono text-amber-300 hover:border-amber-400/50 hover:bg-amber-500/10 transition-colors"
                  >
                    #{badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Creative Interactive Engineering Craft & Philosophy Showcase */}
            <InteractiveCraftShowcase />
          </div>

          {/* Right Column: Structured Highlights (Education, Career Goals, Traits) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#0b0b10] border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-2.5 text-neutral-100 font-bold text-sm">
                <GraduationCap className="w-5 h-5 text-amber-400" />
                <span>Education & Academic Standing</span>
              </div>
              <div className="space-y-4">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-xl bg-[#121218] border border-amber-500/20 space-y-2">
                    <div className="text-sm font-semibold text-neutral-100">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-neutral-400 flex items-center justify-between">
                      <span>{edu.institution}</span>
                      <span className="font-mono text-amber-400 font-medium">{edu.period}</span>
                    </div>
                    <div className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30 inline-block font-semibold">
                      {edu.gpa}
                    </div>
                    <ul className="text-[11px] text-neutral-400 space-y-1 pt-1">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Direction & Core Pillars */}
            <div className="p-6 rounded-2xl bg-[#0b0b10] border border-amber-500/20 space-y-4">
              <div className="flex items-center gap-2.5 text-neutral-100 font-bold text-sm">
                <Compass className="w-5 h-5 text-yellow-400" />
                <span>Engineering Focus & Disciplines</span>
              </div>
              <div className="space-y-3 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-200">Quality Assurance & SIT/UAT:</span>
                    <p className="text-neutral-400 mt-0.5">Experienced in comprehensive test suite authoring, edge-case validation, bug triage, and enterprise release readiness.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-200">Technical Documentation:</span>
                    <p className="text-neutral-400 mt-0.5">Authoring clear API specs, system architecture diagrams, user manuals, and compliance documentation (e.g. LHDN e-Invoicing).</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-amber-300 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-neutral-200">Web & Mobile Application Development:</span>
                    <p className="text-neutral-400 mt-0.5">Building performant, real-time web applications with Next.js 15, React 19, Supabase, and cross-platform mobile apps with Flutter.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Interests & Hobbies */}
            <div className="p-6 rounded-2xl bg-[#0b0b10] border border-amber-500/20 space-y-3">
              <div className="flex items-center gap-2.5 text-neutral-100 font-bold text-sm">
                <Heart className="w-5 h-5 text-rose-400" />
                <span>Interests Beyond Academics</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-[#121218] text-neutral-300 border border-amber-500/20 font-mono"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
