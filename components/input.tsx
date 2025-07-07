"use client";

import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import React, { useState, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, error, ...props }, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const isPasswordType = type === "password";

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prev) => !prev);
    };

    const inputType = isPasswordType
      ? isPasswordVisible
        ? "text"
        : "password"
      : type;

    return (
      <div className="flex flex-col gap-4 w-full">
        <label htmlFor={id} className="text-[14px] font-bold text-gray-800">
          {label}
        </label>
        <div className="relative flex items-center">
          <input
            id={id}
            type={inputType}
            ref={ref}
            className={`w-full h-14 px-4 text-sm bg-gray-100 rounded-xl border-2 placeholder:text-secondary-400 ${
              error
                ? "border-error focus:outline-error"
                : "border-transparent focus:outline-primary-100"
            }`}
            {...props}
          />
          {isPasswordType && (
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-4 text-gray-500"
            >
              {isPasswordVisible ? (
                <FaRegEye size={24} />
              ) : (
                <FaRegEyeSlash size={24} />
              )}
            </button>
          )}
        </div>
        {error && (
          <span className="text-red-500 font-semibold text-sm mt-2 px-4">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
