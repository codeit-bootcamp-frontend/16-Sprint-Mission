import { TextareaHTMLAttributes } from "react";
import "./css/InputCommon.css";
import "./css/TextArea.css";

/**
 * TextArea 컴포넌트
 *
 * @param {string} value - TextArea value
 * @param {string} [name] - TextArea name
 * @param {string} [placeholder] - TextArea 플레이스홀더 (기본값은 입력해주세요)
 * @param {boolean|null} [isValid=null] - 에러 상태 표시 (null: 초기상태, false: 에러 상태)
 * @param {string} [message] - 에러 메시지 (isValid가 false일 때 출력됨)
 * @param {string} [className] - 추가할 CSS 클래스명
 * @returns {JSX.Element} TextArea 컴포넌트
 *
 * @example
 * // 기본 사용 예시
  <TextArea
    name={name}
    value={value}
    message={message}
    isValid={isValid}
    placeholder="플레이스홀더"
    className="detail__textarea"
    onChange={onChangeTextArea}
  />
 **/

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  name?: string;
  placeholder?: string;
  isValid?: boolean | null;
  message?: string;
  className?: string;
}

const TextArea = ({
  value,
  name,
  placeholder = "입력해주세요",
  isValid = null,
  message,
  className,
  ...rest
}: TextAreaProps) => {
  const getErrorMessageClass = (isValid: boolean | null): string => {
    return isValid === false ? "input__message--error" : "";
  };

  const hasMessage = !!message;
  const isInvalid = isValid === false;
  const showMessage = hasMessage && isInvalid;

  return (
    <div>
      <textarea
        value={value}
        name={name}
        placeholder={placeholder}
        className={`input textarea ${className}`}
        {...rest}
      />
      {showMessage && (
        <div className={`${getErrorMessageClass(isValid)}`}>{message}</div>
      )}
    </div>
  );
};

export default TextArea;
