import usePasswordToggle from "../../hooks/usePasswordToggle";
import styles from "./PasswordInput.module.scss";

const PasswordInput = ({
  name,
  value,
  onChange,
  placeholder,
  className,
  isToggle = true,
}) => {
  const { toggle, handleClickToggle, toggleImg } = usePasswordToggle();

  const handleChangeValue = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles["password-box"]}>
      <input
        type={toggle ? "text" : "password"}
        name={name}
        id={name}
        placeholder={placeholder}
        className={`${styles["password-input"]} ${className}`}
        value={value}
        onChange={handleChangeValue}
      />
      {isToggle && (
        <button
          type="button"
          className={styles["password__toggle-btn"]}
          aria-label="비밀번호 표시"
          aria-pressed={toggle}
          onClick={handleClickToggle}
        >
          <img
            src={toggleImg}
            width="24"
            height="24"
            alt="비밀번호 보기 아이콘"
          />
        </button>
      )}
    </div>
  );
};

export default PasswordInput;
