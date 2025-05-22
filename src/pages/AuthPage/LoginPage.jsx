import { Link } from "react-router-dom";
import "./FormAuth.css";
import { useNavigate } from "react-router";
import AuthField from "../../components/common/AuthField/AuthField";
import { FIELDS_CONFIG } from "./fieldsConfig";
import SocialLogin from "../../components/SocialLogin";
import LogoHeader from "../../components/layout/LogoHeader/LogoHeader";
import { useFormFields } from "../../hooks/useFormFields";
import { useLoginContext } from "../../contexts/LoginContext";

const FIELD_KEYS = ["email", "password"];

const LoginPage = () => {
  const onSubmitNavigate = useNavigate();
  const { setIsLogin } = useLoginContext();

  const { values, valids, hints, isSubmitEnabled, handleInputChange, handleInputBlur } =
    useFormFields(FIELD_KEYS);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitNavigate("/items");
    setIsLogin(true);
  };

  return (
    <>
      <main className="page-form">
        <LogoHeader />
        <form className="form-container" onSubmit={handleSubmit}>
          <AuthField
            fieldConfig={FIELDS_CONFIG.email}
            value={values["email"]}
            valid={valids["email"]}
            hint={hints["email"]}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <AuthField
            fieldConfig={FIELDS_CONFIG.password}
            value={values["password"]}
            valid={valids["password"]}
            hint={hints["password"]}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <button id="form-submit" className="button-style" disabled={!isSubmitEnabled}>
            로그인
          </button>
        </form>
        <SocialLogin />
        <span className="form-hint">
          판다마켓이 처음이신가요?{" "}
          <Link className="form-hint-link" to={"/signup"} aria-label="회원가입 버튼">
            회원가입
          </Link>
        </span>
      </main>
    </>
  );
};

export default LoginPage;
