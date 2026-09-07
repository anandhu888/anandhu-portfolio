'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, FileDown, ShieldCheck, Copy, Check, Server, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/resume-data';
import { TerminalWidget } from '@/components/ui/terminal-widget';

export function HeroSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="top"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-devops-grid"
    >
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[550px] bg-hero-glow pointer-events-none -z-10"></div>
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Text & Content with comfortable spacing */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-lg shadow-emerald-950/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.status}</span>
            </div>

            {/* Mobile Profile Photo (Prominent on mobile, hidden on desktop) */}
            <div className="lg:hidden flex justify-center pt-1 pb-2">
              <div className="relative shrink-0 group">
                {/* Ambient glow */}
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-500/45 via-emerald-500/30 to-sky-400/40 blur-md opacity-90"></div>

                {/* Precision Gradient Ring Frame - 128px (Noticeably larger on mobile) */}
                <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-full p-[2.5px] bg-gradient-to-tr from-cyan-400 via-emerald-400 to-sky-400 shadow-xl shadow-cyan-950/60">
                  <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                    <Image
                      src={PERSONAL_INFO.profilePhoto}
                      alt="Anandhu Chandran - DevOps Engineer"
                      width={144}
                      height={144}
                      priority
                      quality={95}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Telemetry Status Dot */}
                <div
                  className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-slate-950 p-0.5 shadow-md flex items-center justify-center border border-slate-800"
                  title="Systems Operational"
                  aria-hidden="true"
                >
                  <div className="h-full w-full rounded-full bg-emerald-400 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Name & Professional Title */}
            <div className="space-y-2.5">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight font-sans">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                <span className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400">
                  DevOps Engineer
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-semibold">
                  2+ Years Production Exp
                </span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              Results-driven DevOps Engineer with 2+ years of experience in{' '}
              <strong className="text-cyan-300 font-semibold">CI/CD automation</strong>,{' '}
              <strong className="text-cyan-300 font-semibold">containerization</strong>, and{' '}
              <strong className="text-cyan-300 font-semibold">infrastructure management</strong> within Linux environments. 
              Proven impact accelerating deployments by 40% and eliminating manual configuration drift by 60%.
            </p>

            {/* Quick Fact Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <Server className="h-3.5 w-3.5 text-cyan-400" />
                <span className="text-slate-300">Muziris Softech (P) Ltd</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800">
                <span className="text-emerald-400 font-bold">&bull;</span>
                <span className="text-slate-300">Linux &bull; Jenkins &bull; Docker &bull; Ansible</span>
              </div>
            </div>

            {/* Action Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-3">
              {/* Primary CTA: Resume Download */}
              <a
                href={PERSONAL_INFO.resumeFile}
                download="Anandhu-Chandran-DevOps.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-emerald-400 hover:from-cyan-400 hover:to-emerald-300 text-slate-950 font-mono text-sm font-bold shadow-lg shadow-cyan-950/50 transition-all hover:scale-[1.02] focus:ring-2 focus:ring-cyan-400 cursor-pointer"
              >
                <FileDown className="h-4 w-4" />
                <span>Download Resume (PDF)</span>
              </a>

              {/* Secondary CTA: Career Timeline */}
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl glass-panel text-white hover:text-cyan-300 font-mono text-sm font-semibold border-slate-700/80 hover:border-cyan-500/50 transition-all hover:scale-[1.02]"
              >
                <span>View Career Timeline</span>
                <ArrowRight className="h-4 w-4 text-cyan-400" />
              </a>

              {/* Quick Copy Email Pill */}
              <button
                onClick={handleCopyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-mono text-xs transition-colors cursor-pointer"
                title="Click to copy email address"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-cyan-400" />
                    <span className="truncate max-w-[170px]">{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* Credibility Guarantee */}
            <div className="flex items-center justify-center lg:justify-start gap-2 pt-2 text-xs text-slate-500 font-mono">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Source of Truth: Resume verified details &bull; Zero fabricated credentials</span>
            </div>
          </div>

          {/* Right Column: Profile Photo Showcase (Noticeably larger, 25-30%) + Terminal Widget */}
          <div className="lg:col-span-5 w-full space-y-6">
            {/* Desktop Profile Photo Card (Positioned on the right side of the Hero section) */}
            <div className="hidden lg:flex items-center justify-between p-6 rounded-2xl glass-panel border border-slate-700/80 shadow-2xl shadow-cyan-950/30">
              <div className="flex items-center gap-5">
                {/* Noticeably Larger Profile Photo (160px / w-40 h-40 on desktop, 25% larger than 128px) */}
                <div className="relative shrink-0 group">
                  {/* Ambient Soft Glow */}
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-500/50 via-emerald-500/35 to-sky-400/40 blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Precision Border Ring */}
                  <div className="relative h-36 w-36 xl:h-40 xl:w-40 rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-emerald-400 to-sky-400 shadow-2xl shadow-cyan-950/80">
                    <div className="w-full h-full rounded-full overflow-hidden bg-slate-950">
                      <Image
                        src={PERSONAL_INFO.profilePhoto}
                        alt="Anandhu Chandran - DevOps Engineer"
                        width={160}
                        height={160}
                        priority
                        quality={95}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* Telemetry Status Dot */}
                  <div
                    className="absolute bottom-1.5 right-1.5 h-5 w-5 rounded-full bg-slate-950 p-0.5 shadow-md flex items-center justify-center border border-slate-800"
                    title="Systems Operational"
                    aria-hidden="true"
                  >
                    <div className="h-full w-full rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>

                {/* Profile Caption Details */}
                <div className="space-y-2 text-left font-mono">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-[11px] text-cyan-300 font-semibold">
                    <Sparkles className="h-3 w-3 text-cyan-400" />
                    <span>DevOps Practitioner</span>
                  </div>

                  <div className="space-y-0.5">
                    <div className="text-lg font-bold text-white font-sans tracking-tight">
                      {PERSONAL_INFO.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      CI/CD &bull; Cloud &bull; Linux Systems
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>2+ Years Verified Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Terminal Widget */}
            <TerminalWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
