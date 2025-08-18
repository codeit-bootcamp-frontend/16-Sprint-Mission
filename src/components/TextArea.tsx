import { TextareaHTMLAttributes } from 'react';

import clsx from 'clsx';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  errorMessage?: string;
}

const TextArea = ({ className, errorMessage, ...rest }: TextAreaProps) => {
  return (
    <div className='relative w-full max-w-[557px]'>
      <textarea
        {...rest}
        className={clsx(
          'w-full placeholder-slate-500 focus:outline-none resize-none pl-1',
          className,
        )}
      />
      <div className='absolute text-sm text-red-600 pt-2.5 pl-6 '>{errorMessage}</div>
    </div>
  );
};

export default TextArea;
