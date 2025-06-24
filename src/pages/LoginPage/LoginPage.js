import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkValidEmail, checkValidPassword } from "../../utils/authUtils";
import getLogo from "../../utils/getLogo";
import AuthSns from "../../components/AuthSns/AuthSns";
import AuthGuide from "../../components/AuthGuide/AuthGuide";
import "../../styles/auth.scss";
import styles from "./LoginPage.module.scss";
import getIsAllValid from "../../utils/getIsAllValid";
import AuthFormInput from "../../components/AuthFormInput/AuthFormInput";

const INIT_VALID = {
  isValid: null,
  msg: "",
};

const LoginPage = () => {
  const nav = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [validUserEmail, setValidUserEmail] = useState(INIT_VALID);
  const [validUserPassword, setValidUserPassword] = useState(INIT_VALID);
  const [isAllValid, setIsAllValid] = useState(false);

  const getUserValidation = (name, value) => {
    let validEmail = validUserEmail;
    let validPassword = validUserPassword;

    switch (name) {
      case "email": {
        validEmail = checkValidEmail(value);
        break;
      }
      case "password": {
        validPassword = checkValidPassword(value);
        break;
      }
      // no default
    }

    return {
      validEmail,
      validPassword,
    };
  };

  const handleFocusOut = (e) => {
    const { name, value } = e.target;

    // 인풋 검증
    const { validEmail, validPassword } = getUserValidation(name, value);
    setValidUserEmail(() => validEmail);
    setValidUserPassword(() => validPassword);

    // 버튼 활성화 여부
    setIsAllValid(() => getIsAllValid([validEmail, validPassword]));
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    nav("/");
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
          <AuthFormInput
            label="이메일"
            type="email"
            name="email"
            value={userEmail}
            onChange={setUserEmail}
            placeholder="이메일을 입력해주세요."
            validInfo={validUserEmail}
          />

          {/* 비밀번호 */}
          <AuthFormInput
            label="비밀번호"
            type="password"
            name="password"
            value={userPassword}
            onChange={setUserPassword}
            placeholder="비밀번호를 입력해주세요."
            validInfo={validUserPassword}
          />

          <button
            disabled={!isAllValid}
            className="btn lg auth-form__submit-btn"
            onClick={handleClickSubmit}
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
