import { Link } from "react-router-dom";
import "../css/reset.css";
import "../css/common.css";
import "../css/login-signup.css";

function Login() {
  return (
    <article>
      <section>
        <div className="login-container">
          <div className="login-img-box">
            <Link to="/" aria-label="홈으로 이동">
              <img
                className="login-img"
                src="./images/main-page/logo.png"
                alt="logo"
              />
            </Link>
          </div>
          <div className="login-email-box">
            <h4>이메일</h4>
            <input
              type="email"
              placeholder="codeit@gmail.com"
              className="login-email-input LoginInput"
              required
            />
            <h4
              className="error-msg"
              style={{ color: "red", display: "none", fontSize: "12px" }}
            >
              이메일을 입력해주세요.
            </h4>
          </div>
          <div className="login-password-box">
            <h4>비밀번호</h4>
            <input
              type="password"
              className="login-password-input LoginInput"
              required
            />
            <h4
              className="error-msg"
              style={{ color: "red", display: "none", fontSize: "12px" }}
            >
              비밀번호를 입력해주세요.
            </h4>
          </div>
          <div className="login-button-box">
            <button
              id="loginBtn"
              className="login-button"
              onClick={() => (window.location.href = "items.html")}
              disabled
              style={{ cursor: "default" }}
            >
              로그인
            </button>
          </div>
          <div className="login-ezlogin-box">
            <div className="login-ezlogin">
              <h4>간편 로그인하기</h4>
            </div>
            <div className="login-ezlogin-logos">
              <a
                href="https://www.google.com"
                aria-label="구글로 이동"
                rel="noopener"
              >
                <img
                  className="logo"
                  src="./images/main-page/google-logo.png"
                  alt=""
                />
              </a>
              <a
                href="https://www.kakaorp.com/page/"
                aria-label="카카오로 이동"
                rel="noopener"
              >
                <img
                  className="logo"
                  src="./images/main-page/kakao-logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="login-footer">
            <h5>
              판다마켓이 처음이신가요?
              <Link to="/signup">회원가입</Link>
            </h5>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Login;
