import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Compass, 
  Heart, 
  Sparkles, 
  Award, 
  ChevronRight,
  Code2
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
      // Ease out quartic
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

export const About: React.FC<{ onNavigate: (section: string) => void }> = ({ onNavigate }) => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>WHO I AM & WHAT I STAND FOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              Bridging Rigorous Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                with Human-Centered UI/UX.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono leading-relaxed">
            I approach software as both a science of resilience and an art of perception.
            Every pixel and database query is intentionally crafted.
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
              className="p-6 rounded-2xl bg-[#0d121e]/90 border border-slate-800/90 hover:border-emerald-500/40 transition-colors shadow-lg group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-100 font-display mb-1 flex items-baseline gap-0.5">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-semibold text-emerald-400 font-mono mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400 leading-normal">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0c101c]/80 border border-slate-800/90 space-y-5 leading-relaxed text-slate-300">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
                The Story Behind the Code
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                I am a Software Developer and Computer Science undergraduate at <span className="text-emerald-300 font-semibold">Multimedia University (MMU)</span>. Having achieved an academic CGPA of <span className="text-emerald-400 font-mono font-semibold">3.93 / 4.00</span> in my Diploma in Information Technology, I approach engineering with both scientific rigor and a relentless drive for human-centered digital experiences.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                During my software engineering internship at <span className="text-cyan-300 font-semibold">Moabi PLT</span>, I contributed to three enterprise production systems — Food POS, Malaysia LHDN-compliant e-Invoicing, and Project Management. I streamlined checkout workflows, redesigned user validation journeys, and collaborated closely across engineering, QA, and business stakeholders.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                In competitive arenas, I thrive on turning complex AI breakthroughs into intuitive real-world products. As Team Leader, I guided <span className="text-emerald-300 font-semibold">Pavra</span> to the Winner title at <span className="text-slate-100 font-semibold">UNIMAS 8.0</span> using Google Gemma 3 4B vision-language models for road damage classification. In <span className="text-slate-100 font-semibold">CodeNection 2025</span>, our team captured another championship with <span className="text-cyan-300 font-semibold">Studify</span>, engineering dual-embedding semantic search (E5-Small + BGE-M3) and Whisper video comprehension.
              </p>

              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {['Flutter & Dart', 'Next.js 15 & React 19', 'Supabase & PostgreSQL', 'Gemma 3 VLM', 'Dual-Embedding RAG', 'Figma & UI/UX', 'Moabi Enterprise Systems'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700/60 text-xs font-mono text-slate-300"
                  >
                    #{badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/20 to-slate-900/60 border border-emerald-500/20 text-slate-200 flex items-start gap-4">
              <Award className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-sm text-emerald-300 mb-1">
                  2x National Hackathon Champion (UNIMAS 8.0 & CodeNection 2025)
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  Recognized for architecting "Pavra" (vision AI road hazard mapping) and "Studify" (multimodal AI tutoring platform) — blending high-precision algorithms with intuitive user interfaces.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Highlights (Education, Career Goals, Traits) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Card */}
            <div className="p-6 rounded-2xl bg-[#0c101c]/80 border border-slate-800/90 space-y-4">
              <div className="flex items-center gap-2.5 text-slate-100 font-bold text-sm">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>Education & Academic Standing</span>
              </div>
              <div className="space-y-4">
                {portfolioData.education.map((edu) => (
                  <div key={edu.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2">
                    <div className="text-sm font-semibold text-slate-100">
                      {edu.degree}
                    </div>
                    <div className="text-xs text-slate-400 flex items-center justify-between">
                      <span>{edu.institution}</span>
                      <span className="font-mono text-emerald-400 font-medium">{edu.period}</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 inline-block">
                      {edu.gpa}
                    </div>
                    <ul className="text-[11px] text-slate-400 space-y-1 pt-1">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <ChevronRight className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Direction & Core Pillars */}
            <div className="p-6 rounded-2xl bg-[#0c101c]/80 border border-slate-800/90 space-y-4">
              <div className="flex items-center gap-2.5 text-slate-100 font-bold text-sm">
                <Compass className="w-5 h-5 text-indigo-400" />
                <span>Career Horizon & Trajectory</span>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-200">AI Systems & Multimodal Pipelines:</span>
                    <p className="text-slate-400 mt-0.5">Integrating vision-language models (Gemma 3), dual-embedding RAG, and Whisper audio models into responsive products.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-200">Mobile & Full-Stack Engineering:</span>
                    <p className="text-slate-400 mt-0.5">Architecting clean Flutter cross-platform mobile apps and Next.js 15 App Router web ecosystems with Supabase & PostgreSQL.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-slate-200">UI/UX & Design Systems:</span>
                    <p className="text-slate-400 mt-0.5">Crafting frictionless user workflows, ergonomic navigation patterns, and accessible design tokens tested in enterprise production.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Interests & Hobbies */}
            <div className="p-6 rounded-2xl bg-[#0c101c]/80 border border-slate-800/90 space-y-3">
              <div className="flex items-center gap-2.5 text-slate-100 font-bold text-sm">
                <Heart className="w-5 h-5 text-rose-400" />
                <span>Interests Beyond the Terminal</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {portfolioData.interests.map((interest) => (
                  <span
                    key={interest}
                    className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 font-mono"
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
