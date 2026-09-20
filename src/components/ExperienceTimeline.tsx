import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Sparkles,
  Filter
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const ExperienceTimeline: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'Internship' | 'Milestone' | 'University'>('ALL');

  const getTimelineIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-amber-400" />;
      case 'University':
        return <GraduationCap className="w-4 h-4 text-yellow-400" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-amber-300" />;
      case 'Milestone':
        return <Award className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  const filterOptions: { id: 'ALL' | 'Internship' | 'Milestone' | 'University'; label: string }[] = [
    { id: 'ALL', label: 'All Milestones' },
    { id: 'Internship', label: 'Enterprise & QA' },
    { id: 'Milestone', label: 'Hackathons & Competitions' },
    { id: 'University', label: 'Academic Systems' },
  ];

  const filteredExperience = activeFilter === 'ALL'
    ? portfolioData.experience
    : portfolioData.experience.filter(item => item.type === activeFilter);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#0b0b0f] to-[#070709]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>EXPERIENCE & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">
              Internship, Quality Assurance & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                System Verification.
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
            Enterprise QA testing, SIT/UAT documentation, academic excellence, and international hackathon achievements.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-2 pb-8 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0a0a10] border border-amber-500/20 shadow-md">
            <span className="text-xs font-mono text-neutral-500 px-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">Filter:</span>
            </span>
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              return (
                <button
                  key={opt.id}
                  id={`experience-filter-${opt.id.toLowerCase()}`}
                  onClick={() => setActiveFilter(opt.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                    isActive ? 'text-neutral-950 font-bold' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="timelineActiveTab"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Timeline Spine & Cards */}
        <motion.div layout className="relative pl-6 md:pl-8 border-l border-amber-500/20 space-y-12">
          <AnimatePresence mode="popLayout">
            {filteredExperience.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                id={`experience-item-${item.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Timeline Marker Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#0a0a0f] border border-amber-500/30 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all shadow-lg">
                  {getTimelineIcon(item.type)}
                </div>

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0b0b10] border border-amber-500/20 hover:border-amber-500/40 transition-all shadow-xl space-y-4">
                  {/* Header Information */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-500/15 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold text-neutral-100 group-hover:text-amber-300 transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-[#121218] border border-amber-500/25 text-amber-300">
                          {item.type}
                        </span>
                      </div>
                      <div className="text-sm font-semibold text-amber-400 mt-0.5">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex sm:flex-col sm:items-end text-xs font-mono text-neutral-400 gap-3 sm:gap-1">
                      <span className="flex items-center gap-1 text-neutral-300 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-amber-400/70" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-neutral-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Accomplishments */}
                  <ul className="space-y-2 text-sm text-neutral-300">
                    {item.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Stack Tags */}
                  <div className="pt-3 border-t border-amber-500/15 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-neutral-500 mr-1">Stack:</span>
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md bg-[#121218] text-neutral-300 border border-amber-500/20 text-xs font-mono hover:border-amber-400/50 hover:text-amber-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
