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

const BASE_CLASS =
  'flex items-center text-base font-bold rounded-[1.68rem] border-2 border-slate-900 shadow-offset' as const;

const SIZE_CLASS = {
  small: 'p-4',
  large: 'min-w-41 gap-1 py-3.5 px-10',
} as const;

const Button = ({
  disabled,
  mode = 'add',
  size = 'large',
  children,
  className,
  ...rest
}: ButtonProps) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={clsx(
        BASE_CLASS,
        SIZE_CLASS[size],
        {
          'bg-slate-200 text-slate-900': (mode === 'add' || mode === 'edit') && disabled,
          'bg-violet-600 text-white': mode === 'add' && !disabled,
          'bg-rose-500 text-white': mode === 'delete',
          'bg-lime-300 text-slate-900': mode === 'edit' && !disabled,
        },
        className,
      )}
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
