'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { PERSONAL_INFO } from '@/data/resume-data';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  FileDown, 
  Send, 
  ExternalLink,
  MapPin,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: 'DevOps Engineer Full-time Opportunity',
    message: '',
  });

  const handleCopy = (type: 'email' | 'phone') => {
    if (type === 'email') {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      navigator.clipboard.writeText(PERSONAL_INFO.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      formState.subject
    )}&body=${encodeURIComponent(
      `Hello Anandhu,\n\n${formState.message}\n\nFrom: ${formState.name} (${formState.email})`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 07. RECRUITER_CONNECT"
          title="Direct Contact & Outreach"
          description="Open for DevOps & Cloud Engineer roles, technical discussions, and infrastructure engagements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact & Resume Download */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Cards */}
            <Card className="p-7 space-y-5">
              <div>
                <h3 className="text-lg font-bold text-white font-sans mb-1">
                  Connect Directly
                </h3>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  Fast response time. Reach out via email, phone, or professional networks.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="h-9 w-9 rounded-xl bg-cyan-950/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Email Address</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors truncate block"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('email')}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-cyan-950/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Direct Phone</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-xs font-mono text-slate-200 hover:text-cyan-300 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('phone')}
                    className="p-2 rounded-lg text-slate-400 hover:text-cyan-300 hover:bg-slate-900 transition-colors shrink-0 cursor-pointer"
                    title="Copy phone to clipboard"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    <MapPin className="h-4 w-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Location Base</div>
                    <div className="text-xs font-mono text-slate-200">
                      {PERSONAL_INFO.location} &bull; Open to Relocation / Remote
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Profile Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/50 hover:text-white transition-all hover:scale-[1.02]"
                >
                  <LinkedinIcon className="h-4 w-4 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs font-mono text-slate-200 hover:border-cyan-500/50 hover:text-white transition-all hover:scale-[1.02]"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                  <ExternalLink className="h-3 w-3 text-slate-500" />
                </a>
              </div>
            </Card>

            {/* Official Resume Feature Card */}
            <Card className="p-7 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border-cyan-500/40">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold inline-block mb-2">
                    Verified Asset
                  </span>
                  <h4 className="text-lg font-bold text-white font-sans">
                    Download Official Resume
                  </h4>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    Official PDF containing complete employment history, achievements, technical stack, and education.
                  </p>
                </div>
                <div className="h-11 w-11 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                  <FileDown className="h-5 w-5" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={PERSONAL_INFO.resumeFile}
                  download="Anandhu-Chandran-DevOps.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-mono text-xs font-bold shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02]"
                >
                  <FileDown className="h-4 w-4" />
                  <span>Download Resume (PDF)</span>
                </a>
                <a
                  href={PERSONAL_INFO.resumeFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white font-mono text-xs transition-colors"
                >
                  <span>Preview</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </Card>
          </div>

          {/* Right Column: Recruiter Inquiry Dispatcher */}
          <div className="lg:col-span-7">
            <Card className="p-7 sm:p-9 bg-slate-950/90 border-slate-800">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800 font-mono text-xs">
                <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  recruiter://inquiry-composer
                </span>
                <span className="text-slate-500">Direct Mail Dispatcher</span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera (Tech Lead)"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-slate-300">
                      Your Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-300">
                    Subject Line
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-slate-300">
                    Message Details <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Describe the opportunity, tech stack, company details, or project scope..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-600 text-sm font-sans focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-mono text-sm font-bold shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.01] cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Send Message via Mail Client</span>
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
