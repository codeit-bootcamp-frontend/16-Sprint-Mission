/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { Link } from "react-router-dom";
import useForm from "@/hooks/useForm";
import Input from "@/components/ui/Input";
import FormControl from "@/components/ui/Form/FormControl";
import logoImg from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";

const SignUpPage = () => {
  const formRef = useRef(null);
  const {
    handleBlur,
    isFormValid,
    validateForm,
    emailMsg,
    passwordMsg,
    passwordCheckMsg,
    nicknameMsg,
  } = useForm(formRef);

  const handleSignUp = () => {
    console.log("test");
  };

  return (
    <main className="signup auth">
      <div className="form-container">
        <form
          className="form"
          id="signupForm"
          method="POST"
          ref={formRef}
          onSubmit={validateForm}
        >
          <div className="form-logo">
            <Link to="/" aria-label="새로고침">
              <img src={logoImg} alt="판다마켓 로고" width="396" height="132" />
            </Link>
          </div>

          <div className="form-contents">
            <FormControl>
              <label className="form-label" htmlFor="userEmail">
                이메일
              </label>
              <Input
                className="form-input"
                type="email"
                name="email"
                id="userEmail"
                autoComplete="email"
                placeholder="pandaMarket@email.com"
                required
                onBlur={handleBlur}
              />
              <span className="form-input-hint">{emailMsg}</span>
            </FormControl>

            <FormControl>
              <label className="form-label" htmlFor="userNickname">
                닉네임
              </label>
              <Input
                className="form-input"
                type="text"
                name="nickname"
                id="userNickname"
                placeholder="닉네임"
                required
                onBlur={handleBlur}
              />
              <span className="form-input-hint">{nicknameMsg}</span>
            </FormControl>

            <FormControl>
              <label className="form-label" htmlFor="userPassword">
                비밀번호
              </label>
              <div className="visible-wrap">
                <Input
                  className="form-input"
                  type="password"
                  name="password"
                  id="userPassword"
                  autoComplete="new-password"
                  placeholder="비밀번호 입력"
                  required
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className="btn-password-visible off"
                  id="passwordVisibleBtn"
                  title="비밀번호 표시/숨김"
                  aria-label="비밀번호 표시/숨김"
                  aria-pressed="false"
                ></button>
              </div>
              <span className="form-input-hint">{passwordMsg}</span>
            </FormControl>

            <FormControl>
              <label className="form-label" htmlFor="userPasswordChk">
                비밀번호 확인
              </label>
              <div className="visible-wrap">
                <Input
                  className="form-input"
                  type="password"
                  name="passwordCheck"
                  id="userPasswordChk"
                  autoComplete="new-password"
                  placeholder="비밀번호 확인"
                  required
                  onBlur={handleBlur}
                />
                <button
                  type="button"
                  className="btn-password-visible"
                  id="passwordChkVisibleBtn"
                  title="비밀번호 표시/숨김"
                  aria-label="비밀번호 표시/숨김"
                  aria-pressed="false"
                ></button>
              </div>
              <span className="form-input-hint">{passwordCheckMsg}</span>
            </FormControl>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              id="signupBtn"
              disabled={!isFormValid}
              onClick={handleSignUp}
            >
              회원가입
            </Button>
            <div className="easy-login">
              간편 로그인하기
              <div className="easy-login-icons">
                <a
                  href="https://www.google.com"
                  aria-label="구글 계정으로 로그인하기"
                  title="클릭 시 구글 계정과 연동합니다."
                >
                  <img src="images/ic_google.png" alt="구글 아이콘" />
                </a>
                <a
                  href="https://www.kakaocorp.com/page"
                  aria-label="카카오 계정으로 로그인하기"
                  title="클릭 시 카카오 계정과 연동합니다."
                >
                  <img src="images/ic_kakao.png" alt="카카오 아이콘" />
                </a>
              </div>
            </div>
            <div className="form-footer">
              이미 회원이신가요?
              <a className="form-footer-link" href="login.html">
                로그인
              </a>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUpPage;
