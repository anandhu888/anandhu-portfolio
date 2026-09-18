import React from 'react';

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-14 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Category Pill Tag */}
      <div className={`section-heading-badge inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 mb-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        <span className="font-mono text-xs tracking-wider uppercase text-cyan-300 font-semibold">
          {badge}
        </span>
      </div>

      {/* Main Title */}
      <h2 className="section-heading-title text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-4 font-sans">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className={`section-heading-description text-slate-400 text-sm sm:text-base leading-relaxed font-sans ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}

      {/* Subtle bottom separator line */}
      <div className={`section-heading-rule mt-6 h-[1px] w-20 bg-gradient-to-r from-cyan-500/60 to-transparent ${isCenter ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
