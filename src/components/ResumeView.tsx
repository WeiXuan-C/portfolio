import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Printer, 
  Download, 
  ArrowLeft, 
  Check, 
  Sliders, 
  FileText, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Globe,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { ResumeConfig, ResumeType } from '../types';

interface ResumeViewProps {
  onBackToPortfolio: () => void;
}

export const ResumeView: React.FC<ResumeViewProps> = ({ onBackToPortfolio }) => {
  const [config, setConfig] = useState<ResumeConfig>({
    type: 'software',
    sections: {
      summary: true,
      experience: true,
      projects: true,
      skills: true,
      education: true,
      certifications: true,
      awards: true,
      languages: true
    },
    isCompactOnePage: true
  });

  const [awardsDetailLevel, setAwardsDetailLevel] = useState<'concise' | 'full'>('concise');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  // Filter skills based on resume type preset
  const getTailoredSkills = () => {
    switch (config.type) {
      case 'frontend':
        return [
          { label: 'Frontend Technologies', list: portfolioData.skills.frontend.map(s => s.name) },
          { label: 'Languages', list: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
          { label: 'Design & Tools', list: ['Figma', 'Tailwind CSS', 'Vercel', 'Git/GitHub'] },
          { label: 'Backend Familiarity', list: ['Node.js', 'REST APIs', 'Supabase'] }
        ];
      case 'uiux':
        return [
          { label: 'UI/UX & Product Design', list: ['Figma', 'Design Systems', 'Micro-Interactions', 'User Testing', 'Wireframing'] },
          { label: 'Frontend Engineering', list: ['React 19', 'Tailwind CSS', 'Next.js', 'CSS Grid', 'Framer Motion'] },
          { label: 'Development Languages', list: ['TypeScript', 'JavaScript', 'HTML5/Semantic Web'] },
          { label: 'Tools', list: ['Git', 'VS Code', 'Vercel'] }
        ];
      case 'software':
      case 'general':
      default:
        return [
          { label: 'Languages', list: portfolioData.skills.programming.map(s => s.name) },
          { label: 'Frontend', list: portfolioData.skills.frontend.map(s => s.name) },
          { label: 'Backend & Database', list: portfolioData.skills.backend.map(s => s.name) },
          { label: 'Developer Tools', list: portfolioData.skills.tools.map(s => s.name) }
        ];
    }
  };

  // Filter projects depending on 1-page vs 2-page or type
  const getSelectedProjects = () => {
    if (config.isCompactOnePage) {
      if (config.type === 'frontend' || config.type === 'uiux') {
        return portfolioData.projects.filter(p => ['pavra', 'studify', 'moabi-systems'].includes(p.id));
      }
      return portfolioData.projects.slice(0, 3);
    }
    return portfolioData.projects;
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 pt-20 pb-24 px-3 sm:px-6">
      {/* Top Floating Control Bar (Hidden on Print) */}
      <div className="no-print max-w-5xl mx-auto mb-8 flex flex-col md:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-[#0c0c12]/95 border border-amber-500/25 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <button
            id="resume-back-btn"
            onClick={onBackToPortfolio}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12121a] border border-amber-500/20 text-neutral-300 hover:text-white hover:border-amber-500/50 text-xs font-semibold transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/30">
              ATS-Optimized Single Source of Truth
            </span>
          </div>
        </div>

        {/* Customization Quick Controls */}
        <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end">
          {/* Preset Selector */}
          <div className="flex items-center gap-1.5 text-xs font-mono">
            <span className="text-neutral-400">Target:</span>
            <select
              id="resume-type-select"
              value={config.type}
              onChange={(e) => setConfig({ ...config, type: e.target.value as ResumeType })}
              className="bg-[#12121a] border border-amber-500/30 rounded-lg px-2.5 py-1.5 text-xs text-amber-200 outline-none focus:border-amber-400"
            >
              <option value="software">Software Developer (General)</option>
              <option value="frontend">Frontend Specialist</option>
              <option value="uiux">UI/UX & Design Engineer</option>
              <option value="general">IT Graduate / Associate</option>
            </select>
          </div>

          {/* 1-Page vs 2-Page density */}
          <button
            id="resume-density-toggle"
            onClick={() => setConfig({ ...config, isCompactOnePage: !config.isCompactOnePage })}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-colors cursor-pointer ${
              config.isCompactOnePage
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold'
                : 'bg-[#12121a] text-neutral-300 border-amber-500/20'
            }`}
          >
            {config.isCompactOnePage ? 'Mode: 1-Page Compact' : 'Mode: 2-Page Detailed'}
          </button>

          {/* Export PDF / Print Button */}
          <button
            id="resume-export-pdf-btn"
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 font-bold text-xs shadow-lg shadow-amber-500/25 hover:brightness-110 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Export PDF / Print</span>
          </button>
        </div>
      </div>

      {/* Optional Customization Drawer / Checkbox Pill Bar */}
      <div className="no-print max-w-5xl mx-auto mb-6 p-4 rounded-2xl bg-[#08080c] border border-amber-500/20 text-xs font-mono">
        <div className="text-neutral-400 mb-2 flex items-center gap-1.5 font-semibold">
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span>Toggle Resume Sections to include in Export:</span>
        </div>
        <div className="flex flex-wrap gap-3">
          {(Object.keys(config.sections) as Array<keyof typeof config.sections>).map((secKey) => (
            <label
              key={secKey}
              className="flex items-center gap-1.5 cursor-pointer text-neutral-300 hover:text-white capitalize"
            >
              <input
                type="checkbox"
                checked={config.sections[secKey]}
                onChange={(e) =>
                  setConfig({
                    ...config,
                    sections: { ...config.sections, [secKey]: e.target.checked }
                  })
                }
                className="rounded border-amber-500/40 bg-[#12121a] text-amber-500 focus:ring-0"
              />
              <span>{secKey}</span>
            </label>
          ))}
        </div>

        {/* Awards display depth selector */}
        {config.sections.awards && (
          <div className="flex items-center gap-2 pt-2.5 mt-2.5 border-t border-amber-500/15">
            <span className="text-neutral-400">Awards Detail Level:</span>
            <div className="inline-flex rounded-lg bg-[#12121a] p-0.5 border border-amber-500/20">
              <button
                id="resume-awards-concise-btn"
                onClick={() => setAwardsDetailLevel('concise')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                  awardsDetailLevel === 'concise'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Key Highlights
              </button>
              <button
                id="resume-awards-full-btn"
                onClick={() => setAwardsDetailLevel('full')}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all cursor-pointer ${
                  awardsDetailLevel === 'full'
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-neutral-400 hover:text-neutral-200'
                }`}
              >
                Full Citations
              </button>
            </div>
          </div>
        )}
      </div>

      {/* The Printable A4 Resume Canvas Container */}
      <div className="max-w-4xl mx-auto">
        <div 
          id="resume-print-area"
          className="bg-white text-slate-900 p-8 sm:p-12 md:p-14 shadow-2xl rounded-sm font-sans leading-relaxed selection:bg-slate-200"
          style={{ minHeight: '297mm', color: '#0f172a' }}
        >
          {/* HEADER */}
          <header className="border-b-2 border-slate-900 pb-5 mb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 uppercase font-display">
                  {portfolioData.personal.name}
                </h1>
                <p className="text-sm sm:text-base font-bold text-slate-700 tracking-wide uppercase mt-0.5">
                  {config.type === 'frontend' 
                    ? 'Frontend Engineer & UI/UX Specialist'
                    : config.type === 'uiux'
                    ? 'Design Engineer & UI/UX Product Craftsman'
                    : portfolioData.personal.title}
                </p>
              </div>

              <div className="text-xs text-slate-600 sm:text-right space-y-0.5 font-medium">
                <div>{portfolioData.personal.location}</div>
                <div>{portfolioData.personal.phone}</div>
                <div>
                  <a href={`mailto:${portfolioData.personal.email}`} className="text-slate-900 font-semibold underline">
                    {portfolioData.personal.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Links line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-700 pt-3 border-t border-slate-200 mt-3 font-mono">
              <a href={portfolioData.personal.portfolioUrl} className="hover:text-slate-900 underline">
                Portfolio: {portfolioData.personal.portfolioUrl}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.github} className="hover:text-slate-900 underline">
                GitHub: {portfolioData.personal.github.replace('https://', '')}
              </a>
              <span>•</span>
              <a href={portfolioData.personal.linkedin} className="hover:text-slate-900 underline">
                LinkedIn: {portfolioData.personal.linkedin.replace('https://', '')}
              </a>
            </div>
          </header>

          {/* PROFESSIONAL SUMMARY */}
          {config.sections.summary && (
            <section className="mb-5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2 font-display">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-800 leading-relaxed">
                {portfolioData.summary}
              </p>
            </section>
          )}

          {/* TECHNICAL SKILLS */}
          {config.sections.skills && (
            <section className="mb-5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2 font-display">
                Technical Skills & Architecture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-slate-800">
                {getTailoredSkills().map((group, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="font-bold text-slate-900 min-w-[130px] flex-shrink-0">
                      {group.label}:
                    </span>
                    <span className="text-slate-700">
                      {group.list.join(', ')}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EXPERIENCE */}
          {config.sections.experience && (
            <section className="mb-5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3 font-display">
                Work Experience & Internships
              </h2>
              <div className="space-y-4">
                {portfolioData.experience.map((exp) => (
                  <div key={exp.id} className="space-y-1" style={{ pageBreakInside: 'avoid' }}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs">
                      <div>
                        <span className="font-bold text-slate-900 text-sm">{exp.role}</span>
                        <span className="text-slate-700 font-semibold"> — {exp.company}</span>
                      </div>
                      <div className="text-slate-600 font-mono text-[11px] sm:text-right">
                        <span>{exp.period}</span> | <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-slate-700">
                      {exp.description.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-snug">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SELECTED PROJECTS */}
          {config.sections.projects && (
            <section className="mb-5">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-3 font-display">
                Selected Software & Engineering Projects
              </h2>
              <div className="space-y-3.5">
                {getSelectedProjects().map((proj) => (
                  <div key={proj.id} className="space-y-1" style={{ pageBreakInside: 'avoid' }}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                      <div className="font-bold text-slate-900">
                        {proj.title} <span className="font-normal text-slate-600">({proj.role})</span>
                      </div>
                      <div className="text-slate-600 font-mono text-[11px]">
                        {proj.technologies.slice(0, 4).join(', ')}
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 leading-snug">
                      {config.isCompactOnePage ? proj.description : proj.fullOverview}
                    </p>
                    <div className="text-[11px] text-slate-600">
                      <span className="font-semibold text-slate-800">Key Engineering:</span> {proj.features.slice(0, 2).join('; ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}
          {config.sections.education && (
            <section className="mb-5" style={{ pageBreakInside: 'avoid' }}>
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2 font-display">
                Education
              </h2>
              {portfolioData.education.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs">
                    <div>
                      <span className="font-bold text-slate-900">{edu.degree}</span>
                      <span className="text-slate-700"> — {edu.institution}</span>
                    </div>
                    <span className="text-slate-600 font-mono text-[11px]">{edu.period}</span>
                  </div>
                  <div className="text-xs text-slate-700">
                    <span className="font-semibold text-slate-900">GPA:</span> {edu.gpa} • {edu.details.join(' • ')}
                  </div>
                  <div className="text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-800">Relevant Coursework:</span> {edu.coursework.join(', ')}
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* AWARDS & CERTIFICATIONS (Side-by-side or stacked) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs" style={{ pageBreakInside: 'avoid' }}>
            {config.sections.awards && (
              <div>
                <div className="flex items-baseline justify-between border-b border-slate-300 pb-1 mb-2">
                  <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest font-display">
                    Honours & Awards
                  </h2>
                  <span className="text-[10px] font-mono text-slate-500 no-print">
                    ({awardsDetailLevel === 'concise' ? 'Key Highlights' : 'Full Citations'})
                  </span>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  {portfolioData.awards.map((aw, i) => (
                    <li key={i} className="leading-snug">
                      {awardsDetailLevel === 'concise' ? (
                        <div>
                          <span className="font-bold text-slate-900">{aw.shortTitle || aw.title}</span>
                          <span className="text-slate-500"> ({aw.year})</span>
                          {aw.host && <span className="text-slate-600"> — {aw.host}</span>}
                        </div>
                      ) : (
                        <div>
                          <span className="font-bold text-slate-900">{aw.title}</span>
                          <span className="text-slate-500"> ({aw.year})</span>
                          {aw.participants && <span className="text-slate-600 text-[10px] font-mono"> [{aw.participants}]</span>}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {config.sections.certifications && (
              <div>
                <h2 className="text-xs font-bold text-slate-900 uppercase tracking-widest border-b border-slate-300 pb-1 mb-2 font-display">
                  Certifications
                </h2>
                <ul className="space-y-1 text-slate-700">
                  {portfolioData.certifications.map((c, i) => (
                    <li key={i} className="leading-snug">
                      <span className="font-bold text-slate-900">{c.name}</span> — {c.issuer} ({c.year})
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
