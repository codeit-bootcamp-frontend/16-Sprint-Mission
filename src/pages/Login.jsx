import styles from "../styles/login.module.css";
import logo from "../assets/images/logo-title.png";
import kakaoIcon from "../assets/icon/login_kakao.png";
import googleIcon from "../assets/icon/login_google.png";
import LoginFormInput from "../components/LoginFormInput";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [hasErr, setHasErr] = useState({
    "user-email": true,
    "user-password": true,
  });

  function isFormValid() {
    const isPassed = Object.values(hasErr).every((el) => el === false);
    return isPassed;
  }

  function handleSubmit(e) {
    if (isFormValid()) {
    } else {
      e.preventDefault();
    }
  }

  // 토글 보이기 추가하기

  return (
    <main className={styles.main}>
      <section className={styles.main__login}>
        <div className={styles.login__logo}>
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <img src={logo} alt="판다마켓 로고" />
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.login__form}
          method="get"
          action="../items/"
        >
          <fieldset>
            <label htmlFor="user-email">이메일</label>
            <LoginFormInput
              setHasErr={setHasErr}
              type="text"
              id="user-email"
              name="user-email"
              placeholder="이메일을 입력해주세요"
            ></LoginFormInput>
            <div className={styles[`container__position-relative`]}>
              <label htmlFor="user-password">비밀번호</label>
              <LoginFormInput
                setHasErr={setHasErr}
                id="user-password"
                type="password"
                name="user-password"
                placeholder="비밀번호를 입력해주세요"
              ></LoginFormInput>
              <input
                className={styles[`toggle-visibility-pw`]}
                id="toggle-visibility-pw"
                type="checkbox"
              />
              <label
                aria-label="비밀번호 표시 여부"
                aria-checked="false"
                htmlFor="toggle-visibility-pw"
              ></label>
            </div>
            <button
              className={
                isFormValid() ? styles[`button-pass`] : styles[`button-fail`]
              }
              type="submit"
            >
              로그인
            </button>
          </fieldset>
          <div className={styles.login__alert}>
            간편 로그인하기
            <div className="icon__container">
              <a
                aria-label="구글로 로그인"
                rel="noopener"
                target="_blank"
                href="https://www.google.com/"
              >
                <img src={googleIcon} alt="구글 아이콘" />
              </a>
              <a
                aria-label="카카오로 로그인"
                rel="noopener"
                target="_blank"
                href="https://www.kakaocorp.com/page/"
              >
                <img src={kakaoIcon} alt="카카오 아이콘" />
              </a>
            </div>
          </div>
          <div className={styles[`login__sign-up`]}>
            판다마켓이 처음이신가요?&nbsp;
            <Link to="sign_up" aria-label="회원가입 페이지로 이동">
              회원가입
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;
