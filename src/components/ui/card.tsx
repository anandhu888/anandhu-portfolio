import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'default' | 'glass' | 'subtle';
}

export function Card({
  children,
  className = '',
  hoverEffect = true,
  variant = 'glass',
}: CardProps) {
  const variantStyles = {
    glass: 'glass-panel',
    default: 'bg-slate-900/80 border border-slate-800/80',
    subtle: 'bg-slate-950/60 border border-slate-800/60',
  }[variant];

  const hoverStyle = hoverEffect ? 'glass-panel-interactive' : '';

  return (
    <div
      className={`rounded-2xl p-6 relative overflow-hidden transition-all duration-300 ${variantStyles} ${hoverStyle} ${className}`}
    >
      {/* Subtle radial corner shine */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
