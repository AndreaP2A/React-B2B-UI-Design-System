import type { HTMLAttributes } from 'react';
import { cn } from '../utils';

export function Kbd({ children, className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <kbd 
      className={cn(
        "inline-flex items-center justify-center px-1.5 py-0.5 font-mono text-[10px] font-bold text-secondary-500 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-800 border border-secondary-300 dark:border-secondary-700 rounded shadow-[0_1px_0_0_rgba(0,0,0,0.1)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.05)]",
        className
      )} 
      {...props}
    >
      {children}
    </kbd>
  );
}
