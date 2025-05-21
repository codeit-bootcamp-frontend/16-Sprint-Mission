import styles from "./Button.module.css";

const Button = ({
  type = "button",
  variant,
  size,
  children,
  className = "",
  onClick,
}) => {
  const btnVariant = `btn-${variant}`;
  const btnSize = `btn-${size}`;
  return (
    <button
      type={type}
      className={`${styles[btnVariant]} ${styles[btnSize]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
