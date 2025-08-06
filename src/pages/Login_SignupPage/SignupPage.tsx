import logo from "@/assets/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import FieldUncontrolled from "./components/FieldUncontrolled";
import SocialLogin from "./components/SocialLogin";
import { fieldMap } from "./LoginPage";
import { useEffect, useRef, useState } from "react";
import { type ILoginData } from "./LoginPage";
import clsx from "clsx";

interface ISignupData extends ILoginData {
  nickname: string;
  passwordCheck: string;
}

const SignupPage = () => {
  const [isValidating, setIsValidating] = useState(false);
  const [hasError, setHasError] = useState<boolean>(true);
  const signupData = useRef<ISignupData>({
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });
  const isMount = useRef(true);
  const navigate = useNavigate();
  const commonFieldProps = {
    formData: signupData.current,
    validationTrigger: isValidating,
    onCheckValidating: setIsValidating,
    errorSetter: setHasError,
  };

  const handleStartValidation = () => {
    //검증 시작할 때 hasError->false, 각 필드에서 하나라도 에러있으면 true
    setIsValidating(true);
    setHasError(false);
  };

  useEffect(() => {
    if (isMount.current) {
      isMount.current = false;
      return;
    }

    if (isValidating || hasError === true) {
      return;
    }

    navigate("/login");
  }, [isValidating, hasError]);

  return (
    <section
      className="pt-20 pb-45 px-md
    md:w-160 md:mx-auto md:pt-48 md:px-0"
    >
      <Link to="/">
        <img
          className="mx-auto mb-lg
        md:w-99 md:h-33 md:mb-10"
          src={logo}
          alt="판다마켓 로고"
        />
      </Link>
      <FieldUncontrolled {...fieldMap.email} {...commonFieldProps} />
      <FieldUncontrolled {...fieldMap.nickname} {...commonFieldProps} />
      <FieldUncontrolled {...fieldMap.password} {...commonFieldProps} />
      <FieldUncontrolled
        {...fieldMap.passwordCheck}
        {...commonFieldProps}
        comparisonValue={signupData.current.password}
      />
      <button
        className={clsx(
          "btn primary-btn w-[100%] h-14 rounded-[40px] text-[20px]"
        )}
        type="button"
        onClick={handleStartValidation}
      >
        회원가입
      </button>
      <SocialLogin />
      <div className="text-text-grey800 text-[14px] text-center font-medium">
        이미 회원이신가요?&nbsp;
        <Link className="text-primary border-b-[1.5px] pb-[0.5px]" to="/login">
          로그인
        </Link>
      </div>
    </section>
  );
};

export default SignupPage;
