/** @jsxImportSource @emotion/react */
import { useState } from "react";
import useForm from "@/hooks/useForm";
import Input from "@/components/ui/Input";
import FormControl from "./FormControl";
import { FormField } from "@/types/form";
import IconButton from "@/components/ui/Button/IconButton";
import eyeImg from "@/assets/images/ic_visibility_on.svg";
import eyeCloseImg from "@/assets/images/ic_visibility_off.svg";

const PasswordField = ({
  label,
  inputId,
  name,
  placeholder,
  form,
  onBlur,
}: FormField) => {
  const [isVisible, setIsVisible] = useState(false);
  const { fieldErrors } = useForm(form);

  return (
    <FormControl>
      <label className="form-label" htmlFor="userPassword">
        {label}
      </label>
      <div className="input-hint-wrap">
        <div className="visible-wrap">
          <Input
            className="form-input"
            type={isVisible ? "text" : "password"}
            id={inputId}
            name={name}
            autoComplete="current-password"
            placeholder={placeholder}
            required
            onBlur={onBlur}
            isError={fieldErrors.password}
          />
          <IconButton
            type="button"
            className="btn-password-visible"
            id="passwordVisibleBtn"
            title="비밀번호 표시/숨김"
            aria-label="비밀번호 표시/숨김"
            aria-pressed="false"
            imgSrc={isVisible ? eyeImg : eyeCloseImg}
            width={24}
            height={24}
            hasBgColor={false}
            onClick={() => setIsVisible((prev) => !prev)}
          />
        </div>
        <span className="form-input-hint">{fieldErrors.password}</span>
      </div>
    </FormControl>
  );
};

export default PasswordField;
