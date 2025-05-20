import { useState } from "react";
import { useValidate } from "../hooks/useValidate";
import styles from "../styles/errMsg.module.css";

function LoginFormInput(props) {
  const { placeholder, name, type, id, setHasErr } = props;
  const [value, setValue] = useState("");
  const [err, errMsg, updateErrUi] = useValidate();

  return (
    <>
      <input
        value={value}
        className={err ? styles["error-line"] : ""}
        onChange={(e)=>setValue(e.target.value)}
        onBlur={(e)=>updateErrUi(e, setHasErr)}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <div className={styles[`error-message`]}>{errMsg}</div>
    </>
  );
}

export default LoginFormInput;
