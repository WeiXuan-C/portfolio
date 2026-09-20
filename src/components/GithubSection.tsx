import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  GitCommit, 
  GitFork, 
  Star, 
  Sparkles, 
  ExternalLink,
  Code2,
  Calendar,
  Flame
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const GithubSection: React.FC = () => {
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);

  // Generate 52 weeks x 7 days simulated contribution grid with realistic distribution
  const generateContributionWeeks = () => {
    const weeks: Array<Array<{ date: string; level: number; count: number }>> = [];
    const today = new Date();

    for (let w = 51; w >= 0; w--) {
      const days = [];
      for (let d = 0; d < 7; d++) {
        const daysAgo = w * 7 + (6 - d);
        const date = new Date(today);
        date.setDate(today.getDate() - daysAgo);
        const dateStr = date.toISOString().split('T')[0];

        // Seeded pseudorandom activity
        const pseudoRandom = Math.sin(daysAgo * 997) * 10000;
        const rand = pseudoRandom - Math.floor(pseudoRandom);
        let level = 0;
        let count = 0;

        // Skip some weekends or create streaks
        if (rand > 0.4) {
          count = Math.floor(rand * 9) + 1;
          if (count <= 2) level = 1;
          else if (count <= 5) level = 2;
          else if (count <= 8) level = 3;
          else level = 4;
        }

        days.push({ date: dateStr, level, count });
      }
      weeks.push(days);
    }
    return weeks;
  };

  const weeks = generateContributionWeeks();

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return 'bg-emerald-950/60 border border-emerald-900/40';
      case 2:
        return 'bg-emerald-800/80 border border-emerald-700/60';
      case 3:
        return 'bg-emerald-500 border border-emerald-400/80';
      case 4:
        return 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]';
      default:
        return 'bg-[#0e1320] border border-slate-800/60';
    }
  };

  const pinnedRepos = [
    {
      name: "tripify-ai",
      desc: "Autonomous multi-day travel planner with graph routing & Leaflet integration.",
      lang: "TypeScript",
      langColor: "#38bdf8",
      stars: 128,
      forks: 24,
      url: "https://github.com/alexchendev/tripify-ai"
    },
    {
      name: "cinepass-realtime",
      desc: "High-concurrency cinema reservation engine with atomic PostgreSQL locks.",
      lang: "TypeScript",
      langColor: "#38bdf8",
      stars: 94,
      forks: 18,
      url: "https://github.com/alexchendev/cinepass-booking"
    },
    {
      name: "omni-invoice-core",
      desc: "Enterprise Peppol e-invoice generator with strict decimal arithmetic & PDF worker.",
      lang: "TypeScript",
      langColor: "#38bdf8",
      stars: 62,
      forks: 11,
      url: "https://github.com/alexchendev/omni-invoice-system"
    },
    {
      name: "ui-ux-design-tokens",
      desc: "Mathematical design tokens synchronized between Figma and Tailwind CSS v4.",
      lang: "CSS / Design",
      langColor: "#ec4899",
      stars: 154,
      forks: 32,
      url: "https://github.com/alexchendev/cloudscale-tokens"
    }
  ];

  return (
    <section id="github-section" className="py-24 px-4 sm:px-6 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
              <Github className="w-3.5 h-3.5" />
              <span>OPEN SOURCE & REPOSITORY ACTIVITY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 tracking-tight">
              Consistent Commit Cadence & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                Open Source Contributions.
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-xs font-mono text-slate-200 transition-colors"
            >
              <Github className="w-4 h-4 text-emerald-400" />
              <span>Follow on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Heatmap Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0d121f] to-[#080b12] border border-slate-800/90 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-3">
              <GitCommit className="w-5 h-5 text-emerald-400" />
              <div>
                <span className="text-sm font-bold text-slate-200">1,420+ Contributions in the Last Year</span>
                <div className="text-xs font-mono text-slate-500">Repository Commits, PRs, and Code Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-300">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                42-Day Active Streak
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="text-emerald-400">Top 3% Collegiate Contributor</span>
            </div>
          </div>

          {/* 52-Week Grid (Scrollable on small mobile) */}
          <div className="overflow-x-auto pb-2">
            <div className="inline-flex flex-col gap-1 min-w-[700px]">
              <div className="flex gap-1">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        onMouseEnter={() => setHoveredDay({ date: day.date, count: day.count })}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-3 h-3 rounded-sm transition-all duration-150 cursor-pointer hover:scale-125 ${getCellColor(
                          day.level
                        )}`}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Heatmap Legend and Hover Detail */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono text-slate-400 gap-2 pt-2 border-t border-slate-800/60">
            <div>
              {hoveredDay ? (
                <span className="text-emerald-300">
                  {hoveredDay.count} contributions on {hoveredDay.date}
                </span>
              ) : (
                <span className="text-slate-500">Hover over any square for daily activity details</span>
              )}
            </div>

            <div className="flex items-center gap-1.5 self-end sm:self-auto">
              <span className="text-[11px] text-slate-500 mr-1">Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-[#0e1320] border border-slate-800" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950/60" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800/80" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
              <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
              <span className="text-[11px] text-slate-500 ml-1">More</span>
            </div>
          </div>
        </div>

        {/* Pinned Repositories Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {pinnedRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl bg-[#0c101c]/90 border border-slate-800 hover:border-slate-700 hover:bg-[#0f1422] transition-all group flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{repo.desc}</p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.langColor }} />
                  {repo.lang}
                </span>
                <span className="flex items-center gap-1 text-slate-300">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <GitFork className="w-3 h-3" />
                  {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
