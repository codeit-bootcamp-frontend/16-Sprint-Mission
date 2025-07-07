/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContent from "@/components/layout/AuthContent";
import AuthPageStyle from "./AuthPageStyle";
import Button from "@/components/ui/Button";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import logoImg from "@/assets/images/logo.svg";
import useForm from "@/hooks/useForm";
import Input from "@/components/ui/Input";
import FormControl from "@/components/ui/Form/FormControl";
import IconButton from "@/components/ui/Button/IconButton";
import eyeImg from "@/assets/images/ic_visibility_on.svg";
import eyeCloseImg from "@/assets/images/ic_visibility_off.svg";
import { ReqData } from "@/types/form";
import loginUser from "@/services/post/loginUser";
import useSignIn from "@/hooks/useSignIn";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSignInError, setIsSignInError] = useState<Error | null>(null);

  const formRef = useRef(null);

  const signIn = useSignIn();

  const { handleBlur, validateForm, isFormValid, fieldErrors } =
    useForm(formRef);

  const handleLogin = async () => {
    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const userData: ReqData = {};

    for (const [key, value] of formData.entries()) {
      userData[key] = value;
    }

    try {
      setIsSigningIn(true);
      setIsSignInError(null);
      await loginUser(userData);
      signIn(); // 로그인 컨텍스트 처리 -> 상품 목록 페이지로 이동
    } catch (err) {
      if (err instanceof Error) {
        setIsSignInError(err);
      } else {
        setIsSignInError(new Error("알 수 없는 오류가 발생했습니다."));
      }
    } finally {
      setIsSigningIn(false);
    }
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
                    isError={fieldErrors.email}
                  />
                  <span className="form-input-hint">{fieldErrors.email}</span>
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
                      id="userPassword"
                      name="password"
                      autoComplete="current-password"
                      placeholder="비밀번호"
                      required
                      onBlur={handleBlur}
                      isError={fieldErrors.password}
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
                  <span className="form-input-hint">
                    {fieldErrors.password}
                  </span>
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
                {isSigningIn ? "로그인중..." : "로그인"}
              </Button>
              {isSignInError && <p>{`${isSignInError}`}</p>}

              <SocialLogin />

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
