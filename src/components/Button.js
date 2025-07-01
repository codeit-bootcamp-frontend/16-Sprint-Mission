import "./css/Button.css";

const Button = ({
  className,
  type,
  disabled,
  children,
  onClick = () => {},
}) => {
  const btnStyleClass = {
    register: "btn-register",
    small: "btn-small",
    large: "btn-large",
  };

  const btnClassName = `btn ${btnStyleClass[type] || ""} ${className}`;

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
    </button>
  );
};

export default Button;
