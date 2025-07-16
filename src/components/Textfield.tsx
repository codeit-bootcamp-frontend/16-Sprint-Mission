import { InputHTMLAttributes, useState } from "react";
import "./css/InputCommon.css";
import "./css/Textfield.css";
import passwordIconOff from "../img/btn_visibility_off.svg";
import passwordIconOn from "../img/btn_visibility_on.svg";

/*
  [Textfield 필수 속성]
  - onValueChange: 컴포넌트 밖에서 텍스트필드 값을 변경하는 메소드 전달 필요
  
  [Textfield 상태 속성]
  - isValid: 에러 상태 표시 => null(초기상태). true 값을 넘기면 메시지 출력
  - message: 메세지가 있는 경우 출력
*/

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (name: string, value: string) => void;
  isValid?: boolean | null;
  message?: string;
  className?: string;
  type?: string;
}

const Textfield = ({
  onValueChange = () => {},
  isValid = null,
  message,
  className,
  type,
  ...rest
}: TextfieldProps) => {
  const statusMessageClass: Record<string, string> = {
    null: "",
    false: "input__message--error",
  };

  const hasMessage = !!message;
  const isInvalid = isValid === false;
  const showMessage = hasMessage && isInvalid;
  const [showPassword, setShowPassword] = useState(false);

  const onTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input__container">
      <div className="input__wrapper">
        <input
          onChange={(e) => onValueChange(e.target.name, e.target.value)}
          className={`input textfield ${className}`}
          {...rest}
        />
        {type === "password" && (
          <img
            src={showPassword ? passwordIconOn : passwordIconOff}
            width="24px"
            className="input__password__icon"
            aria-label="비밀번호 표시"
            aria-pressed="false"
            role="button"
            onClick={onTogglePassword}
          />
        )}
      </div>
      {showMessage && (
        <div className={`${statusMessageClass[String(isValid)]}`}>
          {message}
        </div>
      )}
    </div>
  );
};

export default Textfield;
