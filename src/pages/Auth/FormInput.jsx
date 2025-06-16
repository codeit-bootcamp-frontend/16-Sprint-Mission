import React from 'react';
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
        className={error ? styles['error-line'] : ''}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <div className={styles['error-message']}>{errorMessage}</div>
    </>
  );
}

const MemoizedFormInput = React.memo(FormInput);

export default MemoizedFormInput;
