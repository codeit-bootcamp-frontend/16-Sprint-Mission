import { useState, type ChangeEventHandler, type FocusEventHandler, type ReactNode } from 'react';
import iconPasswordVisible from '@/assets/icons/icon_password_visible.svg';
import iconPasswordInvisible from '@/assets/icons/icon_password_invisible.svg';

// AuthField
const AuthField = ({ children }: { children: ReactNode }) => {
  return <div className='mb-[10px] md:mb-[18px]'>{children}</div>;
};

// AuthLabel
const AuthLabel = ({
  children,
  htmlFor = '',
  ...props
}: {
  children: ReactNode;
  htmlFor: string;
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className='inline-block font-pretendard font-bold text-gray-800
      text-[14px] mb-[8px]
      md:text-[16px] md:mb-[16px]'
      {...props}
    >
      {children}
    </label>
  );
};

// AuthInput
const AuthInput = ({
  id,
  placeholder,
  ariaLabel,
  type,
  autocomplete,
  value,
  valid,
  handleInputChange,
  handleInputBlur,
  ...props
}: {
  id: string;
  placeholder: string;
  ariaLabel: string;
  type: string;
  autocomplete?: string;
  value: string;
  valid: boolean | null;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  handleInputBlur: FocusEventHandler<HTMLInputElement>;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIconClick = () => setIsVisible(!isVisible);

  return (
    <div
      className={`py-[15px] px-[24px] bg-gray-100 rounded-[12px] flex flex-row
      ${valid === null && ''}
      ${valid === false && 'border border-solid border-error'}
      ${valid === true && 'border border-solid border-brand-blue'}`}
    >
      <input
        className={`font-pretendard font-normal text-[16px]/[24px] outline-none placeholder:text-gray-400
        grow`}
        id={id}
        placeholder={placeholder}
        aria-label={ariaLabel}
        type={isVisible ? 'text' : type}
        auto-complete={autocomplete}
        value={value}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        {...props}
      />
      {id.includes('password') && (
        <img
          src={isVisible ? iconPasswordVisible : iconPasswordInvisible}
          className='cursor-pointer'
          onClick={handleIconClick}
        />
      )}
    </div>
  );
};

// AuthHint
const AuthHint = ({ children }: { children: ReactNode }) => {
  return (
    <span className='inline-block font-pretendard font-semibold text-[14px]/[24px] text-error ml-[16px] mt-[8px]'>
      {children}
    </span>
  );
};

AuthField.label = AuthLabel;
AuthField.input = AuthInput;
AuthField.hint = AuthHint;

export default AuthField;
