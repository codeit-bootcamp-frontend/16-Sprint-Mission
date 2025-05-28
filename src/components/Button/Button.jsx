import { Link } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ href, buttonText, type = 'button', disabled }) {

  const buttonClasses = `${styles.button}`;
  return (
    <button type={type} className={buttonClasses} disabled={disabled}>
      {disabled ? <span>{buttonText}</span> : <Link to={href}>{buttonText}</Link>}
    </button>
    
  );
}

export default Button;
