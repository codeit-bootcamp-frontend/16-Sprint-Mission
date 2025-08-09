import { ButtonHTMLAttributes } from 'react';

import clsx from 'clsx';

import Check from '@/assets/icons/check.svg';
import Plus from '@/assets/icons/plus.svg';
import X from '@/assets/icons/x.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
  mode?: 'add' | 'delete' | 'edit';
  size?: 'small' | 'large';
  children?: React.ReactNode;
  className?: string;
}

const Button = ({
  disabled,
  mode = 'add',
  size = 'large',
  children,
  className,
  ...rest
}: ButtonProps) => {
  const baseClass =
    'flex items-center text-base font-bold rounded-[1.68rem] border-2 border-slate-900 shadow-offset';

  const getSizeClass = (): string => {
    const sizeClass: Record<string, string> = {
      small: 'p-4',
      large: 'min-w-41 gap-1 py-3.5 px-10',
    };

    return sizeClass[size];
  };

  const getModeClass = (): string => {
    const modeClass: Record<string, string> = {
      add: `${disabled ? 'bg-slate-200 text-slate-900' : 'bg-violet-600 text-white'} border-slate-900`,
      delete: 'bg-rose-500 text-white border-slate-900',
      edit: `${disabled ? 'bg-slate-200' : 'bg-lime-300'} text-slate-900 border-slate-900`,
    };

    return modeClass[mode];
  };

  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(baseClass, getSizeClass(), getModeClass(), className)}
    >
      {mode === 'add' && (
        <Plus
          width={16}
          height={16}
          className={`${disabled ? 'stroke-slate-900' : 'stroke-white'}`}
        />
      )}
      {mode === 'delete' && <X className='stroke-slate-900' />}
      {mode === 'edit' && <Check className='stroke-slate-900' />}
      {children}
    </button>
  );
};

export default Button;
