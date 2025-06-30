import React from "react";
import { getAuthValidClassName } from "../../utils/authUtils";
import PasswordInput from "../PasswordInput/PasswordInput";
import Input from "../Input/Input";

const AuthFormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  validInfo,
}) => {
  const handleChangeValue = (e) => {
    onChange(e.target.value);
  };

  const hasError = !validInfo.isValid;

  return (
    <div className="auth-form__item">
      <label htmlFor={name} className="auth-form__label">
        {label}
      </label>
      {type === "password" ? (
        <PasswordInput
          name={name}
          value={value}
          onChange={handleChangeValue}
          placeholder={placeholder}
          className={getAuthValidClassName(validInfo.isValid)}
        />
      ) : (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={handleChangeValue}
          placeholder={placeholder}
          className={getAuthValidClassName(validInfo.isValid)}
        />
      )}
      {hasError && <p className="auth-form__error-msg">{validInfo.msg}</p>}
    </div>
  );
};

export default AuthFormInput;
