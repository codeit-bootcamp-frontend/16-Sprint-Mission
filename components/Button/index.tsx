import { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "success" | "danger";
  children: ReactNode;
  disabled?: boolean;
}

const baseButtonStyle =
  "w-[164px] h-[52px] flex items-center justify-center text-base font-bold rounded-3xl border-2 border-gray-900 shadow-button duration-150";

const Button = ({ type, variant, children, disabled }: ButtonProps) => {
  const getVariantStyle = () => {
    if (disabled) {
      return "bg-gray-200 text-gray-900";
    }

    switch (variant) {
      case "primary":
        return "bg-primary text-white hover:bg-primary-dark";
      case "danger":
        return "bg-danger text-white hover:bg-danger-dark";
      default:
        return "bg-gray-200 text-gray-900";
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseButtonStyle} ${getVariantStyle()}`}
    >
      {children}
    </button>
  );
};

export default Button;
