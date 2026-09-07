'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PIPELINE_STAGES } from '@/data/resume-data';
import { CheckCircle2 } from 'lucide-react';

export function PipelineSection() {
  const [activeStageId, setActiveStageId] = useState<string>(PIPELINE_STAGES[1].id);

  const activeStage = PIPELINE_STAGES.find((s) => s.id === activeStageId) || PIPELINE_STAGES[0];

  return (
    <section id="pipeline" className="py-24 bg-slate-900/40 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 05. LIFECYCLE_TOPOLOGY"
          title="End-to-End DevOps Pipeline Architecture"
          description="Interactive topology demonstrating how Anandhu's toolchain connects across the software delivery lifecycle."
        />

        {/* Pipeline Stage Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {PIPELINE_STAGES.map((stage) => {
            const isActive = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`p-4 rounded-2xl text-left font-mono transition-all border relative cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-950/50 scale-[1.02] ring-1 ring-cyan-500/40'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className={isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}>
                    STAGE {stage.step}
                  </span>
                  {isActive && (
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                  )}
                </div>
                <div className="font-bold text-xs text-white truncate mb-1">
                  {stage.name}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  {stage.tools.join(', ')}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Inspector Card */}
        <Card className="p-7 sm:p-9 bg-slate-950/90 border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2.5 font-mono text-xs text-cyan-400 mb-2">
                <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                  STAGE {activeStage.step} OF 06
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Production Ready Stage
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans tracking-tight">
                {activeStage.name}
              </h3>
              <p className="text-sm text-slate-300 font-sans mt-2.5 max-w-2xl leading-relaxed">
                {activeStage.description}
              </p>
            </div>

            {/* Active Stage Tools Badges */}
            <div className="flex flex-col gap-2 font-mono text-xs">
              <div className="text-slate-500 text-[11px] uppercase tracking-wider font-semibold">
                Core Technologies:
              </div>
              <div className="flex flex-wrap gap-2">
                {activeStage.tools.map((tool) => (
                  <Badge key={tool} variant="cyan" dot size="md">
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Context Triple Grid */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="text-slate-500 text-[11px] uppercase mb-1">Automation Level</div>
              <div className="text-white font-bold text-sm">Fully Automated</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans leading-normal">
                Triggered automatically on Git branch merges via Jenkins webhooks and Groovy scripts.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="text-slate-500 text-[11px] uppercase mb-1">Health &amp; Security Gate</div>
              <div className="text-emerald-400 font-bold text-sm">Automated Verification</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans leading-normal">
                Liquibase schema parity checks and Docker multi-stage build validation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80">
              <div className="text-slate-500 text-[11px] uppercase mb-1">Execution Target</div>
              <div className="text-cyan-300 font-bold text-sm">Linux &bull; AWS Cloud</div>
              <p className="text-[11px] text-slate-400 mt-1 font-sans leading-normal">
                Ubuntu/CentOS production servers configured via idempotent Ansible playbooks.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
