import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button.jsx";
import Input from "../components/input.jsx";
import Visibility from "../public/login/btn_visibility_on_24px.png";
import GoogleLogo from "../public/login/Component 2.png";
import KakaoLogo from "../public/login/Component 3.png";
import HeaderLogo from "../public/login/logo.png";
import "./register.css";
import inputValidator from "../functions/validator.js";

function Register() {
  const [emailValidate, setEmailVaildate] = useState({
    state: false,
    message: "",
  });
  const [nicknameValidate, setNicknameVaildate] = useState({
    state: false,
    message: "",
  });
  const [pwValidate, setPwVaildate] = useState({
    state: false,
    message: "",
  });
  const [pwMatch, setPwMatch] = useState(false);
  const pwRef = useRef({ pw: "", pwConfirm: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    pwRef.current = { ...pwRef.current, [name]: value };
    if (pwRef.current.pw !== pwRef.current.pwConfirm) setPwMatch(false);
    else setPwMatch(true);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validateResult = inputValidator(value, name);

    switch (name) {
      case "email":
        setEmailVaildate((prev) => ({
          ...prev,
          state: validateResult.state,
          message: validateResult.message,
        }));
        break;
      case "nickname":
        setNicknameVaildate((prev) => ({
          ...prev,
          state: validateResult.state,
          message: validateResult.message,
        }));
        break;
      case "pw":
        setPwVaildate((prev) => ({
          ...prev,
          state: validateResult.state,
          message: validateResult.message,
        }));
        break;
      default:
        return;
    }
  };

  return (
    <div className="wrapper">
      <div className="container">
        <header>
          <img src={HeaderLogo} alt="로그인 페이지 판다마켓 로고" />
        </header>
        <main className="main">
          <label className="label">
            이메일
            <Input name="email" onBlur={handleBlur} />
          </label>
          {!emailValidate.state && (
            <div className="error-message-container">
              <span>{emailValidate.message}</span>
            </div>
          )}
          <label className="label">
            닉네임
            <Input name="nickname" onBlur={handleBlur} />
          </label>
          {!nicknameValidate.state && (
            <div className="error-message-container">
              <span>{nicknameValidate.message}</span>
            </div>
          )}
          <label className="label">
            비밀번호
            <Input
              renderSlot={<img src={Visibility} alt="비밀번호 보이기 이미지" />}
              name="pw"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
            />
          </label>
          {!pwValidate.state && (
            <div className="error-message-container">
              <span>{pwValidate.message}</span>
            </div>
          )}
          <label className="label">
            비밀번호 확인
            <Input
              renderSlot={<img src={Visibility} alt="비밀번호 보이기 이미지" />}
              name="pwConfirm"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
            />
          </label>
          {!pwMatch && (
            <div className="error-message-container">
              <span>비밀번호가 일치하지 않습니다.</span>
            </div>
          )}
          <div style={{ width: "100%" }}>
            <Button
              size="button-big"
              disabled={
                emailValidate.state &&
                pwValidate.state &&
                nicknameValidate.state &&
                pwMatch
                  ? false
                  : true
              }
              link="/login"
            >
              회원가입
            </Button>
          </div>
          <section className="easy-login">
            <span>간편 로그인하기</span>
            <div className="easy-login-logo">
              <a href="https://www.google.com/">
                <img src={GoogleLogo} alt="구글 간편 로그인" />
              </a>
              <a href="https://www.kakaocorp.com/page/">
                <img src={KakaoLogo} alt="구글 간편 로그인" />
              </a>
            </div>
          </section>
          <section className="register">
            <span>이미 회원이신가요?</span>
            <Link to="/login" className="register-link">
              로그인
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Register;
