import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button.jsx";
import Input from "../components/input.jsx";
import inputValidator from "../functions/validator.js";
import Visibility from "../public/login/btn_visibility_on_24px.png";
import GoogleLogo from "../public/login/Component 2.png";
import KakaoLogo from "../public/login/Component 3.png";
import HeaderLogo from "../public/login/logo.png";
import "./login.css";

function Login() {
  const [emailValidate, setEmailValidate] = useState({
    state: false,
    message: "",
  });
  const [pwValidate, setPwValidate] = useState({
    state: false,
    message: "",
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const validateResult = inputValidator(value, name);

    switch (name) {
      case "email":
        setEmailValidate((prev) => ({
          ...prev,
          state: validateResult.state,
          message: validateResult.message,
        }));
        break;
      case "pw":
        setPwValidate((prev) => ({
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
            비밀번호
            <Input
              renderSlot={<img src={Visibility} alt="비밀번호 보이기 이미지" />}
              type="password"
              name="pw"
              onBlur={handleBlur}
            />
          </label>
          {!pwValidate.state && (
            <div className="error-message-container">
              <span>{pwValidate.message}</span>
            </div>
          )}
          <div style={{ width: "100%" }}>
            <Button
              size="button-big"
              disabled={emailValidate.state && pwValidate.state ? false : true}
              link="/items"
            >
              로그인
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
            <span>판다마켓이 처음이신가요?</span>
            <Link to="/register" className="register-link">
              회원가입
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}

export default Login;
