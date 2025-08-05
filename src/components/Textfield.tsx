import { InputHTMLAttributes, useState } from "react";
import "./css/InputCommon.css";
import "./css/Textfield.css";
import passwordIconOff from "../img/visibility_off.svg";
import passwordIconOn from "../img/visibility_on.svg";

/**
 * Textfield 컴포넌트
 *
 * @param {boolean|null} [isValid=null] - 에러 상태 표시 (null: 초기상태, false: 에러 상태)
 * @param {string} [message] - 에러 메시지 (isValid가 false일 때 출력됨)
 * @param {string} [className] - 추가할 CSS 클래스명
 * @param {string} [type] - input 태그의 type (password인 경우 비밀번호 표시/숨김 기능 제공)
 * @param {...InputHTMLAttributes<HTMLInputElement>} rest - 기타 HTML input 기본 속성
 * @returns {JSX.Element} Textfield 컴포넌트
 *
 * @example
 * // 기본 사용 예시
 * <Textfield
     value={value}
     message={message}
     isValid={isValid}
     id="email"
     name="email"
     type="email"
     placeholder="입력"
     onChange={(e) => onChangeTextfield(e.target.name, e.target.value)}
   />
 *
 * @example
 * // 비밀번호 사용 예시
 * <Textfield
    value={value}
    message={message}
    isValid={isValid}
    id="password"
    name="password"
    type="password"
    placeholder="비밀번호를 입력해주세요"
    onChange={(e) => onChangeTextfield(e.target.name, e.target.value)}
   />
 **/

interface TextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean | null;
  message?: string;
  className?: string;
  type?: string;
}

const Textfield = ({
  isValid = null,
  message,
  className,
  type,
  ...rest
}: TextfieldProps) => {
  const getErrorMessageClass = (isValid: boolean | null): string => {
    return isValid === false ? "input__message--error" : "";
  };

  const hasMessage = !!message;
  const isInvalid = isValid === false;
  const showMessage = hasMessage && isInvalid;
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";
  const textfieldType = isPasswordType
    ? showPassword
      ? "text"
      : "password"
    : type;

  const onTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="input__container">
      <div className="input__wrapper">
        <input
          type={textfieldType}
          className={`input textfield ${className}`}
          {...rest}
        />
        {isPasswordType && (
          <img
            src={showPassword ? passwordIconOn : passwordIconOff}
            width="24px"
            className="input__password__icon"
            aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
            aria-pressed={showPassword ? "true" : "false"}
            role="button"
            onClick={onTogglePassword}
          />
        )}
      </div>
      {showMessage && (
        <div className={`${getErrorMessageClass(isValid)}`}>{message}</div>
      )}
    </div>
  );
};

export default Textfield;
