import "./Button.css";
import classNames from "classnames";

const Button = ({ variant = "primary", text, onClick }) => {
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
