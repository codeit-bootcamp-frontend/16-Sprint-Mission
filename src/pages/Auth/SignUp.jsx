import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-title.png";
import kakaoIcon from "../../assets/icon/login_kakao.png";
import googleIcon from "../../assets/icon/login_google.png";
import FormInput from "./FormInput";
import { useValidate } from "../../hooks/useValidate";
import styles from "../../styles/SignUp.module.css";
import { useState, useEffect } from "react";

function SignUp() {
  const [passwordToggle, setPasswordToggle] = useState(false);
  const [passwordCheckToggle, setPasswordCheckToggle] = useState(false);
   const navigate = useNavigate();
  const emailInput = useValidate();
  const nameInput = useValidate();
  const passwordInput = useValidate();
  const passwordCheckInput = useValidate();

  const isAllValid =
    emailInput.isValidNow &&
    passwordInput.isValidNow &&
    nameInput.isValidNow &&
    passwordCheckInput.isValidNow;

  //비밀번호 값 변경 시 비밀번호 확인도 유효성 검사 다시
  const pwValue = passwordInput.value;
  useEffect(() => {
    if (passwordCheckInput.value !== "") {
      passwordCheckInput.isValidate("user-password-check", passwordInput.value);
    }
  }, [pwValue]);

  // 제출 버튼 클릭 시 검사 한번씩 다 해
  function handleSubmit(e) {
    emailInput.isValidate("user-email");
    passwordInput.isValidate("user-password");
    passwordCheckInput.isValidate("user-password-check", passwordInput.value);
    nameInput.isValidate("user-name");

    if (isAllValid) {
      sessionStorage.setItem("isLogined", "true");
      navigate('/login');
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
      <section className={styles[`main__sign-up`]}>
        <div className={styles[`sign-up__logo`]}>
          <Link aria-label="판다마켓 홈으로 이동" to="/">
            <img src={logo} alt="판다마켓 로고" />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles[`sign-up__form`]}
        >
          <fieldset>
            <label htmlFor="user-email">이메일</label>
            <FormInput
              {...emailInput}
              type="text"
              id="user-email"
              name="user-email"
              placeholder="이메일을 입력해주세요"
            />
            <label htmlFor="user-name">닉네임</label>
            <FormInput
              {...nameInput}
              id="user-name"
              type="text"
              name="user-name"
              placeholder="닉네임을 입력해주세요"
            />
            <div className={styles[`container__position-relative`]}>
              <label htmlFor="user-password">비밀번호</label>
              <FormInput
                {...passwordInput}
                id="user-password"
                type={passwordToggle ? "text" : "password"}
                name="user-password"
                placeholder="비밀번호를 입력해주세요"
              />
              <input
                id="toggle-visibility-pw"
                onChange={handlePwToggle}
                className={styles[`toggle-visibility-pw`]}
                type="checkbox"
              />
              <label
                aria-label="비밀번호 표시 여부"
                aria-checked={passwordToggle}
                htmlFor="toggle-visibility-pw"
              ></label>
            </div>
            <div className={styles[`container__position-relative`]}>
              <label htmlFor="user-password">비밀번호 확인</label>
              <FormInput
                {...passwordCheckInput}
                passwordInputValue={passwordInput.value}
                id="user-password-check"
                type={passwordCheckToggle ? "text" : "password"}
                name="user-password-check"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <input
                id="toggle-visibility-pwcheck"
                onChange={handlePwCheckToggle}
                className={styles[`toggle-visibility-pwcheck`]}
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
                !isAllValid ? styles[`button-fail`] : styles[`button-pass`]
              }
              type="submit"
            >
              회원가입
            </button>
          </fieldset>
          <div className={styles[`sign-up__alert`]}>
            간편 로그인하기
            <div className={styles.icon__container}>
              <a
                aria-label="구글로 로그인"
                rel="noopener"
                target="_blank"
                href="https://www.google.com"
              >
                <img src={googleIcon} alt="구글아이콘" />
              </a>
              <a
                aria-label="카카오로 로그인"
                rel="noopener"
                target="_blank"
                href="https://www.kakaocorp.com/page/"
              >
                <img src={kakaoIcon} alt="카카오톡아이콘" />
              </a>
            </div>
          </div>
          <div className={styles[`sign-up__login`]}>
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
