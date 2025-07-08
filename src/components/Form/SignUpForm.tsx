/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "@/hooks/useForm";
import logoImg from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import createUser from "@/services/post/createUser";
import { ReqData } from "@/types/form";
import useSignIn from "@/hooks/useSignIn";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import InputField from "@/components/ui/Form/InputField";
import PasswordField from "@/components/ui/Form/PasswordField";
import FormStyle from "./FormStyle";

const SignUpForm = () => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [isSignUpError, setIsSignUpError] = useState<Error | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const { handleBlur, isFormValid, validateForm, fieldErrors } =
    useForm(formRef);

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
    <form
      className="form"
      method="POST"
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
        <InputField
          label="닉네임"
          inputId="userNickname"
          type="text"
          name="nickname"
          placeholder="닉네임"
          required
          onBlur={handleBlur}
          fieldError={fieldErrors.nickname}
        />
        <PasswordField
          label="비밀번호"
          inputId="userPassword"
          name="password"
          placeholder="비밀번호"
          onBlur={handleBlur}
          fieldError={fieldErrors.password}
        />
        <PasswordField
          label="비밀번호 확인"
          inputId="userPasswordChk"
          name="passwordCheck"
          placeholder="비밀번호 확인"
          onBlur={handleBlur}
          fieldError={fieldErrors.passwordCheck}
        />

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
  );
};

export default SignUpForm;
