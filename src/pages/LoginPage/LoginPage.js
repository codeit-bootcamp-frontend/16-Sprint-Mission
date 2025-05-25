import { useState } from "react";
import { Link } from "react-router-dom";
import getLogo from "../../utils/getLogo";
import pwHide from "../../assets/images/icons/ic_pw_hide.svg";
import AuthSns from "../../components/AuthSns/AuthSns";
import AuthGuide from "../../components/AuthGuide/AuthGuide";
import styles from "./LoginPage.module.scss";
import "../../styles/auth.scss";
import {
  checkValidEmail,
  checkValidPassword,
  getAuthValidClassName,
} from "../../utils/authUtils";
import useAllValid from "../../hooks/useAllValid";

const INIT_VALUE = { email: "", password: "" };
const INIT_VALID = {
  email: {
    isValid: null,
    msg: "",
  },
  password: {
    isValid: null,
    msg: "",
  },
};

const VALIDATOR = {
  email: checkValidEmail,
  password: checkValidPassword,
};

const LoginPage = () => {
  const [userValues, setUserValues] = useState(INIT_VALUE);
  const [valueValids, setValueValids] = useState(INIT_VALID);
  const isAllValid = useAllValid(valueValids);

  const handleChangeUserValues = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  const handleFocusOut = (e) => {
    const { name, value } = e.target;

    // 검증할 요소인지 확인
    if (!VALIDATOR[name]) return;

    setValueValids({
      ...valueValids,
      [name]: VALIDATOR[name](value),
    });
  };

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
        <form className="auth-form" onBlur={handleFocusOut}>
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
                className={getAuthValidClassName(valueValids.email.isValid)}
                value={userValues.email}
                onChange={handleChangeUserValues}
              />
            </div>
            {!valueValids.email.isValid && (
              <p className="auth-form__error-msg">{valueValids.email.msg}</p>
            )}
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
                className={getAuthValidClassName(valueValids.password.isValid)}
                value={userValues.password}
                onChange={handleChangeUserValues}
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
            {!valueValids.password.isValid && (
              <p className="auth-form__error-msg">{valueValids.password.msg}</p>
            )}
          </div>
          <button
            disabled={!isAllValid}
            className="btn lg auth-form__submit-btn"
          >
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
