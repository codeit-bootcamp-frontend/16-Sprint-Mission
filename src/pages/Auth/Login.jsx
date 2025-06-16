import { useState } from 'react';
import logo from '@assets/images/logo-title.png';
import SocialLogin from '@components/SocialLogin';
import { useValidate, checkAllValid } from '@hooks/useValidate';
import { Link, useNavigate } from 'react-router-dom';
import MemoizedFormInput from './FormInput';
import styles from './styles/Login.module.css';

function Login() {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const toItemsNavigation = useNavigate();
  const { getFieldState, validate } = useValidate();
  const emailValidationState = getFieldState('user-email'); //email관련 값만 받아오기 생성x조회o
  const passwordValidationState = getFieldState('user-password');
  const isAllValid = checkAllValid(
    emailValidationState,
    passwordValidationState,
  );

  function handleSubmit(e) {
    validate('user-email', emailValidationState.value);
    validate('user-password', passwordValidationState.value);

    if (isAllValid) {
      sessionStorage.setItem('loggedIn', emailValidationState.value);
      toItemsNavigation('/items');
    } else {
      e.preventDefault();
    }
  }

  // 토글 보이기 추가하기
  function handlePwToggle() {
    setPasswordToggle(!passwordToggle);
  }

  return (
    <main className={styles.main}>
      <section className={styles.main__login}>
        <div className={styles.login__logo}>
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <img src={logo} alt="판다마켓 로고" />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className={styles.login__form}>
          <fieldset>
            <label htmlFor="user-email">이메일</label>
            <MemoizedFormInput
              validate={validate}
              {...emailValidationState}
              type="text"
              id="user-email"
              name="user-email"
              placeholder="이메일을 입력해주세요"
            />
            <div className={styles['container__position-relative']}>
              <label htmlFor="user-password">비밀번호</label>
              <MemoizedFormInput
                validate={validate}
                {...passwordValidationState}
                id="user-password"
                type={passwordToggle ? 'text' : 'password'}
                name="user-password"
                placeholder="비밀번호를 입력해주세요"
              />
              <input
                className={styles['toggle-visibility-pw']}
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
            <button
              className={
                !isAllValid ? styles['button-fail'] : styles['button-pass']
              }
              type="submit"
            >
              로그인
            </button>
          </fieldset>
          <SocialLogin />
          <div className={styles['login__sign-up']}>
            판다마켓이 처음이신가요?&nbsp;
            <Link to="/sign_up" aria-label="회원가입 페이지로 이동">
              회원가입
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
