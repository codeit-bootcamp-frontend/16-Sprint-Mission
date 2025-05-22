import { Link } from "react-router-dom";
import "./FormAuth.css";
import { useNavigate } from "react-router";
import AuthField from "../../components/common/AuthField/AuthField";
import { FIELDS_CONFIG } from "./fieldsConfig";
import SocialLogin from "../../components/SocialLogin";
import LogoHeader from "../../components/layout/LogoHeader/LogoHeader";
import { useFormFields } from "../../hooks/useFormFields";

const FIELD_KEYS = ["email", "nickname", "password", "passwordVerify"];

const Signup = () => {
  const onSubmitNavigate = useNavigate();

  const { values, valids, hints, isSubmitEnabled, handleInputChange, handleInputBlur } =
    useFormFields(FIELD_KEYS);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitNavigate("/login");
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
            fieldConfig={FIELDS_CONFIG.nickname}
            value={values["nickname"]}
            valid={valids["nickname"]}
            hint={hints["nickname"]}
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
          <AuthField
            fieldConfig={FIELDS_CONFIG.passwordVerify}
            value={values["passwordVerify"]}
            valid={valids["passwordVerify"]}
            hint={hints["passwordVerify"]}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
          <button id="form-submit" className="button-style" disabled={!isSubmitEnabled}>
            회원가입
          </button>
        </form>
        <SocialLogin />
        <span className="form-hint">
          이미 회원이신가요?{" "}
          <Link className="form-hint-link" to={"/login"} aria-label="로그인 버튼">
            로그인
          </Link>
        </span>
      </main>
    </>
  );
};

export default Signup;
