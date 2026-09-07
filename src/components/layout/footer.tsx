import React from 'react';
import { Terminal, Mail, Phone, ArrowUp, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/resume-data';
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-xl bg-cyan-950/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-cyan-400 text-xs font-mono">
                {'// DevOps Engineer'}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-md leading-relaxed">
              Specialized in Jenkins CI/CD automation, Docker containerization, Ansible configuration management, and Linux production operations.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Resume Source of Truth: Verified experience &amp; skills</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <div className="text-slate-200 font-bold uppercase tracking-wider text-xs">
              Directory
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  &bull; /about-profile
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-400 transition-colors">
                  &bull; /technical-skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-cyan-400 transition-colors">
                  &bull; /career-timeline
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors">
                  &bull; /devops-systems
                </a>
              </li>
              <li>
                <a href="#pipeline" className="hover:text-cyan-400 transition-colors">
                  &bull; /pipeline-topology
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-cyan-400 transition-colors">
                  &bull; /academic-history
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Connect */}
          <div className="space-y-3">
            <div className="text-slate-200 font-bold uppercase tracking-wider text-xs">
              Direct Channels
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2] shrink-0" />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>GitHub Profile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; {currentYear} {PERSONAL_INFO.name}. Official DevOps Portfolio.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Next.js 16 &bull; TypeScript &bull; Tailwind CSS</span>
            <a
              href="#top"
              aria-label="Back to top"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-300 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
