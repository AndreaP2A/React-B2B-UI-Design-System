import { type HTMLAttributes } from 'react';
import { cn } from '../utils';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'dot';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  onRemove?: () => void;
}

export function Chip({ 
  children, 
  variant = 'default', 
  color = 'secondary', 
  onRemove, 
  className,
  ...props 
}: ChipProps) {
  
  const colors = {
    primary: 'bg-primary-100 text-primary-700 border-primary-200 dark:bg-primary-900/30 dark:text-primary-300 dark:border-primary-800',
    secondary: 'bg-secondary-100 text-secondary-700 border-secondary-200 dark:bg-secondary-800 dark:text-secondary-300 dark:border-secondary-700',
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
    warning: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
    danger: 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
  };

  const variants = {
    default: 'border',
    outline: 'bg-transparent border',
    dot: 'bg-transparent border-none',
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all",
        colors[color],
        variants[variant],
        className
      )}
      {...props}
    >
      {variant === 'dot' && (
        <span className={cn(
          "w-1.5 h-1.5 rounded-full",
          color === 'primary' ? 'bg-primary-500' : 
          color === 'success' ? 'bg-emerald-500' : 
          color === 'warning' ? 'bg-amber-500' : 
          color === 'danger' ? 'bg-red-500' : 'bg-secondary-400'
        )} />
      )}
      {children}
      {onRemove && (
        <button 
          onClick={(e) => { e.stopPropagation(); onRemove(); }}
          className="ml-0.5 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
