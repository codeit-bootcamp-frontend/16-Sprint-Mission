import { useState } from "react";
import Input from "@/components/ui/Input";
import { InputFieldProps } from "@/types/form";
import IconButton from "@/components/ui/Button/IconButton";
import EyeIcon from "@/assets/images/ic_visibility_on.svg";
import EyeCloseIcon from "@/assets/images/ic_visibility_off.svg";

const PasswordField = ({
  label,
  inputId,
  name,
  placeholder,
  onBlur,
  fieldError,
}: InputFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="flex flex-col">
      <label className="form-label" htmlFor="userPassword">
        {label}
      </label>

      <div className="relative">
        <Input
          className="pr-[60px]"
          type={isVisible ? "text" : "password"}
          id={inputId}
          name={name}
          autoComplete="current-password"
          placeholder={placeholder}
          required
          onBlur={onBlur}
          isError={fieldError}
        />
        <IconButton
          type="button"
          className="absolute top-1/2 right-6 -translate-y-1/2 z-[1]"
          title="비밀번호 표시/숨김"
          aria-label="비밀번호 표시/숨김"
          aria-pressed="false"
          icon={isVisible ? EyeIcon : EyeCloseIcon}
          width={24}
          height={24}
          hasBgColor={false}
          onClick={() => setIsVisible((prev) => !prev)}
        />
      </div>

      <span className="form-input-hint">{fieldError}</span>
    </div>
  );
};

export default PasswordField;
