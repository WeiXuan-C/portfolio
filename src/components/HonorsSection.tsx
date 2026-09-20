import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Sparkles, 
  Star, 
  ChevronRight, 
  CheckCircle2, 
  ExternalLink, 
  Layers,
  Filter,
  Eye,
  FileCheck
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { AwardItem } from '../types';

interface HonorsSectionProps {
  onNavigateToProject?: (projectId: string) => void;
}

export const HonorsSection: React.FC<HonorsSectionProps> = ({ onNavigateToProject }) => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'GOLD' | 'HACKATHON' | 'ACADEMIC'>('ALL');
  const [viewMode, setViewMode] = useState<'concise' | 'detailed'>('concise');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterOptions: { id: 'ALL' | 'GOLD' | 'HACKATHON' | 'ACADEMIC'; label: string; count: number }[] = [
    { id: 'ALL', label: 'All Honors', count: portfolioData.awards.length },
    { id: 'GOLD', label: '🥇 Gold & Top Honors', count: portfolioData.awards.filter(a => a.awardLevel === 'Gold' || a.awardLevel === 'RunnerUp').length },
    { id: 'HACKATHON', label: '🏆 Hackathons', count: portfolioData.awards.filter(a => a.awardLevel === 'Impact' || a.awardLevel === 'Excellence' || a.awardLevel === 'Honor').length },
    { id: 'ACADEMIC', label: '🎓 Academic Excellence', count: portfolioData.awards.filter(a => a.awardLevel === 'Academic').length },
  ];

  const filteredAwards = portfolioData.awards.filter((item) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'GOLD') return item.awardLevel === 'Gold' || item.awardLevel === 'RunnerUp';
    if (activeTab === 'HACKATHON') return item.awardLevel === 'Impact' || item.awardLevel === 'Excellence' || item.awardLevel === 'Honor';
    if (activeTab === 'ACADEMIC') return item.awardLevel === 'Academic';
    return true;
  });

  const getAwardIcon = (level?: AwardItem['awardLevel']) => {
    switch (level) {
      case 'Gold':
        return <Trophy className="w-5 h-5 text-yellow-400" />;
      case 'RunnerUp':
        return <Medal className="w-5 h-5 text-amber-300" />;
      case 'Impact':
      case 'Excellence':
        return <Award className="w-5 h-5 text-amber-400" />;
      case 'Academic':
        return <Star className="w-5 h-5 text-yellow-300" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  const getProjectId = (project?: string) => {
    if (!project) return null;
    const lower = project.toLowerCase();
    if (lower.includes('studify')) return 'studify';
    if (lower.includes('pavra')) return 'pavra';
    if (lower.includes('tripify')) return 'tripify';
    if (lower.includes('teamsync')) return 'teamsync';
    return null;
  };

  return (
    <section id="honors" className="py-24 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#0a0a0f] to-[#070709] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-amber-600/10 via-yellow-500/5 to-amber-700/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>HONORS & COMPETITION RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">
              International Gold & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                Multi-Hackathon Honors.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:items-end gap-3">
            <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed sm:text-right">
              Verified recognitions across international engineering competitions, nation-wide hackathons, and high distinction academics.
            </p>

            {/* Concise vs Detailed View Toggle */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#0f0f16] border border-amber-500/20 text-xs font-mono">
              <span className="text-neutral-500 px-2">Display:</span>
              <button
                id="honors-view-concise"
                onClick={() => setViewMode('concise')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'concise'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Concise Summary
              </button>
              <button
                id="honors-view-detailed"
                onClick={() => setViewMode('detailed')}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
                  viewMode === 'detailed'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Detailed Credentials
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex items-center gap-2 pb-6 overflow-x-auto no-scrollbar mb-8">
          <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#0a0a10] border border-amber-500/20 shadow-lg">
            <span className="text-xs font-mono text-neutral-500 px-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Category:</span>
            </span>
            {filterOptions.map((opt) => {
              const isActive = activeTab === opt.id;
              return (
                <button
                  key={opt.id}
                  id={`honors-tab-${opt.id.toLowerCase()}`}
                  onClick={() => setActiveTab(opt.id)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive ? 'text-neutral-950 font-bold' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="honorsActiveTabIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{opt.label}</span>
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-neutral-950/20 text-neutral-950 font-mono' : 'bg-[#14141e] text-neutral-400 font-mono'
                  }`}>
                    {opt.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Honors Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredAwards.map((award, index) => {
              const projId = getProjectId(award.project);
              const isExpanded = expandedId === (award.id || award.title);

              return (
                <motion.div
                  key={award.id || award.title}
                  layout
                  id={`honor-card-${award.id || index}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group relative rounded-2xl bg-[#0b0b12] border border-amber-500/20 hover:border-amber-500/45 p-5 sm:p-6 transition-all shadow-xl hover:shadow-2xl hover:shadow-amber-500/5 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Badge & Year */}
                    <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-amber-500/15">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-[#14141e] border border-amber-500/30 flex items-center justify-center group-hover:border-amber-400 group-hover:bg-amber-500/10 transition-colors shadow-sm">
                          {getAwardIcon(award.awardLevel)}
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300 font-semibold">
                          {award.badge || award.award}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-neutral-400">
                        {award.year}
                      </span>
                    </div>

                    {/* Award Title */}
                    <h3 className="text-base font-bold text-neutral-100 group-hover:text-amber-300 transition-colors leading-snug">
                      {viewMode === 'concise' ? (award.shortTitle || award.title) : award.title}
                    </h3>

                    {/* Competition & Host Details */}
                    <div className="mt-2 space-y-1 text-xs font-mono text-neutral-400">
                      <div className="flex items-center gap-1.5 text-amber-200/80">
                        <span className="text-neutral-500">Host:</span>
                        <span>{award.host || award.competition}</span>
                      </div>
                      {award.participants && (
                        <div className="flex items-center gap-1.5 text-neutral-400">
                          <span className="text-neutral-500">Scale:</span>
                          <span>{award.participants}</span>
                        </div>
                      )}
                    </div>

                    {/* Description: Brief or Detailed */}
                    {(viewMode === 'detailed' || isExpanded) && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 text-xs text-neutral-300 leading-relaxed font-sans border-t border-amber-500/10 pt-3"
                      >
                        {award.description}
                      </motion.p>
                    )}
                  </div>

                  {/* Bottom Footer: Associated Project & Quick Link */}
                  <div className="pt-4 mt-4 border-t border-amber-500/15 flex items-center justify-between text-xs font-mono">
                    {award.project ? (
                      <span className="flex items-center gap-1 text-neutral-400">
                        <Layers className="w-3.5 h-3.5 text-amber-400/80" />
                        <span className="text-amber-300 font-semibold">{award.project}</span>
                      </span>
                    ) : (
                      <span className="text-neutral-500">Official Award</span>
                    )}

                    <div className="flex items-center gap-2">
                      {viewMode === 'concise' && (
                        <button
                          onClick={() => setExpandedId(isExpanded ? null : (award.id || award.title))}
                          className="text-[11px] text-neutral-400 hover:text-amber-300 font-mono transition-colors cursor-pointer"
                        >
                          {isExpanded ? 'Show Less' : 'Show More'}
                        </button>
                      )}

                      {projId && onNavigateToProject && (
                        <button
                          onClick={() => onNavigateToProject(projId)}
                          className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#14141e] hover:bg-amber-500/15 border border-amber-500/20 hover:border-amber-400 text-amber-300 text-[11px] font-mono transition-all cursor-pointer"
                          title={`Jump to ${award.project} in Projects`}
                        >
                          <span>View Project</span>
                          <ChevronRight className="w-3 h-3 text-amber-400" />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
