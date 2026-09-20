import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Database, 
  Wrench, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Cpu, 
  GitBranch, 
  Palette, 
  Globe, 
  FileCode, 
  Server,
  CloudUpload,
  TerminalSquare
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SkillItem } from '../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'programming' | 'frontend' | 'backend' | 'tools'>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem>(portfolioData.skills.programming[1]); // Default to TypeScript

  const allSkills: SkillItem[] = [
    ...portfolioData.skills.programming,
    ...portfolioData.skills.frontend,
    ...portfolioData.skills.backend,
    ...portfolioData.skills.tools
  ];

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : portfolioData.skills[activeCategory];

  const categoryLabels = [
    { id: 'all', label: 'All Technologies', count: allSkills.length },
    { id: 'programming', label: 'Programming', count: portfolioData.skills.programming.length },
    { id: 'frontend', label: 'Frontend', count: portfolioData.skills.frontend.length },
    { id: 'backend', label: 'Backend & Database', count: portfolioData.skills.backend.length },
    { id: 'tools', label: 'Tools & Design', count: portfolioData.skills.tools.length }
  ];

  // Helper to render icon based on skill
  const getSkillIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'typescript':
      case 'javascript':
        return <FileCode className="w-5 h-5 text-amber-400" />;
      case 'python':
      case 'c++':
        return <Cpu className="w-5 h-5 text-yellow-400" />;
      case 'php':
        return <Server className="w-5 h-5 text-amber-300" />;
      case 'react':
      case 'next.js':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'flutter & dart':
      case 'flutter':
        return <Code2 className="w-5 h-5 text-yellow-300" />;
      case 'tailwind css':
      case 'css3 & animations':
        return <Palette className="w-5 h-5 text-amber-300" />;
      case 'html5 & semantic web':
        return <Globe className="w-5 h-5 text-amber-400" />;
      case 'node.js':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'postgresql':
        return <Database className="w-5 h-5 text-yellow-400" />;
      case 'supabase':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'rest apis':
        return <Layers className="w-5 h-5 text-amber-300" />;
      case 'git & github':
        return <GitBranch className="w-5 h-5 text-amber-400" />;
      case 'figma':
        return <Palette className="w-5 h-5 text-yellow-300" />;
      case 'vs code':
        return <TerminalSquare className="w-5 h-5 text-amber-400" />;
      case 'vercel':
        return <CloudUpload className="w-5 h-5 text-neutral-100" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#0b0b0f] to-[#070709]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Code2 className="w-3.5 h-3.5 text-amber-400" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">
              A Deep, Modern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                Engineering Repertoire.
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
            Hands-on technical depth from QA testing & documentation to full-stack TypeScript, Flutter mobile development, and relational schemas.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categoryLabels.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10 font-bold'
                    : 'bg-[#0e0e14] text-neutral-400 border border-amber-500/15 hover:text-neutral-200 hover:border-amber-500/30'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? 'bg-amber-400 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-400'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid & Live Detail Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Center: Interactive Grid of Skills */}
          <motion.div 
            layout
            className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3.5"
          >
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill.name === skill.name;
                return (
                  <motion.button
                    key={skill.name}
                    id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ y: -3 }}
                    onClick={() => setSelectedSkill(skill)}
                    className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden group cursor-pointer ${
                      isSelected
                        ? 'bg-amber-950/25 border-amber-500/60 shadow-xl shadow-amber-500/10 ring-1 ring-amber-500/30'
                        : 'bg-[#0b0b10] border-amber-500/15 hover:border-amber-500/30 hover:bg-[#121218]'
                    }`}
                  >
                    {/* Active accent strip */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-yellow-400" />
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-[#121218] border border-amber-500/20 group-hover:scale-105 transition-transform">
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="text-[10px] font-mono text-amber-300 px-2 py-0.5 rounded-full bg-[#161622] border border-amber-500/20">
                        {skill.experienceYears}y exp
                      </span>
                    </div>

                    <div className="font-semibold text-neutral-200 text-sm mb-1 group-hover:text-amber-300 transition-colors">
                      {skill.name}
                    </div>

                    {/* Subtle proficiency meter */}
                    <div className="space-y-1 mt-2">
                      <div className="flex justify-between text-[10px] font-mono text-neutral-400">
                        <span>Proficiency</span>
                        <span className="text-amber-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-neutral-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                        />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Live Skill Inspector & Architectural Context */}
          <div className="lg:col-span-4 sticky top-24">
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-3xl bg-gradient-to-b from-[#101017] to-[#0a0a0f] border border-amber-500/30 shadow-2xl shadow-black/80 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                    {getSkillIcon(selectedSkill.name)}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-neutral-100">{selectedSkill.name}</div>
                    <div className="text-xs font-mono text-amber-400 capitalize">
                      Category: {selectedSkill.category}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold font-display text-amber-300">{selectedSkill.level}%</div>
                  <div className="text-[10px] font-mono text-neutral-400">Mastery Rating</div>
                </div>
              </div>

              {/* Highlight / Specialization */}
              <div>
                <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 font-mono">
                  Applied Competency
                </div>
                <div className="p-3 rounded-xl bg-[#121218] border border-amber-500/20 text-xs text-neutral-300 leading-relaxed">
                  {selectedSkill.highlight}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-amber-500/15 text-neutral-400">
                  <span>Years of Active Use:</span>
                  <span className="text-neutral-200">{selectedSkill.experienceYears} Years Continuous</span>
                </div>
                <div className="flex justify-between py-1 border-b border-amber-500/15 text-neutral-400">
                  <span>Production Status:</span>
                  <span className="text-amber-400 font-semibold">Active in Multiple Projects</span>
                </div>
                <div className="flex justify-between py-1 border-b border-amber-500/15 text-neutral-400">
                  <span>Code Style:</span>
                  <span className="text-neutral-200">Strict Typing & Test Coverage</span>
                </div>
              </div>

              {/* Developer Mindset Note */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-[11px] text-amber-300/90 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>
                  High engineering standards with methodical testing, comprehensive technical documentation, and performance optimization.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
