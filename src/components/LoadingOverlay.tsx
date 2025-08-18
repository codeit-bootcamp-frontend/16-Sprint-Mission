import clsx from 'clsx';

import DoitIconLogo from '@/assets/icons/doit_icon_logo.svg';
import { Loading } from '@/components/Loading';

interface LoadingOverlayProps {
  className?: string;
}

const LoadingOverlay = ({ className }: LoadingOverlayProps) => {
  return (
    <div
      className={clsx(
        'fixed inset-0 flex flex-col items-center justify-center gap-2 z-50',
        className,
      )}
    >
      <DoitIconLogo />
      <Loading />
    </div>
  );
};

export default LoadingOverlay;
