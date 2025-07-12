/** @jsxImportSource @emotion/react */
import FormStyle from "./FormStyle";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import logoImg from "@/assets/images/logo.svg";
import loginUser from "@/services/post/loginUser";
import InputField from "../ui/Form/InputField";
import PasswordField from "../ui/Form/PasswordField";
import useAuthForm from "@/hooks/useAuthForm";
import { renderButtonTextByState } from "@/utils/renderButtonText";

const LoginForm = () => {
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
      await loginUser(userData);
    },
  });

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
          onClick={handleSubmit}
        >
          {renderButtonTextByState(isSubmitting, "로그인")}
        </Button>

        {submitError && <p>{`${submitError}`}</p>}

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
