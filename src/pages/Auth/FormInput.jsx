import styles from "../../styles/ErrMsg.module.css";

function FormInput(props) {
  const { placeholder, name, type, id , err, errMsg, isValidate, value, setValue, passwordInputValue=null } = props;

  function handleChange(e){
    setValue(e.target.value)
  }

 function handleBlur(){
  isValidate(name, passwordInputValue)
 }

  return (
    <>
      <input
        value={value}
        className={err ? styles["error-line"] : ""}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <div className={styles[`error-message`]}>{errMsg}</div>
    </>
  );
}

export default FormInput;

