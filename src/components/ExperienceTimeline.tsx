import React from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Sparkles 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export const ExperienceTimeline: React.FC = () => {
  const getTimelineIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'Internship':
        return <Briefcase className="w-4 h-4 text-emerald-400" />;
      case 'University':
        return <GraduationCap className="w-4 h-4 text-cyan-400" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-violet-400" />;
      case 'Milestone':
        return <Award className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>CAREER JOURNEY & MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              Internship, Leadership & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
                Engineering Impact.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono leading-relaxed">
            Real industry software delivery, collegiate technical leadership, and competitive hackathon execution.
          </p>
        </div>

        {/* Animated Timeline Spine & Cards */}
        <div className="relative pl-6 md:pl-8 border-l border-slate-800 space-y-12">
          {portfolioData.experience.map((item, index) => (
            <motion.div
              key={item.id}
              id={`experience-item-${item.id}`}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-[#0b0f19] border border-slate-700 group-hover:border-emerald-500 transition-colors shadow-lg">
                {getTimelineIcon(item.type)}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[#0c101c]/80 border border-slate-800/90 hover:border-slate-700 transition-all shadow-xl space-y-4">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/60 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                        {item.role}
                      </h3>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300">
                        {item.type}
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-emerald-400 mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <div className="flex sm:flex-col sm:items-end text-xs font-mono text-slate-400 gap-3 sm:gap-1">
                    <span className="flex items-center gap-1 text-slate-300 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Bullet Accomplishments */}
                <ul className="space-y-2 text-sm text-slate-300">
                  {item.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 leading-relaxed">
                      <ChevronRight className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies Stack Tags */}
                <div className="pt-3 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs font-mono text-slate-500 mr-1">Stack:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
