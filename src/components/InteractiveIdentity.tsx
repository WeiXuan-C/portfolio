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
  name: 'Chong Wei Xuan (钟玮萱)',
  role: 'Software Developer & AI Systems Engineer',
  education: 'Multimedia University (MMU) • CGPA 3.93',
  awards: ['UNIMAS 8.0 Winner (Pavra)', 'CodeNection 2025 Winner (Studify)'],
  coreStack: ['Flutter', 'Next.js 15', 'React 19', 'Supabase', 'PostgreSQL', 'Gemma 3 VLM'],
  philosophy: "I don't just build software. I design digital experiences.",
  
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
      setExecutionOutput('✓ Compiled successfully in 42ms. Zero runtime warnings. Production ready.');
    }, 600);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto perspective-1000 py-6">
      {/* Ambient background glow */}
      <div 
        className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 rounded-3xl blur-2xl pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(16, 185, 129, 0.15), rgba(56, 189, 248, 0.08), transparent 70%)`
        }}
      />

      {/* Floating Tech Chips around container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute -top-4 -left-6 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d131f]/90 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 shadow-xl backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        TypeScript 5.x Strict
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="hidden lg:flex absolute -bottom-3 -right-4 z-20 items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d131f]/90 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-xl backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        React 19 & Next.js
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
        className="relative rounded-2xl bg-[#0b0f19]/95 border border-slate-800/90 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl"
      >
        {/* Terminal / Code Header Window Chrome */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/80 bg-[#090d15]">
          {/* Window action dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/50" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/50" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/50" />
            <span className="ml-2 text-xs font-mono text-slate-400 hidden sm:inline">
              weixuan@workstation: ~/portfolio
            </span>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-lg border border-slate-800">
            <button
              id="identity-tab-code"
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'code'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code2 className="w-3 h-3" />
              <span>kernel.ts</span>
            </button>
            <button
              id="identity-tab-arch"
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-3 h-3" />
              <span>sys_arch</span>
            </button>
            <button
              id="identity-tab-telemetry"
              onClick={() => setActiveTab('telemetry')}
              className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                activeTab === 'telemetry'
                  ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                  : 'text-slate-400 hover:text-slate-200'
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
              <div className="flex items-center justify-between text-[11px] text-slate-500 mb-3 pb-2 border-b border-slate-800/60">
                <span className="flex items-center gap-1 text-slate-400">
                  <span className="text-emerald-400">●</span> TypeScript 5.8 • ESM
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 text-slate-400 hover:text-slate-200 px-2 py-0.5 rounded hover:bg-slate-800 transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                  <button
                    onClick={runCode}
                    disabled={isRunning}
                    className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors disabled:opacity-50 shadow-sm shadow-emerald-500/20"
                  >
                    <Play className="w-3 h-3 fill-slate-950" />
                    <span>{isRunning ? 'Compiling...' : 'Run Kernel'}</span>
                  </button>
                </div>
              </div>

              <pre className="text-slate-300 leading-relaxed overflow-x-auto whitespace-pre font-mono text-[11.5px]">
                <code>
                  <span className="text-indigo-400">import</span> {'{'} <span className="text-emerald-300">Developer</span>, <span className="text-emerald-300">Experience</span>, <span className="text-emerald-300">AIModel</span> {'}'} <span className="text-indigo-400">from</span> <span className="text-amber-300">'@core/identity'</span>;{'\n\n'}
                  <span className="text-indigo-400">export const</span> <span className="text-cyan-300">weiXuan</span>: <span className="text-emerald-300">Developer</span> = {'{'}{'\n'}
                  {'  '}name: <span className="text-amber-300">'Chong Wei Xuan (钟玮萱)'</span>,{'\n'}
                  {'  '}role: <span className="text-amber-300">'Software Developer & AI Systems Engineer'</span>,{'\n'}
                  {'  '}education: <span className="text-amber-300">'MMU • CGPA 3.93'</span>,{'\n'}
                  {'  '}coreStack: [<span className="text-amber-300">'Flutter'</span>, <span className="text-amber-300">'Next.js 15'</span>, <span className="text-amber-300">'Supabase'</span>, <span className="text-amber-300">'Gemma 3 VLM'</span>],{'\n'}
                  {'  '}philosophy: <span className="text-amber-300">"I don't just build software. I design digital experiences."</span>,{'\n'}
                  {'  '}<span className="text-indigo-400">async</span> <span className="text-blue-300">deliverInnovation</span>() {'{'}{'\n'}
                  {'    '}<span className="text-indigo-400">return</span> AIModel.<span className="text-blue-300">orchestrate</span>({'{'} vision: <span className="text-amber-300">'Gemma 3 4B'</span>, map: <span className="text-amber-300">'Google Maps'</span> {'}'});{'\n'}
                  {'  '}{'}'}{'\n'}
                  {'}'};
                </code>
              </pre>

              {executionOutput && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 p-2.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[11px] flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>{executionOutput}</span>
                </motion.div>
              )}
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-3 py-1">
              <div className="text-[11px] text-slate-400 mb-2">
                System Topology & Engineering Architecture Blueprint:
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Cpu className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
                  <div className="font-semibold text-slate-200">Presentation</div>
                  <div className="text-[10px] text-slate-400">React 19 / Next.js</div>
                  <div className="text-[9px] text-emerald-400 mt-1 font-mono">Micro-interactions</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Database className="w-4 h-4 text-cyan-400 mx-auto mb-1.5" />
                  <div className="font-semibold text-slate-200">Core Services</div>
                  <div className="text-[10px] text-slate-400">Node.js / Express</div>
                  <div className="text-[9px] text-cyan-400 mt-1 font-mono">REST / WebSockets</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Wifi className="w-4 h-4 text-violet-400 mx-auto mb-1.5" />
                  <div className="font-semibold text-slate-200">Persistence</div>
                  <div className="text-[10px] text-slate-400">PostgreSQL / Supabase</div>
                  <div className="text-[9px] text-violet-400 mt-1 font-mono">Atomic ACID Locks</div>
                </div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/50 border border-slate-800/80 text-[11px] text-slate-400">
                <span className="text-emerald-300 font-semibold">Design Discipline:</span> Strict separation of concerns, defensive TypeScript typings, component-level accessibility, and automated test coverage.
              </div>
            </div>
          )}

          {activeTab === 'telemetry' && (
            <div className="space-y-3 py-1">
              <div className="text-[11px] text-slate-400 mb-2">
                Real-Time Workspace Health & Environment Telemetry:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <div className="text-[10px] text-slate-500">API PING</div>
                  <div className="text-base font-bold text-emerald-400">18 ms</div>
                  <div className="text-[9px] text-slate-400">Edge Gateway</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <div className="text-[10px] text-slate-500">TYPESCRIPT</div>
                  <div className="text-base font-bold text-cyan-400">Strict</div>
                  <div className="text-[9px] text-slate-400">0 Type Errors</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <div className="text-[10px] text-slate-500">LIGHTHOUSE</div>
                  <div className="text-base font-bold text-emerald-400">99.4</div>
                  <div className="text-[9px] text-slate-400">Perf / A11y</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
                  <div className="text-[10px] text-slate-500">STATUS</div>
                  <div className="text-base font-bold text-amber-400">Active</div>
                  <div className="text-[9px] text-slate-400">Open for Hire</div>
                </div>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-800/80">
                <span>Vite Bundler: Hot reload disabled for static stability</span>
                <span className="text-emerald-400">● 100% Uptime</span>
              </div>
            </div>
          )}

          {/* Footer Bar */}
          <div className="mt-4 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Interactive identity sandbox
            </span>
            <span className="text-slate-400 hidden sm:inline">Tilt card with mouse</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
