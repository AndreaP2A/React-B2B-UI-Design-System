import type { HTMLAttributes, TableHTMLAttributes } from 'react';
import { cn } from '../utils';

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {}

const Table = ({ className, ...props }: TableProps) => (
  <div className="relative w-full overflow-auto rounded-lg border border-secondary-200 dark:border-secondary-800">
    <table
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
);

const TableHeader = ({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
  <thead className={cn('bg-secondary-50 dark:bg-secondary-900/50 [&_tr]:border-b', className)} {...props} />
);

const TableBody = ({ className, ...props }: HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody className={cn('[&_tr:last-child]:border-0', className)} {...props} />
);

const TableRow = ({ className, ...props }: HTMLAttributes<HTMLTableRowElement>) => (
  <tr
    className={cn(
      'border-b transition-colors hover:bg-secondary-50/50 data-[state=selected]:bg-secondary-100 dark:border-secondary-800 dark:hover:bg-secondary-800/50',
      className
    )}
    {...props}
  />
);

const TableHead = ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
  <th
    className={cn(
      'h-12 px-4 text-left align-middle font-semibold text-secondary-600 dark:text-secondary-400 [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
);

const TableCell = ({ className, ...props }: HTMLAttributes<HTMLTableCellElement>) => (
  <td
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0 font-normal', className)}
    {...props}
  />
);

export { Table, TableHeader, TableBody, TableRow, TableHead, TableCell };
