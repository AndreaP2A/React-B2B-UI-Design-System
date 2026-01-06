import { cn } from '../utils';

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  className?: string;
}

export function Avatar({ 
  src, 
  alt, 
  fallback, 
  size = 'md', 
  status,
  className 
}: AvatarProps) {
  
  const sizes = {
    xs: 'w-6 h-6 text-[10px]',
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-12 h-12 text-base',
    xl: 'w-16 h-16 text-xl',
  };

  const statusColors = {
    online: 'bg-emerald-500',
    offline: 'bg-secondary-400',
    away: 'bg-amber-500',
    busy: 'bg-red-500',
  };

  return (
    <div className={cn("relative inline-block shrink-0", sizes[size], className)}>
      <div className="w-full h-full rounded-full overflow-hidden bg-secondary-100 dark:bg-secondary-800 flex items-center justify-center border border-secondary-200 dark:border-secondary-700">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="font-bold text-secondary-600 dark:text-secondary-400 uppercase">
            {fallback || alt?.substring(0, 2) || '?'}
          </span>
        )}
      </div>
      {status && (
        <span className={cn(
          "absolute bottom-0 right-0 block rounded-full ring-2 ring-white dark:ring-secondary-900",
          statusColors[status],
          size === 'xs' ? 'w-1.5 h-1.5' : size === 'sm' ? 'w-2 h-2' : 'w-2.5 h-2.5'
        )} />
      )}
    </div>
  );
}
