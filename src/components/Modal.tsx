import { type ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../utils';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, title, children, footer, className }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      <div 
        className="fixed inset-0 bg-black/50 transition-opacity backdrop-blur-sm" 
        onClick={onClose} 
      />
      

      <div
        ref={modalRef}
        className={cn(
          'relative w-full max-w-lg overflow-hidden rounded-xl bg-white dark:bg-secondary-900 shadow-2xl transition-all',
          className
        )}
      >

        <div className="flex items-center justify-between border-b border-secondary-100 dark:border-secondary-800 p-6">
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-secondary-400 hover:bg-secondary-100 dark:hover:bg-secondary-800 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>


        <div className="p-6 text-secondary-600 dark:text-secondary-400">
          {children}
        </div>


        {footer && (
          <div className="flex items-center justify-end gap-3 border-t border-secondary-100 dark:border-secondary-800 p-6">
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export { Modal };
