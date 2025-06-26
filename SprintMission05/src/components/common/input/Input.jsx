import "./Input.css";

const Input = ({
  value,
  onChange,
  placeholder = "",
  type = "text",
  disabled = false,
  name,
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      className="Input"
    />
  );
};

export default Input;
