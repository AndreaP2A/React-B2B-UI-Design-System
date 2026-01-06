import { cn } from '../utils';

interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export function Skeleton({ className, variant = 'rectangular' }: SkeletonProps) {
  return (
    <div 
      className={cn(
        "animate-pulse bg-secondary-200 dark:bg-secondary-800",
        variant === 'text' && "h-3 w-full rounded",
        variant === 'circular' && "rounded-full",
        variant === 'rectangular' && "rounded-lg",
        className
      )}
    />
  );
}
