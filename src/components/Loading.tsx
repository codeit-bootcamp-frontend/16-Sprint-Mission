import clsx from 'clsx';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};

export function Loading({ size = 'md', className }: LoadingProps) {
  return (
    <div
      className={clsx(
        'animate-spin rounded-full border-4 border-violet-600 border-t-violet-100',
        sizeClasses[size],
        className,
      )}
    />
  );
}
