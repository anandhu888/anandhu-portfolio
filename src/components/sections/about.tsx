import React from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { SectionHeading } from '@/components/ui/section-heading';
import { PERSONAL_INFO } from '@/data/resume-data';
import { 
  Server, 
  Cpu, 
  Database, 
  Cloud, 
  Terminal, 
  Shield, 
  CheckCircle2, 
  FileDown,
  Building2
} from 'lucide-react';

export function AboutSection() {
  const competencies = [
    {
      icon: Terminal,
      title: 'CI/CD Automation & Scripting',
      tech: 'Jenkins • Bash • Groovy',
      description: 'Designing end-to-end declarative and scripted Jenkins pipelines, integrating automated test suites and achieving 40% faster deployment turnaround.',
    },
    {
      icon: Server,
      title: 'Containerization & Microservices',
      tech: 'Docker • Kubernetes (Basic)',
      description: 'Packaging microservices into optimized, multi-stage Docker images for consistent multi-environment parity and orchestrating basic Kubernetes pod deployments.',
    },
    {
      icon: Cpu,
      title: 'Configuration Management',
      tech: 'Ansible • Linux (Ubuntu, CentOS)',
      description: 'Writing reusable, idempotent Ansible playbooks and Bash routines across production Linux servers, eliminating manual setup and reducing errors by 60%.',
    },
    {
      icon: Database,
      title: 'Database Schema CI/CD',
      tech: 'Liquibase • Git • SQL',
      description: 'Integrating Liquibase changelogs into automated delivery pipelines for reliable, version-controlled database schema migrations with instant rollback protection.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Infrastructure as Code',
      tech: 'Terraform • AWS (EC2, S3)',
      description: 'Practicing declarative infrastructure provisioning and lifecycle state management using Terraform targeting AWS compute and object storage.',
    },
    {
      icon: Shield,
      title: 'Observability & Telemetry',
      tech: 'Grafana • ELK Stack',
      description: 'Building operational dashboards in Grafana and deploying centralized log aggregation using Elasticsearch, Logstash, and Kibana for real-time visibility.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 01. EXECUTIVE_OVERVIEW"
          title="About & Engineering Profile"
          description="DevOps practitioner focused on resilient continuous delivery pipelines, immutable infrastructure, and Linux system stability."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card & Specs */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-7 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full overflow-hidden border border-cyan-500/40 shrink-0">
                      <Image
                        src={PERSONAL_INFO.profilePhoto}
                        alt="Anandhu Chandran - DevOps Engineer"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-white text-xs">{PERSONAL_INFO.name}</span>
                      <span className="text-[10px] font-mono text-cyan-400">spec://executive-summary</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                    Verified Resume
                  </span>
                </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {PERSONAL_INFO.summary}
              </p>

              {/* Technical Specifications Grid */}
              <div className="pt-3 border-t border-slate-800/80 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <span className="text-slate-500">Current Role</span>
                  <span className="text-white font-semibold">DevOps Engineer</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <span className="text-slate-500">Employer</span>
                  <span className="text-cyan-300 flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5" />
                    Muziris Softech (P) Ltd
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <span className="text-slate-500">Tenure</span>
                  <span className="text-emerald-400 font-medium">May 2022 – Present (2+ Yrs)</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <span className="text-slate-500">Target Platforms</span>
                  <span className="text-slate-200">Linux (Ubuntu, CentOS) &bull; AWS</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <span className="text-slate-500">Core Methodology</span>
                  <span className="text-slate-200">GitOps &bull; CI/CD &bull; IaC &bull; Observability</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-500">Location Base</span>
                  <span className="text-slate-300">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Action Button inside Card */}
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.resumeFile}
                  download="Anandhu-Chandran-DevOps.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-mono text-xs font-semibold transition-all hover:border-cyan-500/50"
                >
                  <FileDown className="h-4 w-4 text-cyan-400" />
                  <span>Download Verified Resume PDF</span>
                </a>
              </div>
            </Card>

            {/* Principles Callout */}
            <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-mono font-semibold text-cyan-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Core Engineering Philosophy</span>
              </div>
              <p className="text-slate-400 font-sans leading-relaxed">
                Zero manual configuration drift, automated test-driven deployment gates, immutable container images, and deep observability across all production microservices.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Competency Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competencies.map((comp) => {
              const Icon = comp.icon;
              return (
                <Card
                  key={comp.title}
                  className="p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                        Production
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-bold text-white font-sans mb-1">
                      {comp.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 mb-2">
                      {comp.tech}
                    </div>

                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {comp.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
