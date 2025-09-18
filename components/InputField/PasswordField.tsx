import { useState, forwardRef } from "react";
import clsx from "clsx";
import { PasswordFieldProps } from "@/types/form";
import IconButton from "@/components/ui/Button/IconButton";
import EyeIcon from "@/assets/images/ic_visibility_on.svg";
import EyeCloseIcon from "@/assets/images/ic_visibility_off.svg";

const PasswordField = forwardRef<HTMLInputElement, PasswordFieldProps>(
  (
    { label, inputRef, inputId, placeholder, error, isLogin, ...props },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div className="flex flex-col">
        <label className="form-label" htmlFor="userPassword">
          {label}
        </label>

        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            type={isVisible ? "text" : "password"}
            className={clsx("input pr-[60px]", {
              "input-error": error,
            })}
            autoComplete={isLogin ? "current-password" : "new-password"}
            placeholder={placeholder}
            required
            {...props}
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
        <p className="mt-1 text-sm md:text-md text-red-500 h-6">
          {error ? error : ""}
        </p>
      </div>
    );
  }
);

PasswordField.displayName = "PasswordField";

export default PasswordField;
