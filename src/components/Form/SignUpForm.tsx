/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import logoImg from "@/assets/images/logo.svg";
import Button from "@/components/ui/Button";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import InputField from "@/components/ui/Form/InputField";
import PasswordField from "@/components/ui/Form/PasswordField";
import FormStyle from "./FormStyle";
import useAuthForm from "@/hooks/useAuthForm";
import createUser from "@/services/post/createUser";
import { renderButtonTextByState } from "@/utils/renderButtonText";

const SignUpForm = () => {
  const {
    formRef,
    isSubmitting,
    submitError,
    handleBlur,
    validateForm,
    isFormValid,
    fieldErrors,
    handleSubmit,
  } = useAuthForm({
    onSubmit: async (userData) => {
      await createUser(userData);
    },
  });

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
          onClick={handleSubmit}
        >
          {renderButtonTextByState(isSubmitting, "회원가입")}
        </Button>

        {submitError && <p>{`${submitError}`}</p>}

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
