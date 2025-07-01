import { useState } from 'react';
import FormInput from '../FormInput';
import styles from './styles/Login.module.css';

function PasswordField() {
  const [passwordToggle, setPasswordToggle] = useState(false);

  function handlePwToggle() {
    setPasswordToggle(!passwordToggle);
  }

  return (
    <div className={styles.containerRelative}>
      <label htmlFor="user-password">비밀번호</label>
      <FormInput
        id="user-password"
        type={passwordToggle ? 'text' : 'password'}
        name="user-password"
        placeholder="비밀번호를 입력해주세요"
      />
      <input
        className={styles.pwToggle}
        id="toggle-visibility-pw"
        type="checkbox"
        onChange={handlePwToggle}
      />
      <label
        aria-label="비밀번호 표시 여부"
        aria-checked={passwordToggle}
        htmlFor="toggle-visibility-pw"
      ></label>
    </div>
  );
}

export default PasswordField;
