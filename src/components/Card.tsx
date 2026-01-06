import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        "bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 rounded-2xl shadow-sm overflow-hidden",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("px-6 py-4 border-b border-secondary-100 dark:border-secondary-800", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("p-6", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className, ...props }: CardProps) {
  return (
    <div className={cn("px-6 py-4 bg-secondary-50/50 dark:bg-secondary-800/50 border-t border-secondary-100 dark:border-secondary-800", className)} {...props}>
      {children}
    </div>
  );
}
