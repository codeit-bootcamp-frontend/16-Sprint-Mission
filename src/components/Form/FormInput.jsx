import Header from "../Header/Header"

import styles from './FormInput.module.css'
import './FormInput.css'

function FormInput({ label, type, placeholder, value, onChange, name, onKeyDown, onCompositionStart, onCompositionEnd }) {
  
  return (
  <div className={styles.input}>
    <Header type={'h3'} text={label}/>
    {type === 'textarea' ? 
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(name, e.target.value)} 
      name={name}
    /> : 
    <input
        className={styles.inputField}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(name, e.target.value)} 
        name={name}
        onKeyDown={onKeyDown}
        onCompositionStart={onCompositionStart}
        onCompositionEnd={onCompositionEnd}
      />}
  </div>
  );
}

export default FormInput