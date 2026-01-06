import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    const variants = {
      primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm transition-colors',
      secondary: 'bg-white text-secondary-900 border border-secondary-200 hover:bg-secondary-50 shadow-sm transition-colors dark:bg-secondary-800 dark:text-white dark:border-secondary-700 dark:hover:bg-secondary-700',
      danger: 'bg-red-600 text-white hover:bg-red-700 shadow-sm transition-colors',
      ghost: 'bg-transparent text-secondary-600 hover:bg-secondary-100 dark:text-secondary-400 dark:hover:bg-secondary-800 transition-colors',
      outline: 'bg-transparent text-primary-600 border border-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-950/30 transition-all border-2',
      link: 'bg-transparent text-primary-600 hover:underline px-0 py-0 h-auto font-semibold dark:text-primary-400',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs font-medium',
      md: 'px-4 py-2 text-sm font-medium',
      lg: 'px-6 py-3 text-base font-semibold',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(
          'inline-flex items-center justify-center rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
