import "./css/Button.css";
import backIcon from "../img/back.svg";
import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  type?: "register" | "return" | "cancel" | "small" | "large";
  disabled?: boolean;
  children?: ReactNode;
  onClick?: () => void;
}

const Button = ({
  className = "",
  type = "small",
  disabled = false,
  children,
  onClick = () => {},
}: ButtonProps) => {
  const btnStyleClass = {
    register: "btn-register",
    return: "btn-return",
    cancel: "btn-cancel",
    small: "btn-small",
    large: "btn-large",
  };

  const btnClassName = `btn ${btnStyleClass[type] || ""} ${className}`;

  const isReturn = type === "return";

  const onClickButton = () => {
    onClick();
  };

  return (
    <button
      disabled={disabled}
      type="button"
      className={btnClassName}
      onClick={onClickButton}
    >
      {children}
      {isReturn && <img src={backIcon} alt="목록으로 아이콘" />}
    </button>
  );
};

export default Button;
