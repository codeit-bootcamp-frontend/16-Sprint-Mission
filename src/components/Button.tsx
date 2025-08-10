"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type VariantButtonType = "add" | "delete" | "edit";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantButtonType;
  children: ReactNode;
}

const defaultStyle =
  "inline-flex items-center justify-center w-[165px] h-[52px] gap-1 border-2 border-slate900 text-slate900 text-base font-bold rounded-3xl shadow-custom group";
const disabledStyle = "disabled:bg-slate200 disabled:text-slate900";

const VARIANT_MAP = {
  add: "text-white bg-violet600",
  delete: "text-white bg-rose",
  edit: "bg-lime",
};

const Button = ({ variant, children, className, ...props }: Props) => {
  const variantStyle = variant ? VARIANT_MAP[variant] : null;

  return (
    <button
      type="button"
      className={twMerge(defaultStyle, disabledStyle, variantStyle, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
