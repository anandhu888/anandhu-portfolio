import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EXPERIENCES } from '@/data/resume-data';
import { 
  GitCommit, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  TrendingDown, 
  MapPin, 
  ShieldCheck
} from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 03. CAREER_TRAJECTORY"
          title="Professional Experience"
          description="Career progression at Muziris Softech (P) Ltd spanning over 2+ years of CI/CD pipeline automation and Linux production systems management."
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Git Branch Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-emerald-400 to-slate-800 pointer-events-none hidden sm:block"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="relative sm:pl-18">
                {/* Git Node on Timeline */}
                <div className="hidden sm:flex absolute left-5 top-7 -translate-x-1/2 h-8 w-8 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center text-cyan-400 shadow-lg shadow-cyan-950/60 z-20">
                  <GitCommit className="h-4 w-4" />
                </div>

                <Card className="p-7 sm:p-8">
                  {/* Role Header Banner */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                          {exp.role}
                        </h3>
                        {exp.isCurrent ? (
                          <Badge variant="emerald" dot size="sm">
                            Active Production Role
                          </Badge>
                        ) : (
                          <Badge variant="default" size="sm">
                            Previous Role (2 yrs 8 mos)
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-cyan-300 font-mono">
                        <span className="flex items-center gap-1.5 text-white font-semibold">
                          <Building2 className="h-4 w-4 text-cyan-400" />
                          {exp.company}
                        </span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-slate-400">{exp.type}</span>
                        <span className="text-slate-600">&bull;</span>
                        <span className="text-slate-400 flex items-center gap-1">
                          <MapPin className="h-3 w-3 text-slate-500" />
                          India
                        </span>
                      </div>
                    </div>

                    {/* Timeline Date Badge */}
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/90 px-3.5 py-1.5 rounded-xl border border-slate-800 shrink-0 w-fit">
                      <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Impact Metric Cards */}
                  {exp.metrics && exp.metrics.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
                      {exp.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/90 text-xs font-mono"
                        >
                          <div className="text-slate-500 text-[10px] uppercase tracking-wider">{m.label}</div>
                          <div className="text-emerald-400 font-bold text-base mt-0.5 flex items-center gap-1">
                            {m.value.startsWith('-') && <TrendingDown className="h-4 w-4" />}
                            <span>{m.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Core Responsibilities & Deliverables */}
                  <div className="space-y-3 my-5">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-semibold">
                      <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                      <span>Verified Responsibilities &amp; Impact (From Resume):</span>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used Pills */}
                  <div className="pt-5 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-500 mb-2.5">
                      Environment &amp; Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300 hover:border-slate-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
