import { cn } from '../utils';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'primary' | 'secondary' | 'white';
  className?: string;
}

export function Spinner({ size = 'md', variant = 'primary', className }: SpinnerProps) {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-6 w-6 border-2',
    lg: 'h-8 w-8 border-3',
    xl: 'h-12 w-12 border-4',
  };

  const variants = {
    primary: 'border-primary-600/20 border-t-primary-600',
    secondary: 'border-secondary-600/20 border-t-secondary-600 dark:border-secondary-400/20 dark:border-t-secondary-400',
    white: 'border-white/20 border-t-white',
  };

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-solid',
        sizes[size],
        variants[variant],
        className
      )}
    />
  );
}
