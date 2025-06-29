/** @jsxImportSource @emotion/react */
import AuthContent from "@/components/layout/AuthContent";
import AuthPageStyle from "./AuthPageStyle";
import Button from "@/components/ui/Button";
import googleIcon from "@/assets/images/ic_google.png";
import kakaoIcon from "@/assets/images/ic_kakao.png";
import logoImg from "@/assets/images/logo.svg";

const LoginPage = () => {
  return (
    <AuthContent css={AuthPageStyle}>
      <section className="login">
        <div className="form-container">
          <form className="form" id="loginForm" method="POST">
            <div className="form-logo">
              <a href="/login.html" aria-label="새로고침">
                <img
                  src={logoImg}
                  alt="판다마켓 로고"
                  width="396"
                  height="132"
                />
              </a>
            </div>
            <div className="form-contents">
              <div className="form-control">
                <label className="form-label" htmlFor="userEmail">
                  이메일
                </label>
                <input
                  className="form-input"
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  autoComplete="email"
                  placeholder="이메일"
                  required
                />
                <span className="form-input-hint"></span>
              </div>
              <div className="form-control">
                <label className="form-label" htmlFor="userPassword">
                  비밀번호
                </label>
                <div className="visible-wrap">
                  <input
                    className="form-input"
                    type="password"
                    id="userPassword"
                    name="userPassword"
                    autoComplete="current-password"
                    placeholder="비밀번호"
                    required
                  />
                  <button
                    type="button"
                    className="btn-password-visible"
                    id="passwordVisibleBtn"
                    title="비밀번호 표시/숨김"
                    aria-label="비밀번호 표시/숨김"
                    aria-pressed="false"
                  ></button>
                </div>
                <span className="form-input-hint"></span>
              </div>
              <Button
                type="submit"
                className="btn-lg btn-primary"
                id="loginBtn"
                disabled
                variant="primary"
                size="lg"
              >
                로그인
              </Button>
              <div className="easy-login">
                간편 로그인하기
                <div className="easy-login-icons">
                  <a
                    href="https://www.google.com"
                    aria-label="구글 계정으로 로그인하기"
                    title="클릭 시 구글 계정과 연동합니다."
                  >
                    <img
                      src={googleIcon}
                      alt="구글 아이콘"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.kakaocorp.com/page"
                    aria-label="카카오 계정으로 로그인하기"
                    title="클릭 시 카카오 계정과 연동합니다."
                  >
                    <img
                      src={kakaoIcon}
                      alt="카카오 아이콘"
                      width="40"
                      height="40"
                    />
                  </a>
                </div>
              </div>
              <div className="form-footer">
                판다마켓이 처음이신가요?
                <a className="form-footer-link" href="signup.html">
                  회원가입
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </AuthContent>
  );
};

export default LoginPage;
