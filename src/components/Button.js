import "./css/Button.css";
import backIcon from "../img/back.svg";

const Button = ({
  className,
  type,
  disabled,
  children,
  onClick = () => {},
}) => {
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
