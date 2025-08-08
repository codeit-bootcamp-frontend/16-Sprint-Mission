import PasswordInput from "../PasswordInput/PasswordInput";
import Input from "../Input/Input";
import { forwardRef, InputHTMLAttributes } from "react";
import {
  AuthFormItem,
  AuthFormLabel,
  AuthFormErrorMsg,
} from "@styles/formStyles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMsg?: string;
}

const AuthFormInput = forwardRef<HTMLInputElement, Props>(
  ({ label, errorMsg, ...props }, ref) => {
    return (
      <AuthFormItem>
        <AuthFormLabel>{label}</AuthFormLabel>
        {props.type === "password" ? (
          <PasswordInput ref={ref} {...props} />
        ) : (
          <Input ref={ref} {...props} />
        )}
        {errorMsg && <AuthFormErrorMsg>{errorMsg}</AuthFormErrorMsg>}
      </AuthFormItem>
    );
  }
);

export default AuthFormInput;
