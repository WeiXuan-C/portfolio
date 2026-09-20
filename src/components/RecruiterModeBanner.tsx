import React from 'react';
import { motion } from 'motion/react';
import { 
  UserCheck, 
  FileText, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ExternalLink,
  Download
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface RecruiterModeBannerProps {
  onDisable: () => void;
  onOpenResume: () => void;
}

export const RecruiterModeBanner: React.FC<RecruiterModeBannerProps> = ({ 
  onDisable, 
  onOpenResume 
}) => {
  return (
    <div className="bg-amber-500/10 border-b border-amber-500/30 text-amber-200 py-3 px-4 sm:px-6 relative z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="p-1 rounded bg-amber-400 text-slate-950 font-bold text-[10px] uppercase font-mono">
            RECRUITER MODE ACTIVE
          </span>
          <span className="text-slate-200">
            Animations reduced. Fast-scan candidate brief & direct contact actions enabled.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="recruiter-open-resume"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 text-slate-950 font-bold hover:bg-emerald-400 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Generate Official Resume</span>
          </button>
          <button
            id="recruiter-exit-mode"
            onClick={onDisable}
            className="text-slate-400 hover:text-slate-200 underline font-mono text-[11px]"
          >
            Switch back to Creative Mode
          </button>
        </div>
      </div>
    </div>
  );
};
