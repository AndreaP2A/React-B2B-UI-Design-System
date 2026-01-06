import { type ReactNode } from 'react';
import { cn } from '../utils';

interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'danger';
  title?: string;
  children: ReactNode;
  icon?: boolean;
  className?: string;
}

export function Alert({ 
  variant = 'info', 
  title, 
  children, 
  icon = true,
  className 
}: AlertProps) {
  
  const variants = {
    info: 'bg-primary-50 text-primary-800 border-primary-200 dark:bg-primary-950/30 dark:text-primary-300 dark:border-primary-900',
    success: 'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-300 dark:border-emerald-900',
    warning: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-900',
    danger: 'bg-red-50 text-red-800 border-red-200 dark:bg-red-950/30 dark:text-red-300 dark:border-red-900',
  };

  const icons = {
    info: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
    success: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>,
    warning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg>,
    danger: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>,
  };

  return (
    <div className={cn(
      "flex gap-4 p-4 rounded-xl border transition-all",
      variants[variant],
      className
    )}>
      {icon && <div className="shrink-0">{icons[variant]}</div>}
      <div className="space-y-1">
        {title && <h5 className="font-bold text-sm leading-tight">{title}</h5>}
        <div className="text-sm opacity-90 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}
