import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Twitter, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2,
  Phone,
  MapPin
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrProject: 'Full-Time Engineering Role',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.7 }
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative border-t border-amber-500/15 bg-gradient-to-b from-[#070709] via-[#0b0b0f] to-[#050507] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-t from-amber-500/10 via-yellow-500/5 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-100 tracking-tight">
            Let's connect & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-200">
              create impact together.
            </span>
          </h2>
          <p className="text-base text-neutral-400 leading-relaxed font-sans">
            Currently studying Software Engineering at MMU Cyberjaya (Year 3 Sem 3, CGPA 3.90).
            Open to hackathon teaming, open-source development, software QA testing, and tech discussions.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Credentials & Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0b0b10] border border-amber-500/20 shadow-2xl space-y-6">
              <h3 className="text-lg font-bold text-neutral-100">
                Direct Contact & Channels
              </h3>

              {/* Email Card with 1-click Copy */}
              <div className="p-4 rounded-2xl bg-[#121218] border border-amber-500/20 space-y-2">
                <div className="text-xs font-mono text-neutral-400 flex items-center justify-between">
                  <span>PRIMARY INBOX</span>
                  <span className="text-amber-400">Response &lt; 24h</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-neutral-200 truncate">
                    {portfolioData.personal.email}
                  </span>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <button
                      id="contact-copy-email-btn"
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg bg-[#1a1a24] hover:bg-[#222230] text-neutral-300 hover:text-amber-400 transition-colors cursor-pointer"
                      title="Copy Email Address"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                    <a
                      href={`mailto:${portfolioData.personal.email}`}
                      className="p-2 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-500 hover:brightness-110 text-neutral-950 font-semibold transition-all"
                      title="Open Mail Client"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location & Contact Info */}
              <div className="space-y-3 text-xs font-mono text-neutral-400">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#121218]/80 border border-amber-500/15">
                  <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="text-neutral-200 font-medium">Location & University</div>
                    <div>{portfolioData.personal.location}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#121218]/80 border border-amber-500/15">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-neutral-200 font-medium">Direct Telephone / WhatsApp</div>
                      <div>{portfolioData.personal.phone}</div>
                    </div>
                  </div>
                  {portfolioData.personal.whatsapp && (
                    <a
                      href={`https://wa.me/${portfolioData.personal.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 text-[11px] font-semibold transition-colors flex items-center gap-1"
                    >
                      Chat
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-2 border-t border-amber-500/15 space-y-2">
                <div className="text-xs font-mono text-neutral-500">PROFILES & NETWORKS:</div>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#121218] border border-amber-500/15 hover:border-amber-500/35 text-neutral-300 hover:text-white transition-colors text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-neutral-400" />
                      GitHub
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>

                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#121218] border border-amber-500/15 hover:border-amber-500/35 text-neutral-300 hover:text-white transition-colors text-xs"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-amber-400" />
                      LinkedIn
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0b0b10] border border-amber-500/20 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-100">Message Dispatched!</h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Thank you, <span className="text-amber-300 font-semibold">{formData.name}</span>. I have received your message and will reply to <span className="text-yellow-300 font-mono">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', roleOrProject: 'Hackathon / Competition Teaming', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-[#121218] border border-amber-500/30 text-xs font-mono text-amber-300 hover:text-white transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-neutral-300">
                        Your Name / Organization *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah / Hackathon Team"
                        className="w-full px-4 py-3 rounded-xl bg-[#07070a] border border-amber-500/20 focus:border-amber-400 text-neutral-100 text-sm outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-neutral-300">
                        Your Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#07070a] border border-amber-500/20 focus:border-amber-400 text-neutral-100 text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-role" className="text-xs font-mono text-neutral-300">
                      Collaboration Topic / Subject
                    </label>
                    <select
                      id="contact-role"
                      value={formData.roleOrProject}
                      onChange={(e) => setFormData({ ...formData, roleOrProject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#07070a] border border-amber-500/20 focus:border-amber-400 text-neutral-100 text-sm outline-none transition-colors font-sans"
                    >
                      <option value="Hackathon / Competition Teaming">Hackathon / Competition Teaming</option>
                      <option value="Open Source Collaboration">Open Source Project Collaboration</option>
                      <option value="Software QA & Testing Inquiry">Software QA, SIT/UAT & Documentation Discussion</option>
                      <option value="Academic & Research Exchange">Academic & Student Exchange (MMU Cyberjaya)</option>
                      <option value="General Technical Inquiry">Saying Hello & Technical Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-neutral-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share hackathon idea, collaboration plan, or questions..."
                      className="w-full px-4 py-3 rounded-xl bg-[#07070a] border border-amber-500/20 focus:border-amber-400 text-neutral-100 text-sm outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    id="contact-submit-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-neutral-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:brightness-110 transition-all disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message to {portfolioData.personal.name}</span>
                        <Send className="w-4 h-4" />
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-20 pt-8 border-t border-amber-500/15 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {portfolioData.personal.name} ({portfolioData.personal.chineseName}).</span>
            <span>MMU Cyberjaya CS(SE) Undergrad.</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-neutral-400">
            <span>Black & Gold Luxury Edition</span>
            <span>•</span>
            <span>Inventx 2026 Gold Medalist</span>
          </div>
        </div>
      </div>
    </section>
  );
};
