import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Send, Sparkles, CornerDownLeft, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

interface TerminalHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<{ onOpenResume?: () => void }> = ({ onOpenResume }) => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  const initialHistory: TerminalHistoryItem[] = [
    {
      command: 'whoami',
      output: (
        <div className="text-emerald-300 font-mono">
          Alex Chen — IT Student, Software Developer & UI/UX Craftsman
        </div>
      )
    },
    {
      command: 'skills',
      output: (
        <div className="text-slate-300 font-mono">
          React 19 • TypeScript • Next.js • Node.js • PostgreSQL • Supabase • Tailwind CSS • Figma
        </div>
      )
    },
    {
      command: 'currently_building',
      output: (
        <div className="text-cyan-300 font-mono">
          High-performance full-stack web applications & editorial digital design experiences.
        </div>
      )
    },
    {
      command: 'status',
      output: (
        <div className="text-emerald-400 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          available_for_new_projects (Full-Time / Internship / Contract)
        </div>
      )
    }
  ];

  const [history, setHistory] = useState<TerminalHistoryItem[]>(initialHistory);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode;

    switch (trimmed) {
      case 'whoami':
        outputNode = (
          <div className="text-emerald-300">
            {portfolioData.personal.name} — {portfolioData.personal.title} ({portfolioData.personal.location})
          </div>
        );
        break;
      case 'skills':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div><span className="text-emerald-400">Languages:</span> TypeScript, JavaScript, Python, C++, PHP</div>
            <div><span className="text-cyan-400">Frontend:</span> React 19, Next.js, Tailwind CSS, Framer Motion, HTML5</div>
            <div><span className="text-violet-400">Backend:</span> Node.js, Express, PostgreSQL, Supabase, REST APIs</div>
            <div><span className="text-pink-400">Design & Tools:</span> Figma, Git/GitHub, VS Code, Vercel</div>
          </div>
        );
        break;
      case 'currently_building':
        outputNode = (
          <div className="text-cyan-300">
            {portfolioData.personal.tagline} Currently refining Tripify AI and real-time distributed reservation architectures.
          </div>
        );
        break;
      case 'status':
        outputNode = (
          <div className="text-emerald-400 font-bold">
            🟢 Status: AVAILABLE_FOR_NEW_PROJECTS & Graduate Engineering Roles (2025/2026).
          </div>
        );
        break;
      case 'projects':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            {portfolioData.projects.map((p, i) => (
              <div key={p.id}>
                <span className="text-emerald-400">{i + 1}. {p.title}</span> — {p.tagline}
              </div>
            ))}
          </div>
        );
        break;
      case 'experience':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div>• <span className="text-emerald-400">CloudPulse Labs:</span> Software Engineering Intern (May 2024 – Dec 2024)</div>
            <div>• <span className="text-cyan-400">National University of Technology:</span> Teaching Assistant (Jan 2024 – May 2024)</div>
            <div>• <span className="text-amber-400">HackAsia 2024:</span> 1st Place Grand Winner (March 2024)</div>
          </div>
        );
        break;
      case 'contact':
        outputNode = (
          <div className="space-y-1 text-slate-300">
            <div>Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-emerald-400 underline">{portfolioData.personal.email}</a></div>
            <div>GitHub: <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{portfolioData.personal.github}</a></div>
            <div>LinkedIn: <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-blue-400 underline">{portfolioData.personal.linkedin}</a></div>
          </div>
        );
        break;
      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
        outputNode = (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
            <div className="font-bold text-sm">🎉 Permission Granted: ACCESS_UNLOCKED!</div>
            <div>Let's create extraordinary software together! Shoot me an email directly at {portfolioData.personal.email}.</div>
          </div>
        );
        break;
      case 'cat resume':
      case 'resume':
        if (onOpenResume) onOpenResume();
        outputNode = (
          <div className="text-cyan-300">
            Opening professional ATS-optimized resume generator... Check the Resume Mode tab!
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'help':
      default:
        outputNode = (
          <div className="space-y-1 text-slate-400">
            <div>Available commands:</div>
            <div className="text-slate-200">
              <span className="text-emerald-400">whoami</span>,{' '}
              <span className="text-emerald-400">skills</span>,{' '}
              <span className="text-emerald-400">currently_building</span>,{' '}
              <span className="text-emerald-400">status</span>,{' '}
              <span className="text-emerald-400">projects</span>,{' '}
              <span className="text-emerald-400">experience</span>,{' '}
              <span className="text-emerald-400">contact</span>,{' '}
              <span className="text-emerald-400">sudo hire</span>,{' '}
              <span className="text-emerald-400">cat resume</span>,{' '}
              <span className="text-emerald-400">clear</span>
            </div>
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: outputNode }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const suggestionChips = [
    'whoami',
    'skills',
    'currently_building',
    'status',
    'projects',
    'sudo hire',
    'cat resume'
  ];

  return (
    <section id="terminal-section" className="py-20 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>COMMAND LINE INTERFACE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Interactive Developer Terminal
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 hidden sm:inline">
            bash 5.2-release • node v22.14
          </span>
        </div>

        {/* Terminal Window Chrome */}
        <div className="rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-[#070a12]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-xs font-mono text-slate-400 ml-2">
                alexchen@portfolio: ~ (interactive shell)
              </span>
            </div>
            <button
              onClick={() => handleCommand('clear')}
              className="text-[11px] font-mono text-slate-500 hover:text-slate-300 px-2 py-0.5 rounded hover:bg-slate-900 transition-colors"
            >
              Clear Buffer
            </button>
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-5 py-2.5 bg-slate-950/60 border-b border-slate-800/60 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs font-mono">
            <span className="text-slate-500 text-[11px] whitespace-nowrap">Suggested:</span>
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                id={`terminal-chip-${chip.replace(/\s+/g, '-')}`}
                onClick={() => handleCommand(chip)}
                className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-emerald-500/20 hover:text-emerald-300 text-slate-400 border border-slate-800 text-[11px] whitespace-nowrap transition-colors"
              >
                ${chip}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div 
            onClick={() => inputRef.current?.focus()}
            className="p-5 font-mono text-xs sm:text-sm min-h-[300px] max-h-[420px] overflow-y-auto space-y-4 cursor-text"
          >
            {history.map((item, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-emerald-400">alex@portfolio:~$</span>
                  <span className="text-slate-100 font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 text-slate-300 leading-relaxed border-l border-slate-800">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Input Prompt */}
            <div className="flex items-center gap-2 text-slate-400 pt-1">
              <span className="text-emerald-400 font-bold">alex@portfolio:~$</span>
              <input
                ref={inputRef}
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'skills', 'status', or 'sudo hire'..."
                className="flex-1 bg-transparent text-slate-100 outline-none border-none font-mono text-xs sm:text-sm placeholder:text-slate-600"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                id="terminal-submit-btn"
                onClick={() => handleCommand(input)}
                className="p-1 rounded text-slate-400 hover:text-emerald-400 transition-colors"
                title="Send Command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
            <div ref={terminalEndRef} />
          </div>
        </div>
      </div>
    </section>
  );
};
