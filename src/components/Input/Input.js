import styles from "./Input.module.scss";

const Input = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  className,
  ...params
}) => {
  const handleChangeValue = (e) => {
    onChange(e.target.value);
  };

  return (
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      className={`${styles.input} ${className}`}
      value={value}
      onChange={handleChangeValue}
      {...params}
    />
  );
};

export default Input;
