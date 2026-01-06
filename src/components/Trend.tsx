import { cn } from '../utils';

interface TrendProps {
  value: number;
  label?: string;
  className?: string;
  size?: 'sm' | 'md';
  showIcon?: boolean;
}

export function Trend({ 
  value, 
  label, 
  className, 
  size = 'md',
  showIcon = true 
}: TrendProps) {
  const isPositive = value >= 0;
  const isNeutral = value === 0;

  return (
    <div className={cn(
      "inline-flex items-center gap-1 font-semibold tabular-nums",
      isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400",
      isNeutral && "text-secondary-500",
      size === 'sm' ? "text-xs" : "text-sm",
      className
    )}>
      {showIcon && !isNeutral && (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={cn("w-3 h-3", !isPositive && "rotate-180")}
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      )}
      <span>{isPositive && !isNeutral ? '+' : ''}{value}%</span>
      {label && <span className="text-secondary-500 dark:text-secondary-400 font-normal ml-1">{label}</span>}
    </div>
  );
}
