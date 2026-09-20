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
        <div className="text-amber-300 font-mono">
          Chong Wei Xuan (张玮瑄) — Software Engineering Undergraduate (MMU Cyberjaya • Year 3 Sem 3, CGPA 3.90)
        </div>
      )
    },
    {
      command: 'skills',
      output: (
        <div className="text-neutral-300 font-mono">
          Flutter • Next.js 15 • React 19 • Supabase • PostgreSQL • Google Gemma 3 4B VLM • Whisper • LangGraph • QA Testing • Documentation
        </div>
      )
    },
    {
      command: 'currently_building',
      output: (
        <div className="text-yellow-300 font-mono">
          Tripify (CodeNection 2026 collaborative travel workspace), Pavra (UNIMAS 8.0 1st Runner-Up & Best Testimonial) & Studify (Inventx 2026 Gold Medalist).
        </div>
      )
    },
    {
      command: 'status',
      output: (
        <div className="text-amber-400 font-mono flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
          Undergraduate Student @ MMU Cyberjaya • Bachelor of Computer Science (SE) • CGPA 3.90
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
          <div className="text-amber-300">
            {portfolioData.personal.name} ({portfolioData.personal.chineseName}) — {portfolioData.personal.title} • {portfolioData.personal.location}
          </div>
        );
        break;
      case 'skills':
        outputNode = (
          <div className="space-y-1 text-neutral-300">
            <div><span className="text-amber-400">Web Apps & Frontend:</span> Next.js 15, React 19, TypeScript, Tailwind CSS, Redux, Flutter (Mobile)</div>
            <div><span className="text-yellow-300">Backend & Cloud:</span> Supabase (Auth, Postgres, Realtime), PostgreSQL, MySQL, Redis, OneSignal</div>
            <div><span className="text-amber-200">AI & Multi-Agent:</span> LangGraph Multi-Agent, Google Gemma 3 4B VLM, Whisper, Dual-Embedding RAG</div>
            <div><span className="text-neutral-300">QA & Documentation:</span> System Testing (SIT/UAT), Technical Documentation, Git/GitHub, Vercel</div>
          </div>
        );
        break;
      case 'currently_building':
        outputNode = (
          <div className="text-yellow-300">
            Tripify (CodeNection 2026 collaborative travel workspace), Pavra (AI Road Safety) & Studify (Multimodal Tutoring).
          </div>
        );
        break;
      case 'status':
        outputNode = (
          <div className="text-amber-400 font-bold">
            🟢 Status: Currently enrolled in Bachelor of Computer Science (SE) at MMU Cyberjaya, 3rd Year 3rd Semester, CGPA 3.90.
          </div>
        );
        break;
      case 'projects':
        outputNode = (
          <div className="space-y-1 text-neutral-300">
            {portfolioData.projects.map((p, i) => (
              <div key={p.id}>
                <span className="text-amber-300">{i + 1}. {p.title}</span> — {p.tagline}
              </div>
            ))}
          </div>
        );
        break;
      case 'experience':
      case 'awards':
        outputNode = (
          <div className="space-y-1 text-neutral-300">
            <div>• <span className="text-amber-300">Inventx 2026:</span> Gold Medal [International Competition] — Studify</div>
            <div>• <span className="text-amber-300">CodeNection 2025:</span> Most Impactful Project (900+ participants) — Studify</div>
            <div>• <span className="text-yellow-400">UNIMAS 8.0:</span> Product Category 1st Runner-Up & Best Testimonial Award — Pavra</div>
            <div>• <span className="text-amber-200">YuKeSong 2025:</span> Award of Excellence Certificate (111 participants) — Studify</div>
            <div>• <span className="text-amber-300">Moabi Enterprise:</span> Software Engineering Intern — QA Testing & Documentation (2024.07 – 2024.10)</div>
            <div>• <span className="text-yellow-300">CodeNection 2026:</span> Tripify Project Entry</div>
          </div>
        );
        break;
      case 'contact':
        outputNode = (
          <div className="space-y-1 text-neutral-300">
            <div>Email: <a href={`mailto:${portfolioData.personal.email}`} className="text-amber-300 underline">{portfolioData.personal.email}</a></div>
            <div>WhatsApp: <a href={`https://wa.me/601165200275`} target="_blank" rel="noreferrer" className="text-amber-300 underline">{portfolioData.personal.phone}</a></div>
            <div>GitHub: <a href={portfolioData.personal.github} target="_blank" rel="noreferrer" className="text-amber-300 underline">{portfolioData.personal.github}</a></div>
            <div>LinkedIn: <a href={portfolioData.personal.linkedin} target="_blank" rel="noreferrer" className="text-amber-300 underline">{portfolioData.personal.linkedin}</a></div>
          </div>
        );
        break;
      case 'sudo hire':
      case 'hire':
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#fbbf24', '#d4af37', '#ffffff']
        });
        outputNode = (
          <div className="p-3 rounded-xl bg-amber-500/15 border border-amber-500/40 text-amber-300 space-y-1">
            <div className="font-bold text-sm">✨ Permission Granted: EXCELLENCE_VERIFIED!</div>
            <div>Degree: Bachelor of CS (Software Engineering) MMU Cyberjaya • CGPA 3.90 • 4x Hackathon Winner!</div>
          </div>
        );
        break;
      case 'cat resume':
      case 'resume':
        if (onOpenResume) onOpenResume();
        outputNode = (
          <div className="text-yellow-300">
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
          <div className="space-y-1 text-neutral-400">
            <div>Available commands:</div>
            <div className="text-neutral-200">
              <span className="text-amber-300">whoami</span>,{' '}
              <span className="text-amber-300">skills</span>,{' '}
              <span className="text-amber-300">currently_building</span>,{' '}
              <span className="text-amber-300">status</span>,{' '}
              <span className="text-amber-300">projects</span>,{' '}
              <span className="text-amber-300">experience</span>,{' '}
              <span className="text-amber-300">awards</span>,{' '}
              <span className="text-amber-300">contact</span>,{' '}
              <span className="text-amber-300">sudo hire</span>,{' '}
              <span className="text-amber-300">cat resume</span>,{' '}
              <span className="text-amber-300">clear</span>
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
    'awards',
    'sudo hire',
    'cat resume'
  ];

  return (
    <section id="terminal-section" className="py-20 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#0b0b0f] to-[#070709]">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono mb-2">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>COMMAND LINE INTERFACE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-tight">
              Interactive Developer Terminal
            </h2>
          </div>
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline">
            bash 5.2-release • node v22.14
          </span>
        </div>

        {/* Terminal Window Chrome */}
        <div className="rounded-3xl bg-[#09090e] border border-amber-500/25 shadow-2xl shadow-black/90 overflow-hidden">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-amber-500/20 bg-[#07070b]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
              <span className="text-xs font-mono text-neutral-400 ml-2">
                weixuan@mmu-cyberjaya: ~ (interactive shell)
              </span>
            </div>
            <button
              onClick={() => handleCommand('clear')}
              className="text-[11px] font-mono text-neutral-500 hover:text-amber-300 px-2 py-0.5 rounded hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              Clear Buffer
            </button>
          </div>

          {/* Quick Command Suggestions */}
          <div className="px-5 py-2.5 bg-[#050508] border-b border-amber-500/15 flex items-center gap-1.5 overflow-x-auto no-scrollbar text-xs font-mono">
            <span className="text-neutral-500 text-[11px] whitespace-nowrap">Suggested:</span>
            {suggestionChips.map((chip) => (
              <button
                key={chip}
                id={`terminal-chip-${chip.replace(/\s+/g, '-')}`}
                onClick={() => handleCommand(chip)}
                className="px-2.5 py-1 rounded-lg bg-[#101017] hover:bg-amber-500/20 hover:text-amber-300 text-neutral-400 border border-amber-500/20 text-[11px] whitespace-nowrap transition-colors cursor-pointer"
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
                <div className="flex items-center gap-2 text-neutral-400">
                  <span className="text-amber-400">weixuan@mmu:~$</span>
                  <span className="text-neutral-100 font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 text-neutral-300 leading-relaxed border-l border-amber-500/20">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Current Input Prompt */}
            <div className="flex items-center gap-2 text-neutral-400 pt-1">
              <span className="text-amber-400 font-bold">weixuan@mmu:~$</span>
              <input
                ref={inputRef}
                id="terminal-input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type 'help', 'skills', 'awards', or 'status'..."
                className="flex-1 bg-transparent text-neutral-100 outline-none border-none font-mono text-xs sm:text-sm placeholder:text-neutral-600"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                id="terminal-submit-btn"
                onClick={() => handleCommand(input)}
                className="p-1 rounded text-neutral-400 hover:text-amber-300 transition-colors cursor-pointer"
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
