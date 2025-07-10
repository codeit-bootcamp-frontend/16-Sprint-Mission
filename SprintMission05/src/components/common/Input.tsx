import React, { ChangeEvent, KeyboardEvent } from "react";

type InputProps = {
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  name?: string;
  onKeyDown?: (
    e: KeyboardEvent<HTMLInputElement> | KeyboardEvent<HTMLTextAreaElement>
  ) => void;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  name,
  onKeyDown,
}) => {
  const commonProps = {
    value,
    onChange,
    placeholder,
    disabled,
    name,
    onKeyDown,
    className: `
      border 
      border-gray-200 
      rounded-xl 
      bg-gray-100 
      px-6 
      py-4 
      text-base 
      font-normal 
      text-gray-400 
      w-full
      disabled:opacity-50
      disabled:cursor-not-allowed
    `,
  };

  if (type === "textarea") {
    return (
      <textarea
        {...commonProps}
        className={`${commonProps.className} h-[282px] resize-none`}
      />
    );
  }

  return <input type={type} {...commonProps} />;
};

export default Input;
