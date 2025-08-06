import PasswordInput from "../PasswordInput/PasswordInput";
import Input from "../Input/Input";
import { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMsg?: string;
}

const AuthFormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, errorMsg, ...props }, ref) => {
    return (
      <div className="auth-form__item">
        <label className="auth-form__label">{label}</label>
        {props.type === "password" ? (
          <PasswordInput ref={ref} {...props} />
        ) : (
          <Input ref={ref} {...props} />
        )}
        {errorMsg && <p className="auth-form__error-msg">{errorMsg}</p>}
      </div>
    );
  }
);
export default AuthFormInput;
