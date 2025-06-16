import { useState, useEffect } from 'react';
import logo from '@assets/images/logo-title.png';
import SocialLogin from '@components/SocialLogin';
import { useValidate, checkAllValid } from '@hooks/useValidate';
import { Link, useNavigate } from 'react-router-dom';
import MemoizedFormInput from './FormInput';
import styles from './styles/SignUp.module.css';

function SignUp() {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [passwordCheckToggle, setPasswordCheckToggle] = useState(false);
  const toLoginNavigate = useNavigate();
  const { getFieldState, validate } = useValidate();
  const emailValidationState = getFieldState('user-email');
  const nameValidationState = getFieldState('user-name');
  const passwordValidationState = getFieldState('user-password');
  const passwordChekcValidationState = getFieldState('user-password-check');
  const isAllValid = checkAllValid(
    emailValidationState,
    nameValidationState,
    passwordValidationState,
    passwordChekcValidationState,
  );

  //비밀번호 값 변경 시 비밀번호 확인도 유효성 검사 다시
  const pwValue = passwordValidationState.value;
  useEffect(() => {
    if (passwordChekcValidationState.value === '') return;
    validate('user-password-check', passwordChekcValidationState.value);
  }, [passwordValidationState.value]);

  // 제출 버튼 클릭 시 검사 한번씩 다 해
  function handleSubmit(e) {
    validate('user-email', emailValidationState.value);
    validate('user-name', nameValidationState.value);
    validate('user-password', passwordValidationState.value);
    validate('user-password-check', passwordChekcValidationState.value);

    if (isAllValid) {
      toLoginNavigate('/login');
    } else {
      e.preventDefault();
    }
  }

  // 토글 보이기 추가하기
  function handlePwToggle() {
    setPasswordToggle(!passwordToggle);
  }

  function handlePwCheckToggle() {
    setPasswordCheckToggle(!passwordCheckToggle);
  }

  return (
    <main className={styles.main}>
      <section className={styles['main__sign-up']}>
        <div className={styles['sign-up__logo']}>
          <Link aria-label="판다마켓 홈으로 이동" to="/">
            <img src={logo} alt="판다마켓 로고" />
          </Link>
        </div>
        <form onSubmit={handleSubmit} className={styles['sign-up__form']}>
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
            <label htmlFor="user-name">닉네임</label>
            <MemoizedFormInput
              validate={validate}
              {...nameValidationState}
              id="user-name"
              type="text"
              name="user-name"
              placeholder="닉네임을 입력해주세요"
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
                id="toggle-visibility-pw"
                onChange={handlePwToggle}
                className={styles['toggle-visibility-pw']}
                type="checkbox"
              />
              <label
                aria-label="비밀번호 표시 여부"
                aria-checked={passwordToggle}
                htmlFor="toggle-visibility-pw"
              ></label>
            </div>
            <div className={styles['container__position-relative']}>
              <label htmlFor="user-password">비밀번호 확인</label>
              <MemoizedFormInput
                validate={validate}
                {...passwordChekcValidationState}
                passwordInputValue={pwValue}
                id="user-password-check"
                type={passwordCheckToggle ? 'text' : 'password'}
                name="user-password-check"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <input
                id="toggle-visibility-pwcheck"
                onChange={handlePwCheckToggle}
                className={styles['toggle-visibility-pwcheck']}
                type="checkbox"
              />
              <label
                aria-label="비밀번호 확인 표시 여부"
                aria-checked={passwordCheckToggle}
                htmlFor="toggle-visibility-pwcheck"
              ></label>
            </div>
            <button
              className={
                !isAllValid ? styles['button-fail'] : styles['button-pass']
              }
              type="submit"
            >
              회원가입
            </button>
          </fieldset>
          <SocialLogin />
          <div className={styles['sign-up__login']}>
            이미 회원이신가요?&nbsp;
            <Link aria-label="로그인 페이지로 이동" to="/login">
              로그인
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default SignUp;
