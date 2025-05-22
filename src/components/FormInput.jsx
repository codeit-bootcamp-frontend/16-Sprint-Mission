import { useEffect, useState } from "react";
import { updateValidateRule, useValidate } from "../hooks/useValidate";
import styles from "../styles/ErrMsg.module.css";

function FormInput(props) {
  const { placeholder, name, type, id, setHasErr } = props;
  const [value, setValue] = useState("");
  const [err, errMsg, updateErrUi] = useValidate();

  useEffect(()=>{
    updateValidateRule(name, value);
  },[value])

  return (
    <>
      <input
        value={value}
        className={err ? styles["error-line"] : ""}
        onChange={(e)=>setValue(e.target.value)}
        onBlur={(e)=>updateErrUi(e)}
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
