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
  Video,
  Award,
  Lock,
  FileText,
  ShieldCheck
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
    <section id="projects" className="py-24 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#0b0b0f] to-[#070709]">
      {/* Background ambient lighting based on hovered project */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none transition-all duration-700" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>PRODUCTION & HACKATHON SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">
              Award-Winning Projects & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
                Engineered Solutions.
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
            High academic standards combined with competitive hackathon execution, thorough QA testing, and resilient architecture.
          </p>
        </div>

        {/* Filter Pills with Framer Motion Layout Animation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                id={`project-filter-${filter.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-colors cursor-pointer ${
                  isActive
                    ? 'text-neutral-950 font-bold'
                    : 'text-neutral-400 hover:text-neutral-200 bg-[#0e0e14] border border-amber-500/15 hover:border-amber-500/30'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="project-active-filter-bg"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 shadow-lg shadow-amber-500/20"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{filter}</span>
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
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
                className="group relative rounded-3xl bg-gradient-to-b from-[#0e0e16]/95 to-[#09090e]/95 border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 overflow-hidden shadow-2xl shadow-black/80 hover:shadow-[0_10px_40px_rgba(245,158,11,0.12)]"
              >
                {/* Accent glow corner */}
                <div 
                  className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-10 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none bg-amber-500"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10">
                  {/* Left (or Right): Editorial Details */}
                  <div className={`lg:col-span-6 space-y-5 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span 
                        className="px-3 py-1 rounded-full text-xs font-mono font-semibold border border-amber-500/30 bg-amber-500/10 text-amber-300"
                      >
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">
                        • {project.role}
                      </span>
                      {project.status && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400">
                          {project.status}
                        </span>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 group-hover:text-amber-300 transition-colors tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base text-amber-200/90 font-medium leading-relaxed font-sans">
                        {project.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                        {project.description}
                      </p>
                    </div>

                    {/* Concise Honors Pills (Only key highlights on the card) */}
                    {project.awardsList && project.awardsList.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        <span className="text-[10px] font-mono text-amber-400/90 uppercase tracking-wider flex items-center gap-1 mr-1">
                          <Award className="w-3 h-3 text-amber-400" />
                          <span>Honors:</span>
                        </span>
                        {project.awardsList.filter(a => a.isKeyHighlight).map((aw) => (
                          <span
                            key={aw.shortName}
                            className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300 font-medium flex items-center gap-1"
                          >
                            <span className="text-amber-400">★</span>
                            <span>{aw.shortName}</span>
                          </span>
                        ))}
                        {project.awardsList.length > 2 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProject(project);
                            }}
                            className="px-2 py-0.5 rounded-full bg-[#14141e] border border-amber-500/20 text-[10px] font-mono text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
                            title="Click to view all awards and competition details in project modal"
                          >
                            +{project.awardsList.length - 2} more awards
                          </button>
                        )}
                      </div>
                    )}

                    {/* Key Architectural Features */}
                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                        Key Responsibilities & Highlights:
                      </div>
                      <div className="space-y-1.5">
                        {project.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-[#14141e] border border-amber-500/15 text-[11px] font-mono text-neutral-300 group-hover:border-amber-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions: Distinguish between Confidential Enterprise Work & Public Repos */}
                    {project.isConfidential ? (
                      <div className="space-y-3 pt-3">
                        <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                          <Lock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span>企业实习交付 · 公司商业机密受保密协议 (NDA) 保护，无公开链接 / 无 Demo</span>
                        </div>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          id={`btn-demo-${project.id}`}
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#14141e] border border-amber-500/30 hover:border-amber-400 text-amber-300 hover:bg-amber-500/10 font-bold text-xs transition-all cursor-pointer shadow-md"
                        >
                          <FileText className="w-3.5 h-3.5 text-amber-400" />
                          <span>查看实习职责与 QA 测试详情 (Internship Details)</span>
                        </motion.button>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          id={`btn-demo-${project.id}`}
                          onClick={() => setSelectedProject(project)}
                          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/20 hover:brightness-110 transition-all cursor-pointer"
                        >
                          <Maximize2 className="w-3.5 h-3.5" />
                          <span>Interactive Deep-Dive & Demo</span>
                        </motion.button>

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            id={`btn-github-${project.id}`}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12121a] border border-amber-500/20 text-neutral-300 hover:text-white hover:border-amber-500/40 text-xs font-semibold transition-colors"
                          >
                            <Github className="w-3.5 h-3.5 text-amber-400" />
                            <span>GitHub</span>
                          </a>
                        )}

                        {project.videoUrl && (
                          <a
                            href={project.videoUrl}
                            target="_blank"
                            rel="noreferrer"
                            id={`btn-video-${project.id}`}
                            className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-medium transition-colors"
                          >
                            <Video className="w-3.5 h-3.5 text-amber-400" />
                            <span>Pitch Video</span>
                          </a>
                        )}

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            id={`btn-live-${project.id}`}
                            className="flex items-center gap-1.5 px-3 py-2.5 text-xs text-neutral-400 hover:text-amber-300 font-mono transition-colors"
                          >
                            <span>Live Site</span>
                            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right (or Left): Interactive Mockup Frame */}
                  <div className={`lg:col-span-6 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.015 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer relative rounded-2xl bg-gradient-to-b from-[#101018] to-[#07070c] border border-amber-500/20 p-4 sm:p-6 shadow-2xl group/mockup overflow-hidden group-hover:border-amber-500/40 transition-all"
                    >
                      {/* Browser Mockup Chrome */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-amber-500/15">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70 inline-block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70 inline-block" />
                        </div>
                        <div className="px-3 py-1 rounded-md bg-[#050508] border border-amber-500/20 text-[10px] font-mono text-neutral-400 flex items-center gap-1.5">
                          {project.isConfidential ? (
                            <>
                              <Lock className="w-3 h-3 text-amber-400" />
                              <span className="text-neutral-300">internal://moabi-enterprise.local/qa-suite</span>
                            </>
                          ) : (
                            <>
                              <span className="text-amber-400 font-bold">https://</span>
                              <span>{project.id === 'tripify' ? 'tripify-agent.vercel.app' : project.id === 'studify' ? 'studify-platform.vercel.app' : project.id === 'teamsync' ? 'team-sync-pms.vercel.app' : `${project.id}.weixuan.dev`}</span>
                            </>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-amber-400/80">
                          {project.isConfidential ? 'Restricted • NDA' : '200 OK'}
                        </span>
                      </div>

                      {/* Visual App Layout Simulator */}
                      <div className="rounded-xl bg-[#09090f] border border-amber-500/15 p-4 sm:p-5 space-y-4">
                        {/* Simulation Visuals */}
                        <div className="flex items-center justify-between pb-2 border-b border-amber-500/15">
                          <div className="flex items-center gap-2">
                            <span 
                              className={`w-2.5 h-2.5 rounded-full ${project.isConfidential ? 'bg-amber-500' : 'animate-pulse bg-amber-400'}`} 
                            />
                            <span className="text-xs font-bold text-neutral-200">{project.title.split('—')[0]}</span>
                          </div>
                          <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                            {project.isConfidential ? 'Enterprise Internship' : 'Verified Project'}
                          </span>
                        </div>

                        {/* Interactive UI Mockup Elements */}
                        <div className="grid grid-cols-3 gap-2">
                          {project.stats?.map((stat, i) => (
                            <div key={i} className="p-2.5 rounded-lg bg-[#12121a] border border-amber-500/15 text-center">
                              <div className="text-[10px] font-mono text-neutral-400">{stat.label}</div>
                              <div className="text-sm font-bold text-amber-300 mt-0.5">{stat.value}</div>
                            </div>
                          ))}
                        </div>

                        <div className="p-3 rounded-lg bg-[#07070b] border border-amber-500/15 text-xs font-mono text-neutral-400 flex items-center justify-between">
                          {project.isConfidential ? (
                            <span className="text-amber-300/90 flex items-center gap-1.5">
                              <Lock className="w-3.5 h-3.5 text-amber-400" />
                              <span>Click to read internship QA testing & module overview</span>
                            </span>
                          ) : (
                            <>
                              <span className="text-neutral-300">Click to launch interactive prototype</span>
                              <span className="text-amber-400 group-hover/mockup:translate-x-1.5 transition-transform duration-200">
                                →
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
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
