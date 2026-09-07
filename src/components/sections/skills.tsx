'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILL_CATEGORIES } from '@/data/resume-data';
import { 
  GitBranch, 
  Box, 
  Cpu, 
  Layers, 
  Terminal, 
  Activity, 
  Database, 
  Cloud,
  Search,
  CheckCircle2
} from 'lucide-react';

const ICON_MAP: Record<string, React.ElementType> = {
  GitBranch,
  Box,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Database,
  Cloud,
};

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const filteredCategories = SKILL_CATEGORIES.filter((category) => {
    const matchesCategory = selectedCategory === 'All' || category.title === selectedCategory;
    if (!matchesCategory) return false;

    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    const matchesCatTitle = category.title.toLowerCase().includes(query);
    const matchesSkill = category.skills.some(
      (s) =>
        s.name.toLowerCase().includes(query) ||
        (s.description && s.description.toLowerCase().includes(query))
    );
    return matchesCatTitle || matchesSkill;
  });

  const totalSkillsCount = SKILL_CATEGORIES.reduce(
    (acc, category) => acc + category.skills.length,
    0
  );

  return (
    <section id="skills" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 02. TECHNICAL_MATRIX"
          title="Skills, Tooling & Platforms"
          description="Categorized technical competencies verified across 2+ years of production DevOps engineering."
        />

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 justify-center md:justify-start">
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? totalSkillsCount
                  : SKILL_CATEGORIES.find((c) => c.title === cat)?.skills.length || 0;
              const isActive = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-950/40 font-semibold'
                      : 'bg-slate-900/60 text-slate-400 border border-slate-800/80 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-cyan-500/30 text-cyan-200' : 'bg-slate-800 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="w-full md:w-64 relative">
            <Search className="h-4 w-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search e.g. Jenkins, Docker..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>
        </div>

        {/* Skills Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 text-slate-500 font-mono text-xs">
            No technical skills found matching &quot;{searchQuery}&quot;. Clear search to view all.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCategories.map((category) => {
              const IconComponent = ICON_MAP[category.iconName] || Terminal;
              return (
                <Card
                  key={category.title}
                  className="flex flex-col justify-between p-6"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-white font-sans">
                          {category.title}
                        </h3>
                        <span className="text-[10px] font-mono text-slate-500">
                          {category.skills.length} competencies
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 font-sans mb-4 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Pills List */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-800/70">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="font-mono text-xs font-bold text-white">
                            {skill.name}
                          </span>
                          {skill.level && (
                            <Badge
                              size="sm"
                              dot
                              variant={
                                skill.level === 'Production'
                                  ? 'emerald'
                                  : skill.level === 'Basic'
                                  ? 'cyan'
                                  : 'amber'
                              }
                            >
                              {skill.level}
                            </Badge>
                          )}
                        </div>
                        {skill.description && (
                          <p className="text-[11px] text-slate-400 font-sans leading-tight">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        {/* Legend / Status Definitions */}
        <div className="mt-10 p-5 rounded-2xl glass-panel flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <span className="text-slate-500 uppercase text-[11px] tracking-wider">Proficiency Legend:</span>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="text-slate-300">Production (Daily Industry Deployment)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
              <span className="text-slate-300">Basic / Foundation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-400"></span>
              <span className="text-slate-300">Continuous Practice &amp; Lab</span>
            </div>
          </div>

          <div className="text-slate-500 text-[11px] flex items-center gap-1.5 shrink-0">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>All skills mapped from resume source</span>
          </div>
        </div>
      </div>
    </section>
  );
}
