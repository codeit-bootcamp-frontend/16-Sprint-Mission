import React, { Dispatch, SetStateAction } from "react";
import { getAuthValidClassName } from "../../utils/authUtils";
import PasswordInput from "../PasswordInput/PasswordInput";
import Input from "../Input/Input";
import { ValidResultType } from "types/authType";

interface Props {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  placeholder: string;
  validInfo: ValidResultType;
}

const AuthFormInput = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  validInfo,
}: Props) => {
  const hasError = validInfo.isValid === false;

  return (
    <div className="auth-form__item">
      <label htmlFor={name} className="auth-form__label">
        {label}
      </label>
      {type === "password" ? (
        <PasswordInput
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={getAuthValidClassName(validInfo.isValid)}
        />
      ) : (
        <Input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={getAuthValidClassName(validInfo.isValid)}
        />
      )}
      {hasError && <p className="auth-form__error-msg">{validInfo.msg}</p>}
    </div>
  );
};

export default AuthFormInput;
