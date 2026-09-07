import React from 'react';
import { Zap, CheckCircle, Clock, Database, TrendingDown } from 'lucide-react';

const STATS_DATA = [
  {
    value: '40%',
    metricLabel: 'Deployment Time Reduction',
    detail: 'Designed & maintained automated Jenkins CI/CD pipelines',
    tag: 'Jenkins CI/CD',
    icon: Zap,
    color: 'from-cyan-400 to-sky-300',
    barWidth: 'w-2/5',
    barColor: 'bg-cyan-400',
  },
  {
    value: '60%',
    metricLabel: 'Configuration Error Reduction',
    detail: 'Eliminated manual server mistakes using Ansible playbooks',
    tag: 'Ansible Automation',
    icon: CheckCircle,
    color: 'from-emerald-400 to-teal-300',
    barWidth: 'w-3/5',
    barColor: 'bg-emerald-400',
  },
  {
    value: '2+ Yrs',
    metricLabel: 'DevOps & Linux Experience',
    detail: 'Continuous delivery, containerization & production release workflows',
    tag: 'Muziris Softech (P) Ltd',
    icon: Clock,
    color: 'from-sky-400 to-blue-300',
    barWidth: 'w-full',
    barColor: 'bg-sky-400',
  },
  {
    value: '100%',
    metricLabel: 'Automated DB Versioning',
    detail: 'Zero manual schema divergence using Liquibase changelogs',
    tag: 'Liquibase & Git',
    icon: Database,
    color: 'from-indigo-400 to-violet-300',
    barWidth: 'w-full',
    barColor: 'bg-indigo-400',
  },
];

export function StatsSection() {
  return (
    <section className="py-14 border-y border-slate-800/80 bg-slate-950/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.metricLabel}
                className="glass-panel glass-panel-interactive rounded-2xl p-6 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                      {item.value}
                    </span>
                    <div className="h-10 w-10 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-center text-cyan-400">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <div className="font-semibold text-white text-sm sm:text-base font-sans mb-1.5 flex items-center gap-1.5">
                    {item.value.includes('%') && item.metricLabel.includes('Reduction') && (
                      <TrendingDown className="h-4 w-4 text-emerald-400 shrink-0" />
                    )}
                    <span>{item.metricLabel}</span>
                  </div>

                  <p className="text-xs text-slate-400 font-sans leading-relaxed mb-4">
                    {item.detail}
                  </p>
                </div>

                {/* Progress bar accent & tag */}
                <div className="pt-3 border-t border-slate-800/80">
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mb-2.5">
                    <div className={`h-full ${item.barWidth} ${item.barColor} rounded-full`}></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">Verified Metric</span>
                    <span className="text-cyan-300 font-medium">{item.tag}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
