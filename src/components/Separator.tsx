import { cn } from '../utils';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function Separator({ orientation = 'horizontal', className }: SeparatorProps) {
  return (
    <div 
      className={cn(
        "bg-secondary-200 dark:bg-secondary-800 shrink-0",
        orientation === 'horizontal' ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )} 
    />
  );
}
