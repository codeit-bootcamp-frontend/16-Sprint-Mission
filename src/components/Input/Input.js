import styles from "./Input.module.scss";

const Input = ({ type, name, value, onChange, placeholder, className }) => {
  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
