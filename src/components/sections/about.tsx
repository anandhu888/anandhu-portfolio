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
  Shield, 
  CheckCircle2, 
  FileDown,
  Building2,
  Workflow
} from 'lucide-react';
import { TechIcon } from '@/components/ui/tech-icons';

export function AboutSection() {
  const competencies = [
    {
      icon: Workflow,
      techIcon: 'GitHub Actions',
      title: 'CI/CD & Deployment Automation',
      tech: 'Jenkins • GitHub Actions • Self-Hosted Runners',
      description: 'Building automated CI/CD pipelines with Jenkins and deploying directly to target/client servers using GitHub Actions self-hosted runners.',
    },
    {
      icon: Server,
      techIcon: 'Docker',
      title: 'Containerization & Microservices',
      tech: 'Docker • Kubernetes (Basic)',
      description: 'Packaging microservices with multi-stage Docker builds, automating container restart routines, and administering basic Kubernetes workloads.',
    },
    {
      icon: Cpu,
      techIcon: 'Ansible',
      title: 'Configuration Management',
      tech: 'Ansible • Linux (Ubuntu, CentOS)',
      description: 'Developing modular Ansible playbooks and Bash scripts for server provisioning and rollouts, reducing configuration errors by 60%.',
    },
    {
      icon: Shield,
      techIcon: 'Grafana',
      title: 'Monitoring & Centralized Logging',
      tech: 'Grafana • ELK Stack',
      description: 'Building operational dashboards in Grafana and deploying centralized log aggregation using Elasticsearch, Logstash, and Kibana for real-time visibility.',
    },
    {
      icon: Database,
      techIcon: 'Liquibase',
      title: 'Database DevOps & Artifacts',
      tech: 'Liquibase • JFrog Artifactory',
      description: 'Automating database schema migrations with Liquibase and managing build versions, binary dependencies, and packages in JFrog Artifactory.',
    },
    {
      icon: Cloud,
      techIcon: 'Terraform',
      title: 'Cloud & Infrastructure as Code',
      tech: 'AWS (EC2, S3) • Terraform (Practice)',
      description: 'Practicing infrastructure provisioning using Terraform for AWS EC2 compute instances and S3 object storage environments.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 01. EXECUTIVE_OVERVIEW"
          title="About & Engineering Profile"
          description="DevOps engineer focused on practical CI/CD pipelines, automated direct server deployments, containerization, and Linux stability."
        />

        <div className="about-reveal grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Profile Card & Specs with Prominent Photo */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-7 space-y-6">
              {/* Prominent Profile Header */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-5 border-b border-slate-800">
                <div className="relative shrink-0 group">
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500/40 to-emerald-500/30 blur-sm opacity-80 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-emerald-400 to-sky-400 overflow-hidden shadow-xl shadow-cyan-950/50">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-slate-950">
                      <Image
                        src={PERSONAL_INFO.profilePhoto}
                        alt="Anandhu Chandran - DevOps Engineer"
                        width={112}
                        height={112}
                        className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-slate-950 p-0.5 shadow-md flex items-center justify-center border border-slate-800"
                    title="Systems Operational"
                  >
                    <div className="h-full w-full rounded-full bg-emerald-400 animate-pulse"></div>
                  </div>
                </div>

                <div className="flex flex-col text-center sm:text-left space-y-1">
                  <span className="font-bold text-white text-lg font-sans">{PERSONAL_INFO.name}</span>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">{PERSONAL_INFO.title}</span>
                  <div className="pt-1">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      Verified Resume Details
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-sans">
                {PERSONAL_INFO.summary}
              </p>

              {/* Technical Specifications Grid */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2.5 font-mono text-xs">
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
                  <span className="text-emerald-400 font-medium">Jan 2025 – Present</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <span className="text-slate-500">Target Environments</span>
                  <span className="text-slate-200">Linux (Ubuntu, CentOS) &bull; AWS</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-slate-800/50">
                  <span className="text-slate-500">Core Methodology</span>
                  <span className="text-slate-200">CI/CD &bull; Automation &bull; IaC &bull; Observability</span>
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
                  download="Anandhu-DevOps-Engineer-Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-mono text-xs font-semibold transition-all hover:border-cyan-500/50 cursor-pointer"
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
                <span>Engineering Focus</span>
              </div>
              <p className="text-slate-400 font-sans leading-relaxed">
                Automate repetitive manual operations, eliminate configuration drift, deploy reliably to target servers, and improve engineering visibility.
              </p>
            </div>
          </div>

          {/* Right Column: 6 Competency Cards with Tech Icons */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {competencies.map((comp) => {
              const FallbackIcon = comp.icon;
              return (
                <Card
                  key={comp.title}
                  className="p-6 flex flex-col justify-between hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="h-11 w-11 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400">
                        {comp.techIcon ? (
                          <TechIcon name={comp.techIcon} className="h-5 w-5" useBrandColor />
                        ) : (
                          <FallbackIcon className="h-5 w-5" />
                        )}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-cyan-300">
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
