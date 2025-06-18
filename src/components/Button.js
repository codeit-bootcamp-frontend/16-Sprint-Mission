import "../css/components/Button.css";

const Button = ({ className, type, children, onClick }) => {
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
    <button type="button" className={btnClassName} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
