import { FocusEvent, MouseEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  checkValidEmail,
  checkValidNickname,
  checkValidPassword,
  checkValidPasswordConfirm,
} from "../../utils/authUtils";
import getLogo from "../../utils/getLogo";
import AuthSns from "../../components/AuthSns/AuthSns";
import AuthGuide from "../../components/AuthGuide/AuthGuide";
import "../../styles/auth.scss";
import styles from "./SignupPage.module.scss";
import AuthFormInput from "../../components/AuthFormInput/AuthFormInput";
import { getIsAllValid } from "../../utils/getIsAllValid";
import { ValidResultType } from "types/authType";

const INIT_VALID = {
  isValid: null,
  msg: "",
};

const SignupPage = () => {
  const nav = useNavigate();
  const [userNickname, setUserNickname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordConfirm, setUserPasswordConfirm] = useState("");
  const [validUserNickname, setValidUserNickname] =
    useState<ValidResultType>(INIT_VALID);
  const [validUserEmail, setValidUserEmail] =
    useState<ValidResultType>(INIT_VALID);
  const [validUserPassword, setValidUserPassword] =
    useState<ValidResultType>(INIT_VALID);
  const [validUserPasswordConfirm, setValidUserPasswordConfirm] =
    useState<ValidResultType>(INIT_VALID);
  const [isAllValid, setIsAllValid] = useState(false);

  // 비밀번호 확인 필드 함수 재정의
  const redefinePasswordConfirm = (value: string) => {
    return checkValidPasswordConfirm(value, userPassword);
  };

  const getUserValidation = (name: string, value: string) => {
    let validNickname = validUserNickname;
    let validEmail = validUserEmail;
    let validPassword = validUserPassword;
    let validPasswordConfirm = validUserPasswordConfirm;

    switch (name) {
      case "nickname": {
        validNickname = checkValidNickname(value);
        break;
      }
      case "email": {
        validEmail = checkValidEmail(value);
        break;
      }
      case "password": {
        validPassword = checkValidPassword(value);

        // 비밀번호 확인 필드에 값이 있는 상태에서 비밀번호 필드를 바꾸면 양쪽 모두 검사
        if (userPasswordConfirm.length) {
          validPasswordConfirm = redefinePasswordConfirm(userPasswordConfirm);
        }
        break;
      }
      case "passwordConfirm": {
        validPasswordConfirm = redefinePasswordConfirm(value);
        break;
      }
      // no default
    }

    return {
      validNickname,
      validEmail,
      validPassword,
      validPasswordConfirm,
    };
  };

  const handleFocusOut = (e: FocusEvent<HTMLFormElement>) => {
    const { name, value } = e.target;

    // 인풋 검증
    const { validNickname, validEmail, validPassword, validPasswordConfirm } =
      getUserValidation(name, value);

    setValidUserNickname(() => validNickname);
    setValidUserEmail(() => validEmail);
    setValidUserPassword(() => validPassword);
    setValidUserPasswordConfirm(() => validPasswordConfirm);
  };

  const handleClickSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    nav("/login");
  };

  useEffect(() => {
    // 버튼 활성화 여부
    setIsAllValid(
      getIsAllValid([
        validUserNickname,
        validUserEmail,
        validUserPassword,
        validUserPasswordConfirm,
      ])
    );
  }, [
    validUserNickname,
    validUserEmail,
    validUserPassword,
    validUserPasswordConfirm,
  ]);

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
          <AuthFormInput
            label="이메일"
            type="email"
            name="email"
            value={userEmail}
            onChange={setUserEmail}
            placeholder="이메일을 입력해주세요."
            validInfo={validUserEmail}
          />

          {/* 닉네임 */}
          <AuthFormInput
            label="닉네임"
            type="text"
            name="nickname"
            value={userNickname}
            onChange={setUserNickname}
            placeholder="닉네임을 입력해주세요."
            validInfo={validUserNickname}
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

          {/* 비밀번호 확인 */}
          <AuthFormInput
            label="비밀번호 확인"
            type="password"
            name="passwordConfirm"
            value={userPasswordConfirm}
            onChange={setUserPasswordConfirm}
            placeholder="비밀번호를 다시 한 번 입력해주세요."
            validInfo={validUserPasswordConfirm}
          />

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
