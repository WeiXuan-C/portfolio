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
        return <FileCode className="w-5 h-5 text-cyan-400" />;
      case 'python':
      case 'c++':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'php':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'react':
      case 'next.js':
        return <Code2 className="w-5 h-5 text-emerald-400" />;
      case 'tailwind css':
      case 'css3 & animations':
        return <Palette className="w-5 h-5 text-teal-400" />;
      case 'html5 & semantic web':
        return <Globe className="w-5 h-5 text-orange-400" />;
      case 'node.js':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'postgresql':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'supabase':
        return <Flame className="w-5 h-5 text-emerald-400" />;
      case 'rest apis':
        return <Layers className="w-5 h-5 text-violet-400" />;
      case 'git & github':
        return <GitBranch className="w-5 h-5 text-rose-400" />;
      case 'figma':
        return <Palette className="w-5 h-5 text-pink-400" />;
      case 'vs code':
        return <TerminalSquare className="w-5 h-5 text-blue-400" />;
      case 'vercel':
        return <CloudUpload className="w-5 h-5 text-slate-100" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              A Deep, Modern <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                Engineering Repertoire.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono leading-relaxed">
            Not just high-level familiarity. Hands-on architectural fluency from typed frontend components down to indexed relational schemas.
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                    : 'bg-[#0d121c] text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isActive ? 'bg-emerald-500 text-slate-950 font-bold' : 'bg-slate-800 text-slate-400'
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
                    className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'bg-emerald-950/30 border-emerald-500/60 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500/30'
                        : 'bg-[#0c101c]/85 border-slate-800/90 hover:border-slate-700 hover:bg-[#0f1422]'
                    }`}
                  >
                    {/* Active accent strip */}
                    {isSelected && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                    )}

                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-slate-900 border border-slate-800/80 group-hover:scale-105 transition-transform">
                        {getSkillIcon(skill.name)}
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800">
                        {skill.experienceYears}y exp
                      </span>
                    </div>

                    <div className="font-semibold text-slate-200 text-sm mb-1 group-hover:text-emerald-300 transition-colors">
                      {skill.name}
                    </div>

                    {/* Subtle proficiency meter */}
                    <div className="space-y-1 mt-2">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Proficiency</span>
                        <span className="text-emerald-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className={`h-full rounded-full ${
                            skill.level >= 90 
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
                              : 'bg-gradient-to-r from-cyan-500 to-blue-500'
                          }`}
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
              className="p-6 rounded-3xl bg-gradient-to-b from-[#0f1422] to-[#0a0d16] border border-emerald-500/30 shadow-2xl shadow-black/70 space-y-5"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                    {getSkillIcon(selectedSkill.name)}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-100">{selectedSkill.name}</div>
                    <div className="text-xs font-mono text-emerald-400 capitalize">
                      Category: {selectedSkill.category}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold font-display text-slate-100">{selectedSkill.level}%</div>
                  <div className="text-[10px] font-mono text-slate-400">Mastery Rating</div>
                </div>
              </div>

              {/* Highlight / Specialization */}
              <div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 font-mono">
                  Applied Competency
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                  {selectedSkill.highlight}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between py-1 border-b border-slate-800/60 text-slate-400">
                  <span>Years of Active Use:</span>
                  <span className="text-slate-200">{selectedSkill.experienceYears} Years Continuous</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60 text-slate-400">
                  <span>Production Status:</span>
                  <span className="text-emerald-400 font-semibold">Active in 4+ Projects</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60 text-slate-400">
                  <span>Code Style:</span>
                  <span className="text-slate-200">Strict Linting & Clean Arch</span>
                </div>
              </div>

              {/* Developer Mindset Note */}
              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-[11px] text-emerald-300/90 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>
                  Constantly evaluated against modern standards. Never adopting libraries simply for trendiness, but for maintainability and user speed.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
