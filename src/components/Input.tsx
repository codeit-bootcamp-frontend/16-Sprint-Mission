import { InputHTMLAttributes } from 'react';

import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  errorMessage?: string;
}

const Input = ({ className, errorMessage, ...rest }: InputProps) => {
  return (
    <div className='w-full'>
      <input
        {...rest}
        className={clsx(
          'w-full max-w-[63.5rem] px-6 py-3.5 bg-slate-100 border-2 border-slate-900 placeholder-slate-500 shadow-offset rounded-[1.68rem] focus:outline-none',
          className,
        )}
      />
      <div className='text-sm text-red-600 pt-2.5 pl-6'>{errorMessage}</div>
    </div>
  );
};

export default Input;
