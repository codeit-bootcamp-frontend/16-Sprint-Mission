import { Link, useNavigate } from "react-router-dom";
import getLogo from "../../utils/getLogo";
import pwHide from "../../assets/images/icons/ic_pw_hide.svg";
import AuthSns from "../../components/AuthSns/AuthSns";
import AuthGuide from "../../components/AuthGuide/AuthGuide";
import styles from "./SignupPage.module.scss";
import "../../styles/auth.scss";
import { useCallback, useMemo, useState } from "react";
import useAllValid from "../../hooks/useAllValid";
import {
  checkValidEmail,
  checkValidNickname,
  checkValidPassword,
  checkValidPasswordConfirm,
  getAuthValidClassName,
} from "../../utils/authUtils";

const INIT_VALUE = {
  nickname: "",
  email: "",
  password: "",
  passwordConfirm: "",
};
const INIT_VALID = {
  nickname: {
    isValid: null,
    msg: "",
  },
  email: {
    isValid: null,
    msg: "",
  },
  password: {
    isValid: null,
    msg: "",
  },
  passwordConfirm: {
    isValid: null,
    msg: "",
  },
};

const SignupPage = () => {
  const nav = useNavigate();
  const [userValues, setUserValues] = useState(INIT_VALUE);
  const [valueValids, setValueValids] = useState(INIT_VALID);
  const isAllValid = useAllValid(valueValids);

  // 비밀번호 확인 필드 함수 재정의
  // 렌더링마다 함수 재생성 방지를 위해 useCallback 사용
  const redefinePasswordConfirm = useCallback(
    (value) => {
      return checkValidPasswordConfirm(value, userValues.password);
    },
    [userValues]
  );

  // 비밀번호 필드 함수 재정의
  // 렌더링마다 함수 재생성 방지를 위해 useCallback 사용
  const redefinePassword = useCallback(
    (value) => {
      const checkPassword = checkValidPassword(value);
      // 비밀번호 확인 필드에 값이 있는 상태에서 비밀번호 필드를 바꾸면 양쪽 모두 검사
      if (userValues.passwordConfirm.length) {
        setValueValids(() => ({
          ...valueValids,
          password: checkPassword, // 여기에도 써주어야 정상적으로 변경됨...
          passwordConfirm: redefinePasswordConfirm(userValues.passwordConfirm),
        }));
      }

      return checkPassword;
    },
    [redefinePasswordConfirm, valueValids, userValues]
  );

  // 함수 재정의와 useValues 참조를 위해 컴포넌트 내부에 정의
  // 렌더링마다 객체 재생성 방지를 위해 useMemo 사용
  const VALIDATOR = useMemo(
    () => ({
      nickname: checkValidNickname,
      email: checkValidEmail,
      password: redefinePassword,
      passwordConfirm: redefinePasswordConfirm,
    }),
    [redefinePassword, redefinePasswordConfirm]
  );

  const handleChangeUserValues = (e) => {
    setUserValues({ ...userValues, [e.target.name]: e.target.value });
  };

  const handleFocusOut = (e) => {
    const { name, value } = e.target;

    // 검증할 요소인지 확인
    if (!VALIDATOR[name]) return;

    setValueValids(() => ({
      ...valueValids,
      [name]: VALIDATOR[name](value),
    }));
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    nav("/login");
  };

  return (
    <div id="wrap" className={styles.signupPage}>
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
          {/* 닉네임 */}
          <div className="auth-form__item">
            <label htmlFor="nickname" className="auth-form__label">
              닉네임
            </label>
            <div className="auth-form__input-box">
              <input
                type="nickname"
                name="nickname"
                id="nickname"
                placeholder="닉네임을 입력해주세요."
                className={getAuthValidClassName(valueValids.nickname.isValid)}
                value={userValues.nickname}
                onChange={handleChangeUserValues}
              />
            </div>
            {!valueValids.nickname.isValid && (
              <p className="auth-form__error-msg">{valueValids.nickname.msg}</p>
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
          {/* 비밀번호 확인 */}
          <div className="auth-form__item">
            <label htmlFor="passwordConfirm" className="auth-form__label">
              비밀번호 확인
            </label>
            <div className="auth-form__input-box auth-form__input-box--pw">
              <input
                type="password"
                name="passwordConfirm"
                id="passwordConfirm"
                placeholder="비밀번호를 다시 한 번 입력해주세요"
                className={getAuthValidClassName(
                  valueValids.passwordConfirm.isValid
                )}
                value={userValues.passwordConfirm}
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
            {!valueValids.passwordConfirm.isValid && (
              <p className="auth-form__error-msg">
                {valueValids.passwordConfirm.msg}
              </p>
            )}
          </div>
          <button
            disabled={!isAllValid}
            className="btn lg auth-form__submit-btn"
            onClick={handleClickSubmit}
          >
            회원가입
          </button>
        </form>
        <AuthSns />
        <AuthGuide
          guideTxt="이미 회원이신가요?"
          linkTxt="로그인"
          linkUrl="/login"
        />
      </div>
    </div>
  );
};

export default SignupPage;
