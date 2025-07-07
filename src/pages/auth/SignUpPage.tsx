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
import IconButton from "@/components/ui/Button/IconButton";
import eyeImg from "@/assets/images/ic_visibility_on.svg";
import eyeCloseImg from "@/assets/images/ic_visibility_off.svg";
import createUser from "@/services/post/createUser";
import { ReqData } from "@/types/form";
import useSignIn from "@/hooks/useSignIn";
import SocialLogin from "@/components/SocialLogin/SocialLogin";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSignUpError, setIsSignUpError] = useState<Error | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const {
    handleBlur,
    isFormValid,
    validateForm,
    fieldErrors,
    // emailMsg,
    // passwordMsg,
    // passwordCheckMsg,
    // nicknameMsg,
  } = useForm(formRef);

  const signIn = useSignIn();

  const handleSignUp = async () => {
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
      await createUser(userData);
      signIn(); // 로그인 컨텍스트 처리 -> 상품 목록 페이지로 이동
    } catch (err) {
      if (err instanceof Error) {
        setIsSignUpError(err);
      } else {
        setIsSignUpError(new Error("알 수 없는 오류가 발생했습니다."));
      }
    } finally {
      setIsSigningUp(false);
    }
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
                    isError={fieldErrors.email}
                  />
                  <span className="form-input-hint">{fieldErrors.email}</span>
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
                    isError={fieldErrors.nickname}
                  />
                  <span className="form-input-hint">
                    {fieldErrors.nickname}
                  </span>
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
                      isError={fieldErrors.passwordCheck}
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
                    {fieldErrors.passwordCheck}
                  </span>
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
              {isSignUpError && <p>{`${isSignUpError}`}</p>}

              <SocialLogin />

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
