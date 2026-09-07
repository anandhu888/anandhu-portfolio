'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, FileDown, Terminal, Sparkles, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/resume-data';
import { GithubIcon, LinkedinIcon } from '@/components/ui/social-icons';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Pipeline', href: '#pipeline' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between px-4 sm:px-6 h-14 rounded-2xl transition-all duration-300 ${
            scrolled
              ? 'glass-panel shadow-xl shadow-black/50 border-slate-700/80'
              : 'bg-slate-950/70 backdrop-blur-md border border-slate-800/80 shadow-md shadow-black/30'
          }`}
        >
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Anandhu Chandran DevOps Portfolio"
          >
            <div className="h-8 w-8 rounded-xl bg-cyan-950/80 border border-cyan-500/50 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all shadow-xs shadow-cyan-950">
              <Terminal className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                anandhu<span className="text-cyan-400">.devops</span>
              </span>
              <span className="hidden md:flex items-center gap-1 text-[10px] font-mono text-emerald-400 leading-none">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                status: operational
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-1 font-mono text-xs text-slate-300"
            aria-label="Main Navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-cyan-300 hover:bg-slate-800/70 transition-all duration-150"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Group */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all hover:scale-105"
            >
              <GithubIcon className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-[#0a66c2] hover:border-slate-600 transition-all hover:scale-105"
            >
              <LinkedinIcon className="h-4 w-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeFile}
              download="Anandhu-Chandran-DevOps.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-mono text-xs font-bold shadow-md shadow-cyan-950 transition-all hover:scale-[1.02]"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={PERSONAL_INFO.resumeFile}
              download="Anandhu-Chandran-DevOps.pdf"
              aria-label="Download Resume"
              className="p-2 rounded-xl bg-cyan-500 text-slate-950"
            >
              <FileDown className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-Down Menu Drawer */}
      {isOpen && (
        <div className="sm:hidden mt-2 max-w-6xl mx-auto">
          <div className="glass-panel rounded-2xl p-5 space-y-4 border border-slate-700 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono text-emerald-400">
              <span className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                DevOps Engineer &bull; 2+ Yrs Exp
              </span>
              <span className="text-slate-500">Muziris Softech</span>
            </div>

            <nav className="flex flex-col space-y-1 font-mono text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-slate-200 hover:text-cyan-300 hover:bg-slate-800/80 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-slate-600 text-xs">&rarr;</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-900/60"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
