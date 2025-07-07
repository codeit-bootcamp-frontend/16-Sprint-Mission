import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import './Button.css'

function Button({ href, buttonText, type = 'button', disabled, className, onClick }) {

  const buttonClasses = `${styles.button} ${className}`;
  return (
    <button type={type} className={buttonClasses} disabled={disabled} onClick={onClick}>
      {disabled ? <span>{buttonText}</span> : <Link to={href}>{buttonText}</Link>}
    </button>
    
  );
}

export default Button;
