import "./css/InputCommon.css";
import "./css/TextArea.css";

/*
  [Textfield 필수 속성]
  - value: 텍스트필드 값
  - placeholder: 플레이스홀더 텍스트
  - onChange: 컴포넌트 밖에서 텍스트필드 값을 변경하는 메소드 전달 필요
  
  [TextArea 상태 속성]
  - isValid: 에러 상태 표시 => null(초기상태). true 값을 넘기면 메시지 출력
  - message: 메세지가 있는 경우 출력
*/

const TextArea = ({
  value,
  name,
  placeholder = "입력해주세요",
  onChange = () => {},
  isValid = null,
  message,
  className,
  ...rest
}) => {
  const statusMessageClass = {
    null: "",
    false: "input__message--error",
  };

  const hasMessage = !!message;
  const isInvalid = isValid === false;
  const showMessage = hasMessage && isInvalid;

  return (
    <div>
      <textarea
        name={name}
        placeholder={placeholder}
        className="input textarea"
        onChange={(e) => onChange(e.target.name, e.target.value)}
        {...rest}
      />
      {showMessage && (
        <div className={`${statusMessageClass[isValid]}`}>{message}</div>
      )}
    </div>
  );
};

export default TextArea;
