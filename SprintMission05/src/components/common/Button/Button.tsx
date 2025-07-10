import "./Button.css";
import classNames from "classnames";

interface ButtonProps {
  variant?: "primary" | "secondary" | "inactive";
  text: string;
  onClick?: () => void;
}

const Button = ({ variant = "primary", text, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames("Button", variant)}
      disabled={variant === "inactive"}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
