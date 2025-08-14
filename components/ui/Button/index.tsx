import clsx from "clsx";
import { ButtonProps } from "@/types/button";

const Button = ({
  type = "button",
  variant,
  size,
  shape,
  children,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={clsx(`btn-base ${className}`, {
        "btn-sm": size === "sm",
        "btn-lg": size === "lg",
        "btn-primary": variant === "primary" && !disabled,
        "btn-outlined": variant === "outlined" && !disabled,
        "btn-disabled": disabled,
        "rounded-full": shape === "round",
      })}
      style={props.style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
