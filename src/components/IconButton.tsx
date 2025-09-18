import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import Edit from '@/assets/icons/edit.svg';
import Plus from '@/assets/icons/plus.svg';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: 'add' | 'edit';
  children?: React.ReactNode;
  className?: string;
}

const IconButton = ({ mode = 'edit', children, className }: IconButtonProps) => {
  const baseClass = 'rounded-full';

  const getModeClass = (): string => {
    const modeClassMap: Record<string, string> = {
      add: 'p-5 bg-slate-200',
      edit: 'p-4.5 bg-slate-transparent-900 border-2 border-slate-900',
    };

    return modeClassMap[mode];
  };

  return (
    <button className={clsx(baseClass, getModeClass(), className)}>
      {mode === 'add' && <Plus width='24' height='24' className='stroke-slate-500' />}
      {mode === 'edit' && <Edit width='24' height='24' className='stroke-white' />}
      {children}
    </button>
  );
};

export default IconButton;
