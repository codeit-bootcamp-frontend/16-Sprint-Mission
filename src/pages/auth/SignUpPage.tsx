/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "@/hooks/useForm";
import Input from "@/components/ui/Input";
import FormControl from "@/components/ui/Form/FormControl";
import logoImg from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import AuthContent from "@/components/layout/AuthContent";
import AuthPageStyle from "./AuthPageStyle";
import googleIcon from "@/assets/images/ic_google.png";
import kakaoIcon from "@/assets/images/ic_kakao.png";
import IconButton from "@/components/ui/Button/IconButton";
import eyeImg from "@/assets/images/ic_visibility_on.svg";
import eyeCloseImg from "@/assets/images/ic_visibility_off.svg";
import createUser from "@/services/post/createUser";
import { ReqData } from "@/types/form";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSignUpError, setIsSignUpError] = useState<Error | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
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
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const userData: ReqData = {};

    for (const [key, value] of formData.entries()) {
      const mappedKey = key === "passwordCheck" ? "passwordConfirmation" : key;
      userData[mappedKey] = value;
    }

    try {
      setIsSigningUp(true);
      setIsSignUpError(null);
      createUser(userData);
    } catch (err) {
      if (err instanceof Error) {
        setIsSignUpError(err);
      } else {
        setIsSignUpError(new Error("알 수 없는 오류가 발생했습니다."));
      }
    } finally {
      setIsSigningUp(false);
    }

    // 로그인 컨텍스트 처리 -> 상품 목록 페이지로 이동
  };

  return (
    <AuthContent css={AuthPageStyle}>
      <section className="signup">
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
                    name="email"
                    id="userEmail"
                    autoComplete="email"
                    placeholder="pandaMarket@email.com"
                    required
                    onBlur={handleBlur}
                  />
                  <span className="form-input-hint">{emailMsg}</span>
                </div>
              </FormControl>

              <FormControl>
                <label className="form-label" htmlFor="userNickname">
                  닉네임
                </label>
                <div className="input-hint-wrap">
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
                      type={isVisible ? "text" : "password"}
                      name="password"
                      id="userPassword"
                      autoComplete="new-password"
                      placeholder="비밀번호 입력"
                      required
                      onBlur={handleBlur}
                    />
                    <IconButton
                      type="button"
                      className="btn-password-visible"
                      id="passwordVisibleBtn"
                      title="비밀번호 표시/숨김"
                      aria-label="비밀번호 표시/숨김"
                      aria-pressed="false"
                      imgSrc={isVisible ? eyeImg : eyeCloseImg}
                      width={24}
                      height={24}
                      hasBgColor={false}
                      onClick={() => setIsVisible((prev) => !prev)}
                    />
                  </div>
                  <span className="form-input-hint">{passwordMsg}</span>
                </div>
              </FormControl>

              <FormControl>
                <label className="form-label" htmlFor="userPasswordChk">
                  비밀번호 확인
                </label>
                <div className="input-hint-wrap">
                  <div className="visible-wrap">
                    <Input
                      className="form-input"
                      type={isVisible ? "text" : "password"}
                      name="passwordCheck"
                      id="userPasswordChk"
                      autoComplete="new-password"
                      placeholder="비밀번호 확인"
                      required
                      onBlur={handleBlur}
                    />
                    <IconButton
                      type="button"
                      className="btn-password-visible"
                      id="passwordVisibleBtn"
                      title="비밀번호 표시/숨김"
                      aria-label="비밀번호 표시/숨김"
                      aria-pressed="false"
                      imgSrc={isVisible ? eyeImg : eyeCloseImg}
                      width={24}
                      height={24}
                      hasBgColor={false}
                      onClick={() => setIsVisible((prev) => !prev)}
                    />
                  </div>
                  <span className="form-input-hint">{passwordCheckMsg}</span>
                </div>
              </FormControl>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                id="signupBtn"
                disabled={!isFormValid}
                onClick={handleSignUp}
              >
                {isSigningUp ? "회원가입중..." : "회원가입"}
              </Button>
              {isSignUpError && (
                <p>회원가입에 실패했습니다. 다시 시도해 주세요.</p>
              )}
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
                      width={40}
                      height={40}
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
                      width={40}
                      height={40}
                    />
                  </a>
                </div>
              </div>
              <div className="form-footer">
                이미 회원이신가요?
                <Link className="form-footer-link" to="/login">
                  로그인
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </AuthContent>
  );
};

export default SignUpPage;
