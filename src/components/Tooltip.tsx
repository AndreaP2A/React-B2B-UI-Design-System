import { useState, type ReactNode } from 'react';
import { cn } from '../utils';

interface TooltipProps {
  content: string;
  children: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export function Tooltip({ content, children, position = 'top', className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "-top-2 left-1/2 -translate-x-1/2 -translate-y-full mb-2",
    bottom: "-bottom-2 left-1/2 -translate-x-1/2 translate-y-full mt-2",
    left: "top-1/2 -left-2 -translate-x-full -translate-y-1/2 mr-2",
    right: "top-1/2 -right-2 translate-x-full -translate-y-1/2 ml-2"
  };

  const arrows = {
    top: "bottom-[-4px] left-1/2 -translate-x-1/2 border-t-secondary-900",
    bottom: "top-[-4px] left-1/2 -translate-x-1/2 border-b-secondary-900",
    left: "right-[-4px] top-1/2 -translate-y-1/2 border-l-secondary-900",
    right: "left-[-4px] top-1/2 -translate-y-1/2 border-r-secondary-900"
  };

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          className={cn(
            "absolute z-[100] px-2 py-1 text-[10px] font-medium text-white bg-secondary-900 rounded-md whitespace-nowrap shadow-lg animate-in fade-in zoom-in-95 duration-150",
            positions[position],
            className
          )}
        >
          {content}
          <div className={cn(
            "absolute w-0 h-0 border-[4px] border-transparent",
            arrows[position]
          )} />
        </div>
      )}
    </div>
  );
}
