import { Link } from "react-router-dom";
import "./button.css";

function Button({ children, disabled, link, radius, size }) {
  return (
    <Link to={link}>
      <button className={size} disabled={disabled}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
