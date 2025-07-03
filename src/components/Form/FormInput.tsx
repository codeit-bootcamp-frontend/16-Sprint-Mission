import {useState } from "react";
import styles from "./FormInput.module.css";

// 폼이 받아오는 props타입 정의
type FormInputProps = {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  label: string;
  errorMessage: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = (props: FormInputProps) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };

  return (
    <div className={styles.formInput}>
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "passwordConfirm" && setFocused(true)
        }
        data-focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
