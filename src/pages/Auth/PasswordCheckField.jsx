import { useState } from 'react';
import { useWatch } from 'react-hook-form';
import FormInput from './FormInput';
import styles from './styles/Auth.module.css';

function PasswordCheckField() {
  const [passwordCheckToggle, setPasswordCheckToggle] = useState(false);
  const passwordValue = useWatch({ name: 'user-password' });

  function handlePwCheckToggle() {
    setPasswordCheckToggle(!passwordCheckToggle);
  }

  function validatePwCheck(value) {
    if (value === passwordValue) return true;
    else return '비밀번호가 일치하지 않습니다.';
  }

  return (
    <div className={styles.containerRelative}>
      <label htmlFor="user-password">비밀번호 확인</label>
      <FormInput
        validatePwCheck={validatePwCheck}
        id="user-password-check"
        type={passwordCheckToggle ? 'text' : 'password'}
        name="user-password-check"
        placeholder="비밀번호를 다시 입력해주세요"
      />
      <input
        id="toggle-visibility-pwcheck"
        onChange={handlePwCheckToggle}
        className={styles.pwCheckToggle}
        type="checkbox"
      />
      <label
        aria-label="비밀번호 확인 표시 여부"
        aria-checked={passwordCheckToggle}
        htmlFor="toggle-visibility-pwcheck"
      ></label>
    </div>
  );
}

export default PasswordCheckField;
