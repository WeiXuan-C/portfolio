import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Activity, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  Database, 
  Wifi, 
  Copy, 
  Check
} from 'lucide-react';

export const InteractiveIdentity: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'code' | 'architecture' | 'telemetry'>('code');
  const [isRunning, setIsRunning] = useState(false);
  const [executionOutput, setExecutionOutput] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Mouse tilt tracking
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6; // max 6 deg
    const rotateY = ((x - centerX) / centerX) * 6;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glowX, glowY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  };

  const codeSnippet = `// weixuan-chong/developer-profile.ts
import { Developer, Experience, AIModel } from '@core/identity';

export const weiXuan: Developer = {
  name: 'Chong Wei Xuan (张玮瑄)',
  role: 'Software Engineering Undergraduate (Year 3 Sem 3)',
  institution: 'Multimedia University (MMU), Cyberjaya',
  academics: 'Degree CGPA: 3.90 / 4.00 • Diploma CGPA: 3.93',
  awards: [
    'Inventx 2026 Gold Medal [International]',
    'CodeNection 2025 Most Impactful Project',
    'UNIMAS 8.0 1st Runner-Up & Best Testimonial',
    'YuKeSong 2025 Award of Excellence Certificate'
  ],
  coreStack: ['Flutter', 'Next.js 15', 'React 19', 'Supabase', 'Gemma 3 4B VLM', 'LangGraph'],
  philosophy: "I don't just build software. I design resilient digital experiences.",
  
  async deliverInnovation(problem: string): Promise<Solution> {
    const aiPipeline = await AIModel.orchestrate({ vision: 'Gemma 3 4B', rag: 'Dual-Embedding' });
    const mobileUI = await Flutter.sculptErgonomics({ mapIntegration: 'Google Maps' });
    return aiPipeline.fuseWith(mobileUI);
  }
};`;

  const runCode = () => {
    setIsRunning(true);
    setExecutionOutput(null);
    setTimeout(() => {
      setIsRunning(false);
      setExecutionOutput('✓ Compiled successfully in 38ms. Zero warnings. Production ready.');
    }, 600);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000 py-6">
      {/* Ambient background glow (Gold / Amber) */}
      <div 
        className="absolute -inset-4 rounded-3xl blur-2xl pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(245, 158, 11, 0.16), rgba(212, 175, 55, 0.08), transparent 70%)`
        }}
      />

      {/* Floating Tech Chips around container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute -top-4 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0e]/95 border border-amber-500/35 text-[11px] font-mono text-amber-300 shadow-xl backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        TypeScript 5.8 Strict
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden lg:flex absolute -bottom-3 -right-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0a0e]/95 border border-amber-500/35 text-[11px] font-mono text-yellow-300 shadow-xl backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
        React 19 & Next.js 15
      </motion.div>

      {/* Main Interactive Window */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: 'transform 0.15s ease-out'
        }}
        className="relative rounded-2xl bg-[#09090d]/95 border border-amber-500/25 shadow-2xl shadow-black/90 overflow-hidden backdrop-blur-xl"
      >
        {/* Terminal / Code Header Window Chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-amber-500/20 bg-[#0c0c12]">
          {/* Window action dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/50" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/50" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block border border-yellow-500/50" />
            <span className="ml-2 text-xs font-mono text-neutral-400 hidden sm:inline">
              weixuan@mmu-cyberjaya: ~/portfolio
            </span>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 bg-[#12121a] p-1 rounded-lg border border-amber-500/20">
            <button
              id="identity-tab-code"
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>kernel.ts</span>
            </button>
            <button
              id="identity-tab-arch"
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'architecture'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>sys_arch</span>
            </button>
            <button
              id="identity-tab-telemetry"
              onClick={() => setActiveTab('telemetry')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                activeTab === 'telemetry'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <Activity className="w-3 h-3" />
              <span>telemetry</span>
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 font-mono text-xs min-h-[260px] flex flex-col justify-between">
          {activeTab === 'code' && (
            <div>
              <div className="flex items-center justify-between text-[11px] text-neutral-500 mb-3 pb-2 border-b border-amber-500/15">
                <span className="flex items-center gap-1 text-neutral-400">
                  <span className="text-amber-400">●</span> TypeScript 5.8 • ESM Architecture
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 text-neutral-400 hover:text-neutral-200 px-2 py-0.5 rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-3 h-3 text-amber-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 px-3 py-1 rounded bg-gradient-to-r from-amber-400 to-yellow-400 text-neutral-950 font-bold hover:brightness-110 transition-colors disabled:opacity-50 shadow-sm cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-neutral-950" />
                    <span>{isRunning ? 'Compiling...' : 'Run Kernel'}</span>
                  </button>
                </div>
              </div>

              <pre className="text-neutral-300 leading-relaxed overflow-x-auto whitespace-pre font-mono text-[11.5px]">
                <code>
                  <span className="text-amber-400">import</span> {'{'} <span className="text-yellow-200">Developer</span>, <span className="text-yellow-200">Experience</span>, <span className="text-yellow-200">AIModel</span> {'}'} <span className="text-amber-400">from</span> <span className="text-amber-300">'@core/identity'</span>;{'\n\n'}
                  <span className="text-amber-400">export const</span> <span className="text-yellow-300 font-bold">weiXuan</span>: <span className="text-yellow-200">Developer</span> = {'{'}{'\n'}
                  {'  '}name: <span className="text-amber-200 font-semibold">'Chong Wei Xuan (张玮瑄)'</span>,{'\n'}
                  {'  '}status: <span className="text-amber-200">'Student • Bachelor of CS (SE), MMU Cyberjaya'</span>,{'\n'}
                  {'  '}academics: <span className="text-amber-200">'Degree CGPA: 3.90 (Yr 3 Sem 3) • Diploma: 3.93'</span>,{'\n'}
                  {'  '}honors: [<span className="text-amber-300">'Inventx 2026 Gold Medal'</span>, <span className="text-amber-300">'CodeNection Impact'</span>, <span className="text-amber-300">'UNIMAS 8.0 Double Award'</span>],{'\n'}
                  {'  '}coreStack: [<span className="text-amber-300">'Flutter'</span>, <span className="text-amber-300">'Next.js 15'</span>, <span className="text-amber-300">'Supabase'</span>, <span className="text-amber-300">'Gemma 3 VLM'</span>],{'\n'}
                  {'  '}projects: [<span className="text-amber-300">'Tripify'</span>, <span className="text-amber-300">'Pavra'</span>, <span className="text-amber-300">'Studify'</span>, <span className="text-amber-300">'TeamSync'</span>],{'\n'}
                  {'  '}<span className="text-amber-400">async</span> <span className="text-yellow-300">deliverInnovation</span>() {'{'}{'\n'}
                  {'    '}<span className="text-amber-400">return</span> AIModel.<span className="text-yellow-300">orchestrate</span>({'{'} vlm: <span className="text-amber-300">'Gemma 3 4B'</span>, rag: <span className="text-amber-300">'Dual-Embedding'</span> {'}'});{'\n'}
                  {'  '}{'}'}{'\n'}
                  {'}'};
                </code>
              </pre>

              {executionOutput && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{executionOutput}</span>
                </motion.div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-3 py-1">
              <div className="text-[11px] text-neutral-400 mb-2">
                System Topology & Engineering Architecture Blueprint:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl bg-[#0e0e14] border border-amber-500/20">
                  <Cpu className="w-4 h-4 text-amber-400 mx-auto mb-1.5" />
                  <div className="font-semibold text-neutral-200">Presentation</div>
                  <div className="text-[10px] text-neutral-400">Flutter / Next.js 15</div>
                  <div className="text-[9px] text-amber-300 mt-1 font-mono">Micro-interactions</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0e0e14] border border-amber-500/20">
                  <Database className="w-4 h-4 text-yellow-400 mx-auto mb-1.5" />
                  <div className="font-semibold text-neutral-200">Core Services</div>
                  <div className="text-[10px] text-neutral-400">Node.js / Express</div>
                  <div className="text-[9px] text-yellow-300 mt-1 font-mono">REST / WebSockets</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0e0e14] border border-amber-500/20">
                  <Wifi className="w-4 h-4 text-amber-300 mx-auto mb-1.5" />
                  <div className="font-semibold text-neutral-200">Persistence</div>
                  <div className="text-[10px] text-neutral-400">PostgreSQL / Supabase</div>
                  <div className="text-[9px] text-amber-300 mt-1 font-mono">Atomic ACID Locks</div>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-[#0e0e14] border border-amber-500/20 text-[11px] text-neutral-400">
                <span className="text-amber-300 font-semibold">Design Discipline:</span> Strict separation of concerns, defensive TypeScript typings, component-level accessibility, and comprehensive QA testing.
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-3 py-1">
              <div className="text-[11px] text-neutral-400 mb-2">
                Real-Time Workspace Health & Academic Telemetry:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-2.5 rounded-lg bg-[#0e0e14] border border-amber-500/20">
                  <div className="text-[10px] text-neutral-500">CGPA</div>
                  <div className="text-base font-bold text-amber-300">3.90</div>
                  <div className="text-[9px] text-neutral-400">Degree Sem 3</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e0e14] border border-amber-500/20">
                  <div className="text-[10px] text-neutral-500">HACKATHONS</div>
                  <div className="text-base font-bold text-yellow-400">4x Wins</div>
                  <div className="text-[9px] text-neutral-400">Gold Medalist</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e0e14] border border-amber-500/20">
                  <div className="text-[10px] text-neutral-500">TYPESCRIPT</div>
                  <div className="text-base font-bold text-amber-300">Strict</div>
                  <div className="text-[9px] text-neutral-400">0 Type Errors</div>
                </div>
                <div className="p-2.5 rounded-lg bg-[#0e0e14] border border-amber-500/20">
                  <div className="text-[10px] text-neutral-500">STATUS</div>
                  <div className="text-base font-bold text-amber-300">Student</div>
                  <div className="text-[9px] text-neutral-400">MMU Cyberjaya</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-2 border-t border-amber-500/15">
                <span>Degree: Bachelor of Computer Science (SE)</span>
                <span className="text-amber-400">● Full-Time Student</span>
              </div>
            </div>
          )}

          {/* Footer Bar */}
          <div className="mt-4 pt-2.5 border-t border-amber-500/15 flex items-center justify-between text-[10px] text-neutral-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Interactive identity sandbox
            </span>
            <span className="text-neutral-400 hidden sm:inline">Tilt card with mouse</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
