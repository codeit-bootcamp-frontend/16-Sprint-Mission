import { forwardRef, InputHTMLAttributes } from "react";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import styles from "./PasswordInput.module.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  isToggle?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, className, isToggle = true, ...props }, ref) => {
    const { toggle, handleClickToggle, toggleImg } = usePasswordToggle();

    const { type, ...otherProps } = props;

    return (
      <div className={styles["password-box"]}>
        <input
          ref={ref}
          type={toggle ? "text" : "password"}
          placeholder={placeholder}
          className={`${styles["password-input"]} ${className}`}
          {...otherProps}
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
  }
);

export default PasswordInput;
