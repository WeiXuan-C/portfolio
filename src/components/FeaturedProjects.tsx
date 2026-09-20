import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Maximize2,
  Code,
  Terminal,
  Activity,
  Video
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filterOptions = ['All', 'Full-Stack', 'AI & Systems', 'Web App', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      {/* Background ambient lighting based on hovered project */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none transition-all duration-700" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PRODUCTION SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              Crafted Software Systems & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Digital Experiences.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono leading-relaxed">
            Every project demonstrates deep technical foundations: high-concurrency protocols, state synchronization, and human ergonomics.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                id={`project-filter-${filter.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                    : 'bg-[#0d121e] text-slate-400 border border-slate-800 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Large Interactive Visual Showcase Items */}
        <div className="space-y-12">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                id={`project-showcase-${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-3xl bg-gradient-to-b from-[#0c111e]/90 to-[#090d16]/90 border border-slate-800/80 hover:border-emerald-500/40 transition-all duration-300 overflow-hidden shadow-2xl shadow-black/60"
              >
                {/* Accent glow corner */}
                <div 
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-15 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                  {/* Left (or Right): Editorial Details */}
                  <div className={`lg:col-span-6 space-y-6 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-mono font-semibold border"
                        style={{ 
                          borderColor: `${project.accentColor}40`,
                          backgroundColor: `${project.accentColor}15`,
                          color: project.accentColor 
                        }}
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        • {project.role}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-emerald-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-base text-slate-300 font-medium leading-relaxed">
                        {project.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Architectural Features */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Engineered Features:
                      </div>
                      <div className="space-y-1.5">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-300 group-hover:border-slate-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <button
                        id={`btn-demo-${project.id}`}
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold text-xs shadow-lg shadow-emerald-500/20 hover:brightness-110 transition-all cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Interactive Deep-Dive & Demo</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`btn-github-${project.id}`}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0e1320] border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 text-xs font-semibold transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub</span>
                      </a>

                      {project.videoUrl && (
                        <a
                          href={project.videoUrl}
                          target="_blank"
                          rel="noreferrer"
                          id={`btn-video-${project.id}`}
                          className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 hover:bg-rose-500/20 text-xs font-medium transition-colors"
                        >
                          <Video className="w-3.5 h-3.5 text-rose-400" />
                          <span>Pitch Video</span>
                        </a>
                      )}

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        id={`btn-live-${project.id}`}
                        className="flex items-center gap-1.5 px-3 py-2.5 text-xs text-slate-400 hover:text-emerald-300 font-mono transition-colors"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* Right (or Left): Interactive Mockup Frame */}
                  <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div 
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer relative rounded-2xl bg-gradient-to-b from-slate-900 to-[#070a12] border border-slate-800/90 p-4 sm:p-6 shadow-2xl group/mockup overflow-hidden group-hover:border-emerald-500/30 transition-all"
                    >
                      {/* Browser Mockup Chrome */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800/80">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70 inline-block" />
                        </div>
                        <div className="px-3 py-1 rounded-md bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400 flex items-center gap-1">
                          <span className="text-emerald-400 font-bold">https://</span>
                          {project.id === 'tripify' ? 'tripify-agent.vercel.app' : project.id === 'studify' ? 'studify-platform.vercel.app' : project.id === 'teamsync' ? 'team-sync-pms.vercel.app' : `${project.id}.weixuan.dev`}
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">200 OK</span>
                      </div>

                      {/* Visual App Layout Simulator */}
                      <div className="rounded-xl bg-[#090d16] border border-slate-800/60 p-4 sm:p-5 space-y-4 group-hover/mockup:scale-[1.01] transition-transform duration-300">
                        {/* Simulation Visuals */}
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800/60">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-2.5 h-2.5 rounded-full animate-pulse" 
                              style={{ backgroundColor: project.accentColor }} 
                            />
                            <span className="text-xs font-bold text-slate-200">{project.title.split('—')[0]}</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                            Production Active
                          </span>
                        </div>

                        {/* Interactive UI Mockup Elements */}
                        <div className="grid grid-cols-3 gap-2">
                          {project.stats?.map((stat, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800/80 text-center">
                              <div className="text-[10px] font-mono text-slate-400">{stat.label}</div>
                              <div className="text-sm font-bold text-slate-100 mt-0.5">{stat.value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 text-xs font-mono text-slate-400 flex items-center justify-between">
                          <span className="text-slate-300">Click to launch interactive prototype</span>
                          <span className="text-emerald-400 group-hover/mockup:translate-x-1 transition-transform">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
