import { Link } from "react-router-dom";
import "../css/components/Button.css";

function Button({ className, type, to }) {
  const btnStyleClass = {
    register: "btn-register",
    small: "btn-small",
    large: "btn-large",
  };
  return (
    <button className={`btn ${btnStyleClass[type]} ${className}`}>
      <Link to={to}>상품 등록하기</Link>
    </button>
  );
}

export default Button;
