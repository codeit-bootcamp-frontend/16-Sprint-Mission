import "./css/Textfield.css";

/*
  [Textfield 필수 속성]
  - value: 텍스트필드 값
  - placeholder: 플레이스홀더 텍스트
  - onChange: 컴포넌트 밖에서 텍스트필드 값을 변경하는 메소드 전달 필요
  
  [Textfield 상태 속성]
  - isValid: 에러 상태 표시 => null(초기상태). true 값을 넘기면 메시지 출력
  - message: 메세지가 있는 경우 출력
*/

const Textfield = ({
  value,
  type,
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
    false: "textfield__message--error",
  };

  const showMessage = message && isValid === false;

  return (
    <div className="textfield__container">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
        className={`textfield__input ${className}`}
        {...rest}
      />
      {showMessage && (
        <div
          className={`${"textfield__message"} ${statusMessageClass[isValid]}`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default Textfield;
