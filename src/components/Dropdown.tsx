import { useState, useRef, useEffect, type ReactNode } from 'react';
import { cn } from '../utils';

interface DropdownProps {
  trigger: ReactNode;
  children: ReactNode;
  align?: 'left' | 'right';
  className?: string;
}

export function Dropdown({ trigger, children, align = 'right', className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div 
          className={cn(
            "absolute z-50 mt-2 w-72 rounded-2xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100",
            align === 'right' ? "right-0" : "left-0",
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface NotificationItemProps {
  title: string;
  description: string;
  time: string;
  isRead?: boolean;
}

export function NotificationItem({ title, description, time, isRead = false }: NotificationItemProps) {
  return (
    <div className={cn(
      "px-4 py-3 hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors cursor-pointer border-b last:border-0 border-secondary-100 dark:border-secondary-800",
      !isRead && "bg-primary-50/30 dark:bg-primary-900/10"
    )}>
      <div className="flex justify-between items-start gap-2">
        <span className={cn("text-xs font-bold", isRead ? "text-secondary-900 dark:text-white" : "text-primary-600 dark:text-primary-400")}>
          {title}
        </span>
        <span className="text-[10px] text-secondary-400 whitespace-nowrap">{time}</span>
      </div>
      <p className="text-xs text-secondary-500 dark:text-secondary-400 line-clamp-2 mt-0.5">
        {description}
      </p>
    </div>
  );
}
