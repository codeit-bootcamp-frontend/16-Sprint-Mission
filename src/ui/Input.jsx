import styles from "./Input.module.css";

const Input = ({ ...props }) => {
  const { type, name, placeholder, onChange } = props;
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className={styles.input}
    />
  );
};

export default Input;
