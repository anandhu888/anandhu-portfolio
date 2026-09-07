import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PROJECTS } from '@/data/resume-data';
import { Check, Zap, ShieldCheck } from 'lucide-react';

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 04. PRODUCTION_SYSTEMS"
          title="Featured DevOps Implementations"
          description="Real-world engineering initiatives and automated delivery architectures executed across 2+ years of professional industry practice."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col justify-between p-7"
            >
              <div>
                {/* Header: Stage Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="cyan" dot size="sm">
                    {project.architectureStage}
                  </Badge>
                  <span className="text-[11px] font-mono text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white font-sans tracking-tight mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Outcome / Impact Banner */}
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-start gap-2.5 mb-5 shadow-xs shadow-emerald-950/40">
                  <Zap className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-emerald-200">Verified Impact: </span>
                    <span className="text-emerald-300/90">{project.impact}</span>
                  </div>
                </div>

                {/* Key Deliverables List */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    Key Deliverables &amp; Architectural Highlights:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-3.5 w-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-5 rounded-2xl glass-panel flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
            <span>All implementations directly derived from production work at Muziris Softech (P) Ltd.</span>
          </div>
          <a
            href="#contact"
            className="text-cyan-300 hover:text-cyan-200 font-semibold flex items-center gap-1 shrink-0"
          >
            <span>Inquire about these architectures</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
