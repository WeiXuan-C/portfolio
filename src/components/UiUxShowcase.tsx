import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  Figma, 
  Smartphone, 
  Monitor, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  SlidersHorizontal,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const UiUxShowcase: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<string>(portfolioData.uiUxWork[0].id);
  const [comparisonMode, setComparisonMode] = useState<'after' | 'before'>('after');

  const currentCase = portfolioData.uiUxWork.find(c => c.id === selectedCase) || portfolioData.uiUxWork[0];

  return (
    <section id="uiux" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-mono mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>DIGITAL PRODUCT & UI/UX CRAFTSMANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              Design Systems, Ergonomics & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-amber-300">
                Editorial Aesthetics.
              </span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md font-mono leading-relaxed">
            I believe great engineers must possess deep visual literacy. My designs prioritize cognitive clarity, thumb-zone ergonomics, and fluid tactile feedback.
          </p>
        </div>

        {/* Case Study Selector Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {portfolioData.uiUxWork.map((item) => {
            const isSelected = selectedCase === item.id;
            return (
              <button
                key={item.id}
                id={`uiux-case-${item.id}`}
                onClick={() => setSelectedCase(item.id)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-pink-950/20 to-slate-900/90 border-pink-500/50 shadow-xl shadow-pink-500/10'
                    : 'bg-[#0c101c] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-pink-300">
                    {item.type}
                  </span>
                  {item.type === 'Mobile' ? (
                    <Smartphone className="w-4 h-4 text-slate-400" />
                  ) : item.type === 'Design System' ? (
                    <Layers className="w-4 h-4 text-slate-400" />
                  ) : (
                    <Monitor className="w-4 h-4 text-slate-400" />
                  )}
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-1">{item.title}</h3>
                <p className="text-xs text-slate-400 line-clamp-2">{item.summary}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Exploration Showcase */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0e1322] to-[#0a0e18] border border-slate-800 p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Top Bar with Case Meta & Figma Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <div className="text-xs font-mono text-pink-400 mb-1">{currentCase.subtitle}</div>
              <h3 className="text-2xl font-extrabold text-slate-100">{currentCase.title}</h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">{currentCase.summary}</p>
            </div>

            <div className="flex items-center gap-3">
              {currentCase.figmaUrl && (
                <a
                  href={currentCase.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/40 text-xs font-mono text-pink-300 hover:text-pink-200 transition-colors"
                >
                  <Figma className="w-4 h-4 text-pink-400" />
                  <span>Inspect Figma File</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Interactive Before & After Improvement Showcase */}
          {currentCase.before && currentCase.after && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-pink-400" />
                  Interactive UX Iteration Review
                </span>

                {/* State toggle */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
                  <button
                    id="uiux-toggle-before"
                    onClick={() => setComparisonMode('before')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                      comparisonMode === 'before'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Legacy Problem State
                  </button>
                  <button
                    id="uiux-toggle-after"
                    onClick={() => setComparisonMode('after')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                      comparisonMode === 'after'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Crafted Redesign State
                  </button>
                </div>
              </div>

              {/* Comparative Visual Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Before Card */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  comparisonMode === 'before'
                    ? 'bg-rose-950/20 border-rose-500/40 ring-1 ring-rose-500/20'
                    : 'bg-slate-900/40 border-slate-800/80 opacity-60'
                }`}>
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-3">
                    <XCircle className="w-4 h-4" />
                    <span>{currentCase.before.title} (Before)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {currentCase.before.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-rose-400 font-mono">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After Card */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  comparisonMode === 'after'
                    ? 'bg-emerald-950/25 border-emerald-500/50 ring-1 ring-emerald-500/30'
                    : 'bg-slate-900/40 border-slate-800/80 opacity-60'
                }`}>
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{currentCase.after.title} (Solution)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-200">
                    {currentCase.after.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Interactive UI Mockup Canvas / Tokens */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>DESIGN TOKENS & ATOMIC SCALE</span>
              <span className="text-pink-400">8px Base Grid System</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-[#10b981] mx-auto mb-2" />
                <div className="text-[11px] font-mono text-slate-200">emerald-500</div>
                <div className="text-[10px] text-slate-500 font-mono">#10b981 (Brand)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-[#38bdf8] mx-auto mb-2" />
                <div className="text-[11px] font-mono text-slate-200">sky-400</div>
                <div className="text-[10px] text-slate-500 font-mono">#38bdf8 (Accent)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-[#090b10] border border-slate-700 mx-auto mb-2" />
                <div className="text-[11px] font-mono text-slate-200">surface-canvas</div>
                <div className="text-[10px] text-slate-500 font-mono">#090b10 (Deep)</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="w-6 h-6 rounded-md bg-slate-800 mx-auto mb-2" />
                <div className="text-[11px] font-mono text-slate-200">surface-raised</div>
                <div className="text-[10px] text-slate-500 font-mono">#0e1320 (Card)</div>
              </div>
            </div>

            {currentCase.metrics && (
              <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 text-xs text-pink-300 font-mono flex items-center justify-between">
                <span>Verified Usability Metric:</span>
                <span className="font-bold text-slate-100">{currentCase.metrics}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
