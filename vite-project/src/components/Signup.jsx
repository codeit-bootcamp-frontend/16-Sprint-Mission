import { Link } from "react-router-dom";
import "../css/reset.css";
import "../css/common.css";
import "../css/login-signup.css";

function Signup() {
  return (
    <article>
      <section>
        <div className="signup-container">
          <div className="signup-img-box">
            <Link to="/" aria-label="홈으로 이동">
              <img
                className="signup-img"
                src="./images/main-page/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="signup-email-box">
            <h4>이메일</h4>
            <input
              type="email"
              placeholder="codeit@gmail.com"
              className="signup-email-input SignupInput"
              required
            />
            <h4
              className="error-msg"
              style={{ color: "red", display: "none", fontSize: "12px" }}
            >
              이메일을 입력해주세요.
            </h4>
          </div>

          <div className="signup-nickname-box">
            <h4>닉네임</h4>
            <input
              type="text"
              placeholder="판다"
              className="signup-nickname-input SignupInput"
              required
            />
            <h4
              className="error-msg"
              style={{ color: "red", display: "none", fontSize: "12px" }}
            >
              닉네임을 입력해주세요.
            </h4>
          </div>

          <div className="signup-password-box">
            <h4>비밀번호</h4>
            <input
              type="password"
              className="signup-password-input SignupInput"
              required
            />
            <h4
              className="error-msg"
              style={{ color: "red", display: "none", fontSize: "12px" }}
            >
              비밀번호를 입력해주세요.
            </h4>
          </div>

          <div className="signup-ckpassword-box">
            <h4>비밀번호 확인</h4>
            <input
              type="password"
              className="signup-ckpassword-input SignupInput"
              required
            />
            <h4
              className="error-msg"
              style={{ color: "red", display: "none", fontSize: "12px" }}
            >
              비밀번호가 일치하지 않습니다.
            </h4>
          </div>

          <div className="signup-button-box">
            <button
              id="signupBtn"
              className="signup-button"
              disabled
              style={{ cursor: "default" }}
              onClick={() => (window.location.href = "login.html")}
            >
              회원가입
            </button>
          </div>

          <div className="signup-ezlogin-box">
            <div className="signup-ezlogin">
              <h4>간편 로그인하기</h4>
            </div>
            <div className="signup-ezlogin-logos">
              <a
                href="https://www.google.com"
                aria-label="구글로 이동"
                rel="noopener"
              >
                <img
                  className="logo"
                  src="./images/main-page/google-logo.png"
                  alt="Google 로그인"
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
                  alt="Kakao 로그인"
                />
              </a>
            </div>
          </div>

          <div className="signup-footer">
            <h5>
              판다마켓이 처음이신가요? <Link to="/login">로그인</Link>
            </h5>
          </div>
        </div>
      </section>
    </article>
  );
}

export default Signup;
