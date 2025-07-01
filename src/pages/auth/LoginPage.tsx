/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { Link } from "react-router-dom";
import AuthContent from "@/components/layout/AuthContent";
import AuthPageStyle from "./AuthPageStyle";
import Button from "@/components/ui/Button";
import googleIcon from "@/assets/images/ic_google.png";
import kakaoIcon from "@/assets/images/ic_kakao.png";
import logoImg from "@/assets/images/logo.svg";
import useForm from "@/hooks/useForm";
import Input from "@/components/ui/Input";
import FormControl from "@/components/ui/Form/FormControl";
import FormLabel from "@/components/ui/Form/FormLabel";

const LoginPage = () => {
  const formRef = useRef(null);

  const { handleBlur, validateForm, isFormValid, emailMsg, passwordMsg } =
    useForm(formRef);

  const handleLogin = () => {
    // auth api 연결...
  };

  return (
    <AuthContent css={AuthPageStyle}>
      <section className="login">
        <div className="form-container">
          <form className="form" ref={formRef} onSubmit={validateForm}>
            <div className="form-logo">
              <Link to="/" aria-label="새로고침">
                <img
                  src={logoImg}
                  alt="판다마켓 로고"
                  width="396"
                  height="132"
                />
              </Link>
            </div>

            <div className="form-contents">
              <FormControl>
                <label className="form-label" htmlFor="userEmail">
                  이메일
                </label>
                <div className="input-hint-wrap">
                  <Input
                    className="form-input"
                    type="email"
                    id="userEmail"
                    name="email"
                    autoComplete="email"
                    placeholder="이메일"
                    required
                    onBlur={handleBlur}
                  />
                  <span className="form-input-hint">{emailMsg}</span>
                </div>
              </FormControl>

              <FormControl>
                <label className="form-label" htmlFor="userPassword">
                  비밀번호
                </label>
                <div className="input-hint-wrap">
                  <div className="visible-wrap">
                    <Input
                      className="form-input"
                      type="password"
                      id="userPassword"
                      name="password"
                      autoComplete="current-password"
                      placeholder="비밀번호"
                      required
                      onBlur={handleBlur}
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
                  <span className="form-input-hint">{passwordMsg}</span>
                </div>
              </FormControl>

              <Button
                type="submit"
                className="btn-lg btn-primary"
                id="loginBtn"
                disabled={!isFormValid}
                variant="primary"
                size="lg"
                onClick={handleLogin}
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
                <Link className="form-footer-link" to="/signUp">
                  회원가입
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </AuthContent>
  );
};

export default LoginPage;
