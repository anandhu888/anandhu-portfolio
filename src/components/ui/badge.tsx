import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'cyan' | 'emerald' | 'amber' | 'violet' | 'outline';
  className?: string;
  size?: 'sm' | 'md';
  dot?: boolean;
}

export function Badge({
  children,
  variant = 'default',
  className = '',
  size = 'md',
  dot = false,
}: BadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  const variantClasses = {
    default: 'bg-slate-900/90 text-slate-300 border border-slate-700/70',
    cyan: 'bg-cyan-950/60 text-cyan-200 border border-cyan-500/40 shadow-xs shadow-cyan-950/50',
    emerald: 'bg-emerald-950/60 text-emerald-200 border border-emerald-500/40 shadow-xs shadow-emerald-950/50',
    amber: 'bg-amber-950/60 text-amber-200 border border-amber-500/40 shadow-xs shadow-amber-950/50',
    violet: 'bg-indigo-950/60 text-indigo-200 border border-indigo-500/40 shadow-xs shadow-indigo-950/50',
    outline: 'bg-transparent text-slate-300 border border-slate-700/80 hover:border-slate-500',
  }[variant];

  const dotClasses = {
    default: 'bg-slate-400',
    cyan: 'bg-cyan-400',
    emerald: 'bg-emerald-400',
    amber: 'bg-amber-400',
    violet: 'bg-indigo-400',
    outline: 'bg-slate-400',
  }[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-md tracking-tight transition-all duration-150 ${sizeClasses} ${variantClasses} ${className}`}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dotClasses} shrink-0`}></span>}
      {children}
    </span>
  );
}
