import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/data/resume-data';
import { TechIcon, hasTechIcon } from '@/components/ui/tech-icons';
import { Check, ShieldCheck, Server } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 04. PROFESSIONAL_IMPLEMENTATIONS"
          title="Professional Implementations"
          description="Resume-supported DevOps automation, delivery, and observability work at Muziris Softech (P) Ltd."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="project-reveal p-6 sm:p-7 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-slate-800">
                <Badge variant="cyan" dot size="sm">Professional Work</Badge>
                <span className="text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 min-w-0">
                  <Server className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{project.category}</span>
                </span>
              </div>

              {/* Title & Description */}
              <div className="project-details space-y-3 mb-6">
                <h3 className="project-title text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-cyan-400" />
                  <span>Implementation scope</span>
                </div>
                <div className="space-y-2">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-start gap-3"
                    >
                      <Check className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 font-sans leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Badges with Icons */}
              <div className="project-tags pt-6 border-t border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 mb-3">
                  Technologies &amp; Integrations Used:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:border-cyan-500/40 transition-colors inline-flex items-center gap-1.5"
                    >
                      {hasTechIcon(tech) && (
                        <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" useBrandColor />
                      )}
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
