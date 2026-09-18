import React from 'react';
import { SectionHeading } from '@/components/ui/section-heading';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EDUCATION } from '@/data/resume-data';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-24 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="// 05. ACADEMIC_CREDENTIALS"
          title="Education & Technical Qualifications"
          description="Academic foundation in Computer Science & Engineering combined with active ongoing cloud infrastructure practice."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* Card 1: B.Tech Degree */}
          <Card className="education-reveal p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-cyan-950/90 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <Badge variant="cyan" dot size="sm">
                  Undergraduate
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-white font-sans mb-1">
                {EDUCATION[0].degree}
              </h3>
              <div className="text-cyan-400 text-xs font-mono mb-3">
                {EDUCATION[0].field}
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {EDUCATION[0].institution}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                {EDUCATION[0].period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                {EDUCATION[0].location}
              </span>
            </div>
          </Card>

          {/* Card 2: Higher Secondary */}
          <Card className="education-reveal p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                  <BookOpen className="h-6 w-6" />
                </div>
                <Badge variant="default" size="sm">
                  Secondary School
                </Badge>
              </div>

              <h3 className="text-lg font-bold text-white font-sans mb-1">
                {EDUCATION[1].degree}
              </h3>
              <div className="text-slate-400 text-xs font-mono mb-3">
                Higher Secondary Certificate
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {EDUCATION[1].institution}
              </p>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Calendar className="h-3.5 w-3.5 text-slate-400" />
                {EDUCATION[1].period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                {EDUCATION[1].location}
              </span>
            </div>
          </Card>

        </div>
      </div>
    </section>
  );
}
