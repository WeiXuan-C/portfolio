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
  Play,
  Video,
  Bot,
  Compass,
  AlertTriangle,
  Bell,
  Search,
  FileText,
  ThumbsUp,
  RefreshCw,
  Clock,
  Award,
  Trophy,
  Lock,
  ShieldCheck
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation' | 'architecture'>(
    project?.isConfidential ? 'overview' : 'simulation'
  );
  const [showFullAwards, setShowFullAwards] = useState(false);

  // Tripify interactive state
  const [tripDest, setTripDest] = useState('Tokyo & Kyoto');
  const [activeAgent, setActiveAgent] = useState<'Researcher' | 'Planner' | 'Critic'>('Planner');
  const [hasVoted, setHasVoted] = useState(false);
  const [simulateDelay, setSimulateDelay] = useState(false);

  // Pavra interactive state
  const [selectedHazard, setSelectedHazard] = useState<'pothole' | 'crack' | 'debris'>('pothole');
  const [alertRadius, setAlertRadius] = useState(500);

  // Studify interactive state
  const [searchQuery, setSearchQuery] = useState('Machine learning backpropagation');
  const [videoTimestamp, setVideoTimestamp] = useState('04:15');

  // TeamSync interactive state
  const [aiTaskPrompt, setAiTaskPrompt] = useState('Implement Stripe Webhook Listener');
  const [isGeneratingTasks, setIsGeneratingTasks] = useState(false);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 15 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0a0a0f] border border-amber-500/30 rounded-3xl shadow-2xl shadow-black overflow-hidden max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/15 bg-[#060609]">
            <div className="flex items-center gap-3">
              <span 
                className="w-3 h-3 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" 
              />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-100">{project.title}</h3>
                <span className="text-xs font-mono text-amber-400">{project.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {project.isConfidential && (
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Company NDA Protected</span>
                </div>
              )}
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 text-xs font-medium transition-colors"
                  title="Watch Video Presentation on YouTube"
                >
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Pitch Video</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-xl bg-[#12121a] border border-amber-500/20 text-neutral-300 hover:text-white hover:border-amber-500/40 transition-colors"
                  title="View Source on GitHub"
                >
                  <Github className="w-4 h-4 text-amber-400" />
                </a>
              )}
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="p-2 rounded-xl bg-[#12121a] border border-amber-500/20 text-neutral-400 hover:text-white hover:border-amber-500/50 hover:bg-amber-500/10 transition-colors cursor-pointer"
                aria-label="Close Project Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Tab Selector with Smooth Indicator */}
          <div className="flex items-center gap-2 px-6 pt-3 border-b border-amber-500/15 bg-[#08080d] overflow-x-auto no-scrollbar">
            {(project.isConfidential ? [
              { id: 'overview', label: 'Internship Overview & System Responsibilities' },
              { id: 'simulation', label: 'QA Testing & Validation Protocol' },
              { id: 'architecture', label: 'Enterprise Environment & Tech Stack' },
            ] : [
              { id: 'simulation', label: 'Interactive Live Simulation' },
              { id: 'overview', label: 'System Overview & Features' },
              { id: 'architecture', label: 'Technical Architecture & Stack' },
            ]).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative pb-2.5 px-2 text-xs font-mono font-medium whitespace-nowrap transition-colors cursor-pointer ${
                    isActive ? 'text-amber-300 font-bold' : 'text-neutral-400 hover:text-neutral-200'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="modal-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-neutral-300 text-sm">
            {/* Simulation Tab */}
            {activeTab === 'simulation' && (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Interactive prototype playground previewing core engineering logic
                  </span>
                  <span className="font-mono text-[10px] bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30">Live Interactive Demo</span>
                </div>

                {/* Case 1: Tripify Multi-Agent Travel Planning Workspace */}
                {project.id === 'tripify' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Trip Destination & Scope</div>
                        <div className="text-sm font-semibold text-slate-100 flex items-center gap-2 mt-1">
                          <Compass className="w-4 h-4 text-cyan-400" />
                          <span>{tripDest} (3-Day Shared Itinerary)</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                        {(['Researcher', 'Planner', 'Critic'] as const).map((agent) => (
                          <button
                            key={agent}
                            onClick={() => setActiveAgent(agent)}
                            className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                              activeAgent === agent
                                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                                : 'text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {agent} Agent
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Multi-Agent LangGraph State Display */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2 font-mono text-cyan-400">
                          <Bot className="w-4 h-4" />
                          <span>LangGraph Agent State: [{activeAgent}]</span>
                        </div>
                        <span className="font-mono text-[10px] text-slate-500">Supabase Realtime Sync: ACTIVE</span>
                      </div>

                      {activeAgent === 'Researcher' && (
                        <div className="text-xs text-slate-300 space-y-2 font-mono">
                          <div className="text-emerald-400 font-bold">Querying Google Places & Routes APIs...</div>
                          <p className="text-slate-400">• Found 14 candidate spots matching group walking tolerance (max 1.5km)</p>
                          <p className="text-slate-400">• Weather forecast: Sunny on Day 1-2, 60% rain likelihood on Day 3</p>
                          <p className="text-slate-400">• Budget constraint: Group target RM 1,200/pax. Identified high value-for-money meals.</p>
                        </div>
                      )}

                      {activeAgent === 'Planner' && (
                        <div className="text-xs space-y-2">
                          <div className="font-mono text-emerald-400 font-semibold">
                            Proposal #04: Value-Optimized Day Sequence (Chong Wei Xuan data model)
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-sans">
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                              <span className="text-[10px] font-mono text-cyan-400">DAY 1</span>
                              <div className="font-semibold text-slate-200 text-xs mt-0.5">Shinjuku & Shibuya Crossing</div>
                              <div className="text-[11px] text-slate-400 mt-1">Route transit: 12m Metro • Group fit: 96%</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                              <span className="text-[10px] font-mono text-cyan-400">DAY 2</span>
                              <div className="font-semibold text-slate-200 text-xs mt-0.5">Shinkansen → Gion Kyoto</div>
                              <div className="text-[11px] text-slate-400 mt-1">Route transit: 2h 15m Bullet • Group fit: 92%</div>
                            </div>
                            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                              <span className="text-[10px] font-mono text-cyan-400">DAY 3</span>
                              <div className="font-semibold text-slate-200 text-xs mt-0.5">Arashiyama Bamboo Grove</div>
                              <div className="text-[11px] text-slate-400 mt-1">
                                {simulateDelay ? '⚠️ Rain fallback triggered: Kyoto Railway Museum' : 'Outdoor walk • Fallback: Indoor Arts'}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeAgent === 'Critic' && (
                        <div className="text-xs text-slate-300 space-y-2 font-mono">
                          <div className="text-amber-400 font-bold">Feasibility & Risk Verification:</div>
                          <p className="text-slate-400">• Timing check: 45m buffer between train arrival and hotel luggage drop (PASSED)</p>
                          <p className="text-slate-400">• Group fit: Balanced pacing for all 3 members (Sim Po, Jia Xuan, Wei Xuan)</p>
                          <p className="text-slate-400">• Budget delta: -12% below target ceiling via transit pass recommendation</p>
                        </div>
                      )}
                    </div>

                    {/* Proposal Diff & Voting Sandbox */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setHasVoted(!hasVoted)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                            hasVoted
                              ? 'bg-emerald-500 text-slate-950 font-bold'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                          }`}
                        >
                          <ThumbsUp className="w-3.5 h-3.5" />
                          <span>{hasVoted ? 'Proposal Accepted (3/3 Votes)' : 'Vote to Approve Proposal (2/3)'}</span>
                        </button>

                        <button
                          onClick={() => setSimulateDelay(!simulateDelay)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono border transition-all cursor-pointer ${
                            simulateDelay
                              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                          }`}
                        >
                          <RefreshCw className={`w-3.5 h-3.5 ${simulateDelay ? 'animate-spin' : ''}`} />
                          <span>{simulateDelay ? 'Disruption Active: Dynamic Replanned' : 'Simulate Rain / Delay Event'}</span>
                        </button>
                      </div>

                      <a
                        href="https://tripify-agent.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                      >
                        <span>tripify-agent.vercel.app</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Case 2: Pavra AI Road Safety App */}
                {project.id === 'pavra' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Google Gemma 3 4B VLM Camera Inference</div>
                        <div className="text-sm font-semibold text-slate-100 flex items-center gap-2 mt-1">
                          <AlertTriangle className="w-4 h-4 text-emerald-400" />
                          <span>Road Hazard Classifier & Proximity Broadcast</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 font-mono">Simulate Hazard:</span>
                        {(['pothole', 'crack', 'debris'] as const).map((h) => (
                          <button
                            key={h}
                            onClick={() => setSelectedHazard(h)}
                            className={`px-2.5 py-1 rounded-lg text-xs font-mono uppercase ${
                              selectedHazard === h
                                ? 'bg-emerald-500 text-slate-950 font-bold'
                                : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                          <span>VLM Vision Output:</span>
                          <span className="text-emerald-400">Confidence: 94.8%</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-1">
                          <div>Severity: <span className="text-rose-400 font-bold">CRITICAL HIGH</span></div>
                          <div>Type: <span className="text-cyan-300 font-semibold">{selectedHazard.toUpperCase()}</span> (Depth ~8cm)</div>
                          <div>Geo-Coordinates: <span className="text-emerald-400">2.2341° N, 102.2789° E</span></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-xs font-mono text-slate-400 flex items-center justify-between">
                          <span>Proximity Push Broadcast:</span>
                          <span className="text-amber-400">Radius: {alertRadius}m</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
                          <div className="flex items-center gap-2 text-amber-300">
                            <Bell className="w-4 h-4 text-amber-400" />
                            <span>OneSignal / Firebase Broadcast Sent</span>
                          </div>
                          <input
                            type="range"
                            min="100"
                            max="1000"
                            step="100"
                            value={alertRadius}
                            onChange={(e) => setAlertRadius(Number(e.target.value))}
                            className="w-full accent-emerald-400"
                          />
                          <div className="text-[10px] text-slate-500">Drivers entering within {alertRadius}m receive audio chime</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 3: Studify AI Tutoring Platform */}
                {project.id === 'studify' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-slate-400 font-mono">Dual-Embedding Semantic RAG Engine</div>
                        <div className="text-sm font-semibold text-slate-100 flex items-center gap-2 mt-1">
                          <Search className="w-4 h-4 text-sky-400" />
                          <span>E5-Small (384d) + BGE-M3 (1024d) Hybrid Search</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                        CodeNection 2025 Winner
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search lecture transcripts..."
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-slate-200 outline-none focus:border-sky-400"
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                        <div className="flex items-center justify-between font-mono text-[11px] text-slate-400 pb-1 border-b border-slate-800">
                          <span>Whisper Transcript Chunk</span>
                          <span className="text-sky-400">Cosine Match: 0.932 (E5) / 0.918 (BGE-M3)</span>
                        </div>
                        <p className="text-slate-300 leading-relaxed font-sans">
                          "...when we compute the gradient of the loss function with respect to the weights in layer <span className="text-sky-300 font-mono">L</span>, the chain rule allows us to propagate errors backward through intermediate activations..."
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-slate-500" />
                            Timestamp: {videoTimestamp} in Lecture 04
                          </span>
                          <a
                            href="https://studify-platform.vercel.app"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[11px] font-mono text-sky-400 hover:underline flex items-center gap-1"
                          >
                            <span>studify-platform.vercel.app</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 4: TeamSync Project Management System */}
                {project.id === 'teamsync' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="text-xs text-slate-400 font-mono">AI Task Decomposition & Stripe Workflow</div>
                        <div className="text-sm font-semibold text-slate-100 flex items-center gap-2 mt-1">
                          <Layers className="w-4 h-4 text-purple-400" />
                          <span>Automated Kanban Pipeline & Next-Intl Multi-Language</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20">
                        Final Year Project
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={aiTaskPrompt}
                          onChange={(e) => setAiTaskPrompt(e.target.value)}
                          className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-200 outline-none"
                        />
                        <button
                          onClick={() => {
                            setIsGeneratingTasks(true);
                            setTimeout(() => setIsGeneratingTasks(false), 600);
                          }}
                          className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs font-mono cursor-pointer"
                        >
                          {isGeneratingTasks ? 'Decomposing...' : 'AI Breakdown'}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-purple-400">TODO</div>
                          <div className="font-semibold text-slate-200 mt-1">Verify Stripe Signature</div>
                          <div className="text-[10px] text-slate-500 mt-1">Est. 2h • High Priority</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-amber-400">IN PROGRESS</div>
                          <div className="font-semibold text-slate-200 mt-1">Supabase RLS Policy Sync</div>
                          <div className="text-[10px] text-slate-500 mt-1">Est. 3h • Auth Guard</div>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                          <div className="text-[10px] font-mono text-emerald-400">COMPLETED</div>
                          <div className="font-semibold text-slate-200 mt-1">next-intl (EN/ZH/BM)</div>
                          <div className="text-[10px] text-slate-500 mt-1">Passed UAT test cases</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Case 5: Moabi PLT Enterprise Systems Suite */}
                {project.id === 'moabi-systems' && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Receipt className="w-4 h-4 text-amber-400" />
                        <div>
                          <div className="text-sm font-bold text-slate-100">Moabi QA Test Suite & Technical Documentation</div>
                          <div className="text-xs text-slate-400">Systems: Food POS • Malaysia LHDN e-Invoice • PMS</div>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                        Internship 2024
                      </span>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                      <div className="grid grid-cols-4 font-mono text-slate-500 pb-1 border-b border-slate-800">
                        <span className="col-span-2">QA Test Scenario / Documentation Artifact</span>
                        <span>Scope</span>
                        <span className="text-right">Validation</span>
                      </div>
                      <div className="grid grid-cols-4 text-slate-300">
                        <span className="col-span-2">LHDN e-Invoice XML/JSON Schema Validation</span>
                        <span>e-Invoice</span>
                        <span className="text-right font-mono text-emerald-400">PASSED (100%)</span>
                      </div>
                      <div className="grid grid-cols-4 text-slate-300">
                        <span className="col-span-2">Kitchen Display System (KDS) Realtime Sync</span>
                        <span>Food POS</span>
                        <span className="text-right font-mono text-emerald-400">PASSED (&lt;150ms)</span>
                      </div>
                      <div className="grid grid-cols-4 text-slate-300">
                        <span className="col-span-2">Technical API & Stakeholder Operation Manuals</span>
                        <span>PMS & Systems</span>
                        <span className="text-right font-mono text-cyan-400">PUBLISHED</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Default Fallback for others */}
                {!['tripify', 'pavra', 'studify', 'teamsync', 'moabi-systems'].includes(project.id) && (
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                    <div className="text-sm font-semibold text-slate-200">
                      Live Environment Simulator: {project.title}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.fullOverview}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">
                    Problem Statement & Engineering Solution
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                    {project.fullOverview}
                  </p>
                </div>

                {/* Optional Project Awards (Support Key Highlights vs Full Official Citations) */}
                {project.awardsList && project.awardsList.length > 0 && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-[#0d0d14] border border-amber-500/25 space-y-3.5 shadow-lg">
                    <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-amber-500/15">
                      <div className="flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-amber-400" />
                        <h4 className="text-xs font-mono text-amber-300 uppercase tracking-wider font-bold">
                          Competition Honors & Awards ({project.awardsList.length})
                        </h4>
                      </div>

                      {/* Mode toggle: Key Highlights vs Full Official Citations */}
                      <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[#07070a] border border-amber-500/20 text-[11px] font-mono">
                        <button
                          id="modal-awards-concise-btn"
                          onClick={() => setShowFullAwards(false)}
                          className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                            !showFullAwards
                              ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                              : 'text-neutral-400 hover:text-neutral-200'
                          }`}
                        >
                          Key Highlights
                        </button>
                        <button
                          id="modal-awards-full-btn"
                          onClick={() => setShowFullAwards(true)}
                          className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                            showFullAwards
                              ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40 shadow-sm'
                              : 'text-neutral-400 hover:text-neutral-200'
                          }`}
                        >
                          Full Official Information
                        </button>
                      </div>
                    </div>

                    {/* View 1: Key Highlights (Clean, compact, punchy) */}
                    {!showFullAwards ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.awardsList.map((aw) => (
                          <div
                            key={aw.shortName}
                            className={`p-3 rounded-xl border flex items-start gap-2.5 transition-all ${
                              aw.isKeyHighlight
                                ? 'bg-gradient-to-r from-amber-950/30 to-[#12121b] border-amber-500/35 text-neutral-200 shadow-sm'
                                : 'bg-[#101018] border-amber-500/15 text-neutral-300'
                            }`}
                          >
                            <Award className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                            <div className="space-y-0.5 min-w-0">
                              <div className="text-xs font-bold text-neutral-100 flex items-center gap-2">
                                <span>{aw.shortName}</span>
                                <span className="text-[10px] font-mono text-amber-400/80">({aw.year})</span>
                              </div>
                              <div className="text-[11px] text-neutral-400 truncate">
                                {aw.competition}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* View 2: Full Official Citations (Complete host, participants, official title) */
                      <div className="space-y-2.5">
                        {project.awardsList.map((aw, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-[#09090e] border border-amber-500/25 space-y-1.5"
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[11px] font-mono font-bold flex items-center justify-center flex-shrink-0">
                                  {idx + 1}
                                </span>
                                <span className="text-xs font-bold text-neutral-100 font-sans leading-snug">
                                  {aw.fullName}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/25 flex-shrink-0">
                                {aw.year}
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1.5 text-[11px] font-mono text-neutral-400 border-t border-amber-500/10">
                              <div>
                                <span className="text-neutral-500">Award: </span>
                                <span className="text-amber-300 font-medium">{aw.award}</span>
                              </div>
                              <div>
                                <span className="text-neutral-500">Hosted by: </span>
                                <span className="text-neutral-300">{aw.host}</span>
                              </div>
                              {aw.participants && (
                                <div>
                                  <span className="text-neutral-500">Participation: </span>
                                  <span className="text-yellow-400">{aw.participants}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                    Key Engineered Capabilities & Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-[#0f0f18] border border-amber-500/15 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2">
                    Technologies in Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-[#12121b] border border-amber-500/20 text-xs font-mono text-neutral-200">
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
                <div className="p-4 rounded-2xl bg-[#0f0f18] border border-amber-500/20 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Cpu className="w-4 h-4" />
                    <span>System Architecture & Engineering Decisions</span>
                  </div>
                  <p className="text-xs text-neutral-300 leading-relaxed font-mono">
                    {project.architectureNotes}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.stats?.map((stat, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#08080d] border border-amber-500/15 text-center">
                      <div className="text-xs font-mono text-neutral-400">{stat.label}</div>
                      <div className="text-lg font-bold font-display text-amber-300 mt-1">{stat.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 px-6 border-t border-amber-500/15 bg-[#060609] flex flex-wrap items-center justify-between gap-3">
            <div className="text-xs font-mono text-neutral-400">
              Role: <span className="text-amber-400">{project.role}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {project.videoUrl && (
                <a
                  href={project.videoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 text-xs font-medium transition-colors"
                >
                  <Video className="w-3.5 h-3.5" />
                  <span>Pitch Video</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#12121b] border border-amber-500/20 hover:border-amber-500/40 text-neutral-300 text-xs font-medium transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-amber-400" />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:brightness-110 text-neutral-950 text-xs font-bold transition-all shadow-md shadow-amber-500/20"
                >
                  <span>Live App / Deployment</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.isConfidential && (
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Company Confidential (No Public Links / NDA Protected)</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
