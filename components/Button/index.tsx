import { ReactNode } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  variant: "primary" | "success" | "danger";
  children: ReactNode;
  disabled?: boolean;
}

const baseButtonStyle =
  "w-[164px] h-[52px] flex items-center justify-center text-base font-bold rounded-3xl border-2 border-black shadow-button";

const Button = ({ type, variant, children, disabled }: ButtonProps) => {
  if (!disabled) {
    if (variant === "primary") return <PrimaryButton>{children}</PrimaryButton>;
    if (variant === "danger") return <DangerButton>{children}</DangerButton>;
  } else
    return (
      <button
        type={type}
        disabled={disabled}
        className={`${baseButtonStyle} text-gray-900`}
      >
        {children}
      </button>
    );
};

export default Button;

const PrimaryButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className={`${baseButtonStyle} bg-primary text-white`}>
      {children}
    </button>
  );
};

const DangerButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className={`${baseButtonStyle} bg-danger text-white`}>
      {children}
    </button>
  );
};
