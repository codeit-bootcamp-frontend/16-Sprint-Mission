"use client";

import { ChangeEvent } from "react";

interface InputProps {
  id: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ id, type, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      className="w-full h-[52px] px-6 text-base text-gray-900 bg-gray-100 rounded-3xl border-2 border-gray-900 shadow-button"
      onChange={onChange}
    />
  );
};

export default Input;
