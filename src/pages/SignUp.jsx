import { Link } from "react-router-dom";
import logo from "../assets/images/logo-title.png";
import kakaoIcon from "../assets/icon/login_kakao.png";
import googleIcon from "../assets/icon/login_google.png";
import FormInput from "../components/FormInput";
import { hasSignUpInvalid } from "../hooks/useValidate";
import styles from "../styles/SignUp.module.css";
import { useState } from "react";

function SignUp() {
  const [checkedChecked, setCheckedChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isAllValid, setIsAllValid] = useState(false);

  function handleChange(e) {
    if (hasSignUpInvalid()) {
      setIsAllValid(true);
    } else {
      setIsAllValid(false);
    }
  }

  function handleSubmit(e) {
    if (!hasSignUpInvalid()) {
      e.preventDefault();
    } 
  }

  // 토글 보이기 추가하기
  function handlePwCheck(e) {
    setChecked(!checked);
    //다 렌더링 되는 거 막아....
  }
  function handlePwCheckCheck(e) {
    setCheckedChecked(!checkedChecked);
    //다 렌더링 되는 거 막아....
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
          onBlur={handleChange}
          className={styles[`sign-up__form`]}
          method="get"
          action="../login/"
        >
          <fieldset>
            <label htmlFor="user-email">이메일</label>
            <FormInput
              type="text"
              id="user-email"
              name="user-email"
              placeholder="이메일을 입력해주세요"
            />
            <label htmlFor="user-name">닉네임</label>
            <FormInput
              id="user-name"
              type="text"
              name="user-name"
              placeholder="닉네임을 입력해주세요"
            />
            <div className={styles[`container__position-relative`]}>
              <label htmlFor="user-password">비밀번호</label>
              <FormInput
                id="user-password"
                type={checked ? "text" : "password"}
                name="user-password"
                placeholder="비밀번호를 입력해주세요"
              />
              <input
                id="toggle-visibility-pw"
                onChange={handlePwCheck}
                className={styles[`toggle-visibility-pw`]}
                type="checkbox"
              />
              <label
                aria-label="비밀번호 표시 여부"
                aria-checked="false"
                htmlFor="toggle-visibility-pw"
              ></label>
            </div>
            <div className={styles[`container__position-relative`]}>
              <label htmlFor="user-password">비밀번호 확인</label>
              <FormInput
                id="user-password-check"
                type={checkedChecked ? "text" : "password"}
                name="user-password-check"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
              />
              <input
                id="toggle-visibility-pwcheck"
                onChange={handlePwCheckCheck}
                className={styles[`toggle-visibility-pwcheck`]}
                type="checkbox"
              />
              <label
                aria-label="비밀번호 확인 표시 여부"
                aria-checked="false"
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
