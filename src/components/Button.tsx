import { ReactNode, MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonType {
  children: ReactNode;
  type?: 'delete' | 'edit' | 'add';
  htmlType?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  size?: 'sm' | 'lg';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string; // 외부에서 className을 추가할 수 있도록 추가
}

const Button = ({
  children,
  type = 'add',
  size = 'lg',
  disabled = false,
  htmlType = 'button',
  ...props
}: ButtonType) => {
  const baseStyle = twMerge(
    'flex justify-center items-center gap-1 flex-shrink-0',
    'font-bold',
    'h-13 w-fit',
    'border-2 border-slate-900 rounded-[24px] border-b-4 border-r-4',
    'transition-colors duration-700',
    'cursor-pointer',
  );

  const defaultStyles = {
    add: 'text-white bg-violet-600',
    delete: 'bg-rose-500 text-white',
    edit: 'bg-lime-300 text-black',
  };

  const disabledStyles = 'bg-slate-200 text-black cursor-not-allowed border-b-4 border-r-4';

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const buttonClassName = twMerge(
    baseStyle,
    sizes[size],
    disabled ? disabledStyles : defaultStyles[type],
    !disabled && 'hover:bg-opacity-80 active:bg-opacity-90',
    props.className, // 외부에서 전달받은 className 추가
  );

  return (
    <button type={htmlType} className={buttonClassName} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
