import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Activity, 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Ticket, 
  Receipt, 
  Play
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation' | 'architecture'>('simulation');
  const [simulatedCity, setSimulatedCity] = useState('Kyoto, Japan');
  const [simulatedDays, setSimulatedDays] = useState(3);
  const [selectedSeat, setSelectedSeat] = useState<string[]>(['E4', 'E5']);
  const [invoiceStatus, setInvoiceStatus] = useState<'Draft' | 'Sent' | 'Paid'>('Sent');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0b0f19] border border-slate-800 rounded-3xl shadow-2xl shadow-black overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800/80 bg-[#080c14]">
            <div className="flex items-center gap-3">
              <span 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: project.accentColor }} 
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">{project.title}</h3>
                <span className="text-xs font-mono text-emerald-400">{project.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-500/10 transition-colors"
                aria-label="Close Project Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800/60 bg-[#090d16]">
            <button
              onClick={() => setActiveTab('simulation')}
              className={`pb-2.5 text-xs font-mono font-medium border-b-2 transition-all ${
                activeTab === 'simulation'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Interactive Live Simulation
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 text-xs font-mono font-medium border-b-2 transition-all ${
                activeTab === 'overview'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              System Overview & Features
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-2.5 text-xs font-mono font-medium border-b-2 transition-all ${
                activeTab === 'architecture'
                  ? 'border-emerald-400 text-emerald-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Technical Architecture
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-300 text-sm">
            {/* Simulation Tab */}
            {activeTab === 'simulation' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Interactive prototype playground previewing core engineering UX
                  </span>
                  <span className="font-mono text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Mock Environment</span>
                </div>

                {/* Customized interactive simulation per project */}
                {project.id === 'tripify' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Select Destination & Pace</div>
                        <div className="text-sm font-semibold text-slate-100 flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4 text-emerald-400" />
                          <select 
                            value={simulatedCity}
                            onChange={(e) => setSimulatedCity(e.target.value)}
                            className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-slate-100 font-medium"
                          >
                            <option value="Kyoto, Japan">Kyoto, Japan (Cultural & Historic)</option>
                            <option value="Reykjavik, Iceland">Reykjavik, Iceland (Nature & Geothermal)</option>
                            <option value="Zurich, Switzerland">Zurich, Switzerland (Alpine & Urban)</option>
                          </select>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-mono">Duration:</span>
                        {[2, 3, 5].map((d) => (
                          <button
                            key={d}
                            onClick={() => setSimulatedDays(d)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono ${
                              simulatedDays === d
                                ? 'bg-emerald-500 text-slate-950 font-bold'
                                : 'bg-slate-800 text-slate-300'
                            }`}
                          >
                            {d} Days
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Simulated Generated Route Schedule */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <div className="text-xs font-mono text-emerald-400">Generated Itinerary for {simulatedCity}:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                          <div className="text-xs font-bold text-slate-200">Day 1: Arrival & Historic Core</div>
                          <p className="text-[11px] text-slate-400 mt-1">09:00 Central Station → 11:30 Heritage Shrine walk → 14:00 Artisanal Ramen</p>
                          <span className="text-[9px] font-mono text-emerald-400 mt-2 block">Transit: 18m train</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                          <div className="text-xs font-bold text-slate-200">Day 2: Mountain Trail & Vista</div>
                          <p className="text-[11px] text-slate-400 mt-1">08:00 Early bamboo forest ascent → 13:00 Zen Tea Tasting → 18:00 Lantern Alley</p>
                          <span className="text-[9px] font-mono text-emerald-400 mt-2 block">Transit: 25m bus</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                          <div className="text-xs font-bold text-slate-200">Day 3: Modern Arts & Departure</div>
                          <p className="text-[11px] text-slate-400 mt-1">10:00 Contemporary Media Pavilions → 15:00 Souvenir Market → Airport Express</p>
                          <span className="text-[9px] font-mono text-emerald-400 mt-2 block">Transit: 40m express</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'cinepass' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Live WebSocket Seat Map</div>
                        <div className="text-sm font-semibold text-slate-100 flex items-center gap-1.5 mt-1">
                          <Ticket className="w-4 h-4 text-sky-400" />
                          Auditorium Hall 4 — Interstellar (IMAX 70mm)
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-mono text-emerald-400">Selected: {selectedSeat.join(', ') || 'None'}</div>
                        <div className="text-[10px] text-slate-400">Total: ${selectedSeat.length * 18.50} SGD</div>
                      </div>
                    </div>

                    {/* Interactive Auditorium Seat Grid */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col items-center">
                      <div className="w-3/4 h-2 bg-gradient-to-r from-transparent via-sky-400/80 to-transparent rounded-full mb-6 shadow-[0_0_12px_rgba(56,189,248,0.5)]" />
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Cinema Screen</div>

                      <div className="grid grid-cols-8 gap-2">
                        {['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
                          'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8',
                          'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'].map((seat) => {
                          const isOccupied = ['D3', 'D4', 'F7', 'F8'].includes(seat);
                          const isSelected = selectedSeat.includes(seat);

                          return (
                            <button
                              key={seat}
                              disabled={isOccupied}
                              onClick={() => {
                                if (isSelected) {
                                  setSelectedSeat(selectedSeat.filter(s => s !== seat));
                                } else {
                                  setSelectedSeat([...selectedSeat, seat]);
                                }
                              }}
                              className={`w-7 h-7 rounded-lg text-[10px] font-mono font-semibold transition-all ${
                                isOccupied
                                  ? 'bg-slate-800 text-slate-600 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-sky-400 text-slate-950 shadow-lg shadow-sky-400/40 scale-105'
                                  : 'bg-slate-900 border border-slate-700 text-slate-300 hover:border-sky-400'
                              }`}
                            >
                              {seat}
                            </button>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-4 mt-4 text-[10px] font-mono text-slate-400">
                        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-slate-900 border border-slate-700" /> Available</span>
                        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-sky-400" /> Selected</span>
                        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded bg-slate-800" /> Reserved</span>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'omni-invoice' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Receipt className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="text-sm font-bold text-slate-100">INV-2025-0841</div>
                          <div className="text-xs text-slate-400">Client: Nexus Cloud Media Pte Ltd</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-slate-400">Lifecycle Status:</span>
                        {(['Draft', 'Sent', 'Paid'] as const).map((s) => (
                          <button
                            key={s}
                            onClick={() => setInvoiceStatus(s)}
                            className={`px-2.5 py-1 rounded text-xs font-mono ${
                              invoiceStatus === s
                                ? 'bg-purple-500 text-slate-950 font-bold'
                                : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                      <div className="grid grid-cols-4 font-mono text-slate-500 pb-1 border-b border-slate-800">
                        <span className="col-span-2">Item Description</span>
                        <span>Qty</span>
                        <span className="text-right">Amount (SGD)</span>
                      </div>
                      <div className="grid grid-cols-4 text-slate-300">
                        <span className="col-span-2">Cloud Infrastructure Telemetry Engineering</span>
                        <span>40 hrs</span>
                        <span className="text-right font-mono">$3,800.00</span>
                      </div>
                      <div className="grid grid-cols-4 text-slate-300">
                        <span className="col-span-2">Tailwind Design System Token Audit</span>
                        <span>1 Sprint</span>
                        <span className="text-right font-mono">$1,450.00</span>
                      </div>
                      <div className="pt-2 border-t border-slate-800 flex justify-between font-mono font-bold text-emerald-400">
                        <span>Total (Incl. 9% GST):</span>
                        <span>$5,722.50 SGD</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Default Fallback Simulator for other projects */}
                {['auracraft', 'devpulse'].includes(project.id) && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="text-sm font-semibold text-slate-200">
                      Live Environment Simulator: {project.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.fullOverview}
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-center pt-2">
                      {project.stats?.map((s, i) => (
                        <div key={i} className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-xs text-slate-400 font-mono">{s.label}</div>
                          <div className="text-base font-bold text-emerald-400 mt-0.5">{s.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">
                    Problem Statement & Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.fullOverview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Key Engineered Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technologies in Production
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Architecture Tab */}
            {activeTab === 'architecture' && (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                    <Cpu className="w-4 h-4" />
                    <span>System Architecture & Engineering Decisions</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">
                    {project.architectureNotes}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.stats?.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#090d16] border border-slate-800 text-center">
                      <div className="text-xs font-mono text-slate-400">{stat.label}</div>
                      <div className="text-xl font-bold font-display text-slate-100 mt-1">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 px-6 border-t border-slate-800/80 bg-[#080c14] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono text-slate-400">
              Role: <span className="text-emerald-400">{project.role}</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 text-xs font-medium transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors shadow-md shadow-emerald-500/20"
              >
                <span>Launch Production URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
