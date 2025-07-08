import styles from "./TextArea.module.scss";

const TextArea = ({ name, value, onChange, placeholder, className }) => {
  const handleChange = (e) => onChange(e.target.value);

  return (
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={handleChange}
      className={`${styles.textarea} ${className}`}
      placeholder={placeholder}
    />
  );
};

export default TextArea;
