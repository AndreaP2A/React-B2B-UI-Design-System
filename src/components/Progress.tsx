import { cn } from '../utils';

interface ProgressProps {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'success' | 'warning' | 'danger';
  className?: string;
  showValue?: boolean;
}

export function Progress({ 
  value, 
  max = 100, 
  size = 'md', 
  variant = 'primary',
  className,
  showValue = false
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const sizes = {
    sm: "h-1",
    md: "h-2",
    lg: "h-4"
  };

  const variants = {
    primary: "bg-primary-600",
    success: "bg-emerald-500",
    warning: "bg-amber-500",
    danger: "bg-red-500"
  };

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {showValue && (
        <div className="flex justify-between text-xs font-medium text-secondary-600 dark:text-secondary-400">
          <span>{Math.round(percentage)}%</span>
          <span>{value} / {max}</span>
        </div>
      )}
      <div className={cn(
        "w-full bg-secondary-200 dark:bg-secondary-800 rounded-full overflow-hidden",
        sizes[size]
      )}>
        <div 
          className={cn(
            "h-full transition-all duration-500 ease-out",
            variants[variant]
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
