import "./Button.css";

const Button = ({ alt, corner, text, state, size, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={state === "inactive"}
      className={`Button btn-${corner} btn-${state} btn-${size}`}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
