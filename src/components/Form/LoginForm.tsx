/** @jsxImportSource @emotion/react */
import FormStyle from "./FormStyle";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import logoImg from "@/assets/images/logo.svg";
import useForm from "@/hooks/useForm";
import { ReqData } from "@/types/form";
import loginUser from "@/services/post/loginUser";
import useSignIn from "@/hooks/useSignIn";
import InputField from "../ui/Form/InputField";
import PasswordField from "../ui/Form/PasswordField";

const LoginForm = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSignInError, setIsSignInError] = useState<Error | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

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
    <form
      className="form"
      ref={formRef}
      onSubmit={validateForm}
      css={FormStyle}
    >
      <div className="form-logo">
        <Link to="/" aria-label="새로고침">
          <img src={logoImg} alt="판다마켓 로고" width="396" height="132" />
        </Link>
      </div>

      <div className="form-contents">
        <InputField
          label="이메일"
          inputId="userEmail"
          type="email"
          name="email"
          placeholder="이메일"
          required
          onBlur={handleBlur}
          fieldError={fieldErrors.email}
        />
        <PasswordField
          label="비밀번호"
          inputId="userPassword"
          name="password"
          placeholder="비밀번호"
          onBlur={handleBlur}
          fieldError={fieldErrors.password}
        />

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
  );
};

export default LoginForm;
