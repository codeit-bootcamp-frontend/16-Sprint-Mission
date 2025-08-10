import clsx from 'clsx';

import { Loading } from '@/components/Loading';

interface LoadingOverlayProps {
  className?: string;
}

const LoadingOverlay = ({ className }: LoadingOverlayProps) => {
  return (
    <div className={clsx('fixed inset-0 flex items-center justify-center z-50', className)}>
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
