import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "success" | "danger";
  children: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  type,
  variant,
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={clsx("btn-base", {
        "btn-primary": variant === "primary" && !disabled,
        "btn-success": variant === "success" && !disabled,
        "btn-danger": variant === "danger" && !disabled,
        "btn-disabled": disabled,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
