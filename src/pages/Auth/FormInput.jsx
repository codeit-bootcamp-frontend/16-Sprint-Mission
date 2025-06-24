import styles from './styles/ErrMsg.module.css';

function FormInput(props) {
  const { placeholder, name, type, id, error, errorMessage, validate, value } =
    props;

  function handleChange(e) {
    validate(name, e.target.value);
  }

  function handleBlur(e) {
    validate(name, e.target.value);
  }

  return (
    <>
      <input
        value={value}
        className={error && styles.inputErrorBorder}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <div className={styles.errorMessage}>{errorMessage}</div>
    </>
  );
}

export default FormInput;
