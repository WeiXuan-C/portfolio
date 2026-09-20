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
    <section id="uiux" className="py-24 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#09090d] to-[#070709]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-3">
              <Palette className="w-3.5 h-3.5 text-amber-400" />
              <span>DIGITAL PRODUCT & UI/UX CRAFTSMANSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-100 tracking-tight">
              Design Systems, Ergonomics & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500">
                Editorial Aesthetics.
              </span>
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md font-mono leading-relaxed">
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
                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-950/20 to-neutral-900/90 border-amber-500/50 shadow-xl shadow-amber-500/10'
                    : 'bg-[#0a0a0f] border-amber-500/15 hover:border-amber-500/35'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#12121b] border border-amber-500/20 text-amber-300">
                    {item.type}
                  </span>
                  {item.type === 'Mobile' ? (
                    <Smartphone className="w-4 h-4 text-amber-400/80" />
                  ) : item.type === 'Design System' ? (
                    <Layers className="w-4 h-4 text-amber-400/80" />
                  ) : (
                    <Monitor className="w-4 h-4 text-amber-400/80" />
                  )}
                </div>
                <h3 className="text-base font-bold text-neutral-100 mb-1">{item.title}</h3>
                <p className="text-xs text-neutral-400 line-clamp-2">{item.summary}</p>
              </button>
            );
          })}
        </div>

        {/* Detailed Interactive Exploration Showcase */}
        <div className="rounded-3xl bg-gradient-to-b from-[#0d0d14] to-[#07070a] border border-amber-500/20 p-6 sm:p-10 shadow-2xl space-y-8">
          {/* Top Bar with Case Meta & Figma Link */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-amber-500/15 pb-6">
            <div>
              <div className="text-xs font-mono text-amber-400 mb-1">{currentCase.subtitle}</div>
              <h3 className="text-2xl font-extrabold text-neutral-100">{currentCase.title}</h3>
              <p className="text-sm text-neutral-300 mt-1 max-w-2xl">{currentCase.summary}</p>
            </div>

            <div className="flex items-center gap-3">
              {currentCase.figmaUrl && (
                <a
                  href={currentCase.figmaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#12121b] border border-amber-500/20 hover:border-amber-500/50 text-xs font-mono text-amber-300 hover:text-amber-200 transition-colors"
                >
                  <Figma className="w-4 h-4 text-amber-400" />
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
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-amber-400" />
                  Interactive UX Iteration Review
                </span>

                {/* State toggle */}
                <div className="flex items-center gap-1 bg-[#060609] p-1 rounded-xl border border-amber-500/20">
                  <button
                    id="uiux-toggle-before"
                    onClick={() => setComparisonMode('before')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                      comparisonMode === 'before'
                        ? 'bg-amber-900/30 text-amber-300 border border-amber-500/40'
                        : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                  >
                    Legacy Problem State
                  </button>
                  <button
                    id="uiux-toggle-after"
                    onClick={() => setComparisonMode('after')}
                    className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                      comparisonMode === 'after'
                        ? 'bg-amber-500/20 text-yellow-300 border border-amber-400/40 font-bold'
                        : 'text-neutral-400 hover:text-neutral-200'
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
                    ? 'bg-amber-950/20 border-amber-500/40 ring-1 ring-amber-500/20'
                    : 'bg-[#0c0c12]/40 border-amber-500/10 opacity-60'
                }`}>
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm mb-3">
                    <XCircle className="w-4 h-4 text-amber-400" />
                    <span>{currentCase.before.title} (Before)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-300">
                    {currentCase.before.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* After Card */}
                <div className={`p-6 rounded-2xl border transition-all ${
                  comparisonMode === 'after'
                    ? 'bg-amber-950/25 border-amber-500/50 ring-1 ring-amber-500/30'
                    : 'bg-[#0c0c12]/40 border-amber-500/10 opacity-60'
                }`}>
                  <div className="flex items-center gap-2 text-yellow-400 font-bold text-sm mb-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    <span>{currentCase.after.title} (Solution)</span>
                  </div>
                  <ul className="space-y-2 text-xs text-neutral-200">
                    {currentCase.after.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Interactive UI Mockup Canvas / Tokens */}
          <div className="p-6 rounded-2xl bg-[#060609] border border-amber-500/15 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>DESIGN TOKENS & ATOMIC SCALE</span>
              <span className="text-amber-400">8px Base Grid System</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-[#0f0f16] border border-amber-500/15">
                <div className="w-6 h-6 rounded-md bg-[#f59e0b] shadow-[0_0_8px_rgba(245,158,11,0.5)] mx-auto mb-2" />
                <div className="text-[11px] font-mono text-neutral-200">amber-500</div>
                <div className="text-[10px] text-neutral-500 font-mono">#f59e0b (Brand Gold)</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0f0f16] border border-amber-500/15">
                <div className="w-6 h-6 rounded-md bg-[#fbbf24] shadow-[0_0_8px_rgba(251,191,36,0.5)] mx-auto mb-2" />
                <div className="text-[11px] font-mono text-neutral-200">yellow-400</div>
                <div className="text-[10px] text-neutral-500 font-mono">#fbbf24 (Accent Glow)</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0f0f16] border border-amber-500/15">
                <div className="w-6 h-6 rounded-md bg-[#070709] border border-amber-500/30 mx-auto mb-2" />
                <div className="text-[11px] font-mono text-neutral-200">canvas-deep</div>
                <div className="text-[10px] text-neutral-500 font-mono">#070709 (Noir)</div>
              </div>
              <div className="p-3 rounded-xl bg-[#0f0f16] border border-amber-500/15">
                <div className="w-6 h-6 rounded-md bg-[#12121a] border border-amber-500/20 mx-auto mb-2" />
                <div className="text-[11px] font-mono text-neutral-200">surface-raised</div>
                <div className="text-[10px] text-neutral-500 font-mono">#12121a (Card)</div>
              </div>
            </div>

            {currentCase.metrics && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-mono flex items-center justify-between">
                <span>Verified Usability Metric:</span>
                <span className="font-bold text-neutral-100">{currentCase.metrics}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
