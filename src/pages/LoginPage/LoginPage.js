import { useState } from "react";
import { Link } from "react-router-dom";
import getLogo from "../../utils/getLogo";
import pwHide from "../../assets/images/icons/ic_pw_hide.svg";
import AuthSns from "../../components/AuthSns/AuthSns";
import AuthGuide from "../../components/AuthGuide/AuthGuide";
import styles from "./LoginPage.module.scss";
import "../../styles/auth.scss";

const EMPTY_MSG = {
  email: "이메일을 입력해주세요.",
  nickname: "닉네임을 입력해주세요.",
  password: "비밀번호를 입력해주세요.",
  passwordConfirm: "비밀번호를 입력해주세요.",
};

const VALIDATOR = {
  nickname: {
    isValid: function (value) {
      return !!value.length;
    },
    failedMsg: null,
  },
  email: {
    isValid: function (value) {
      const PATTERN =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      return PATTERN.test(value);
    },
    failedMsg: "잘못된 이메일 형식입니다.",
  },
  password: {
    isValid: function (value) {
      const PATTERN = /^[0-9a-zA-Z]{8}/;
      return PATTERN.test(value);
    },
    failedMsg: "비밀번호를 8자 이상 입력해주세요.",
  },
  passwordConfirm: {
    isValid: function (value) {
      const password = document.querySelector("#password");
      return password.value === value;
    },
    failedMsg: "비밀번호가 일치하지 않습니다.",
  },
};

const LoginPage = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleChangeUserInfo = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  // 1. focusout 이벤트
  //    - 아이디에 값이 비었는지 검증
  //    - 패스워드에 값이 비었는지 검증
  //    - 아이디값이 올바른지 검증
  //    - 패스워드가 8자 이상인지 검증
  //  - input에 빈값이 있는지 유효성 검사를 전부 통과했는지 확인 후 submit 버튼 활성화
  // 3. submit 완료시

  return (
    <div id="wrap" className={styles.loginPage}>
      <div className="auth-container">
        <h1 className="logo">
          <Link to="/" aria-label="판다마켓 홈으로 이동">
            <img
              width="396"
              height="132"
              src={getLogo("lg")}
              alt="판다마켓 로고 이미지"
            />
          </Link>
        </h1>
        <form className="auth-form">
          {/* 이메일 */}
          <div className="auth-form__item">
            <label htmlFor="email" className="auth-form__label">
              이메일
            </label>
            <div className="auth-form__input-box">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder="이메일을 입력해주세요."
                value={userInfo.email}
                onChange={handleChangeUserInfo}
              />
            </div>
            {/* <p className="auth-form__error-msg">잘못된 이메일입니다.</p> */}
          </div>
          {/* 비밀번호 */}
          <div className="auth-form__item">
            <label htmlFor="password" className="auth-form__label">
              비밀번호
            </label>
            <div className="auth-form__input-box auth-form__input-box--pw">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="비밀번호를 입력해주세요."
                value={userInfo.password}
                onChange={handleChangeUserInfo}
              />
              <button
                type="button"
                className="auth-form__toggle-btn"
                aria-label="비밀번호 표시"
                aria-pressed="false"
              >
                <img
                  src={pwHide}
                  width="24"
                  height="24"
                  alt="비밀번호 보기 아이콘"
                />
              </button>
            </div>
          </div>
          <button disabled className="btn lg auth-form__submit-btn">
            로그인
          </button>
        </form>
        <AuthSns />
        <AuthGuide
          guideTxt="판다마켓이 처음이신가요?"
          linkTxt="회원가입"
          linkUrl="/signup"
        />
      </div>
    </div>
  );
};

export default LoginPage;
