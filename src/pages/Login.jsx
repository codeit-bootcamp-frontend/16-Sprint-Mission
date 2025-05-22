import styles from "../styles/Login.module.css";
import logo from "../assets/images/logo-title.png";
import kakaoIcon from "../assets/icon/login_kakao.png";
import googleIcon from "../assets/icon/login_google.png";
import FormInput from "../components/FormInput";
import { useState } from "react";
import { Link } from "react-router-dom";
import { hasLoginInvalid} from "../hooks/useValidate";

function Login() {
  const [checked, setChecked] = useState(false);
  const [isAllValid, setIsAllValid] = useState(false);

  function handleChange(e) {
    if (hasLoginInvalid()) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
  }

  function handleSubmit(e) {
    if (hasLoginInvalid()) {
      //세션에 넘겨줘
      sessionStorage.setItem('isLogined','true');
    } else {
      e.preventDefault();
    }
  }

  // 토글 보이기 추가하기
  function handlePwCheck(e){
      setChecked(!checked);
    //다 렌더링 되는 거 막아....
  }

  return (
    <main className={styles.main}>
      <section className={styles.main__login}>
        <div className={styles.login__logo}>
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <img src={logo} alt="판다마켓 로고" />
          </Link>
        </div>
        <form
          onBlur={handleChange}
          onSubmit={handleSubmit}
          className={styles.login__form}
          method="get"
          action="../items/"
        >
          <fieldset>
            <label htmlFor="user-email">이메일</label>
            <FormInput
              type="text"
              id="user-email"
              name="user-email"
              placeholder="이메일을 입력해주세요"
            ></FormInput>
            <div className={styles[`container__position-relative`]}>
              <label htmlFor="user-password">비밀번호</label>
              <FormInput
                id="user-password"
               type={checked?"text":"password"}
                name="user-password"
                placeholder="비밀번호를 입력해주세요"
              ></FormInput>
              <input
                className={styles[`toggle-visibility-pw`]}
                id="toggle-visibility-pw"
                type="checkbox"
                onChange={handlePwCheck}
              />
              <label
                aria-label="비밀번호 표시 여부"
                aria-checked={checked}
                htmlFor="toggle-visibility-pw"
              ></label>
            </div>
            <button
              className={
                !isAllValid ? styles[`button-fail`] : styles[`button-pass`]
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
