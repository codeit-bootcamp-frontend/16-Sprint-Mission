import type { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button = ({ children, className = '', onClick, disabled = false, ...props }: Props) => {
  console.log(disabled);
  return (
    <button
      className={`font-pretendard font-normal text-gray-100   no-underline cursor-pointer
      bg-primary-100 hover:bg-primary-200
      disabled:bg-gray-400 disabled:cursor-not-allowed
      ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
