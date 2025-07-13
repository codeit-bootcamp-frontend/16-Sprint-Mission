import Image from "next/image";
import { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  variant: string;
  children?: ReactNode;
  disabled?: boolean;
}

const Button = ({ type, variant, children, disabled }: ButtonProps) => {
  const baseButtonStyle =
    "w-[164px] h-[52px] flex items-center justify-center text-base font-bold rounded-3xl border-2 border-black shadow-button";

  // 배경색 조건 분기
  let bgColor = "";
  if (disabled) {
    bgColor = "bg-gray-200";
  } else if (variant === "primary") {
    bgColor = "bg-primary";
  } else if (variant === "danger") {
    bgColor = "bg-danger";
  }

  // 텍스트 색상 조건 분기
  let textColor = "";
  if (disabled) {
    textColor = "text-gray-900";
  } else if (variant === "primary" || variant === "danger") {
    textColor = "text-white";
  } else {
    textColor = "text-gray-900";
  }

  const classNames = `${baseButtonStyle} ${bgColor} ${textColor}`;

  return (
    <button type={type} disabled={disabled} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
