import logo from "@/assets/logo/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import FieldUncontrolled from "./components/FieldUncontrolled";
import SocialLogin from "./components/SocialLogin";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  validateEmail,
  validatePassword,
  validatePasswordCheck,
} from "@/utils/validations";

export interface ILoginData {
  email: string;
  password: string;
}

export const fieldMap = {
  email: {
    id: "email",
    label: "이메일",
    type: "email",
    placeholder: "이메일을 입력해주세요",
    validator: validateEmail,
  },
  nickname: {
    id: "nickname",
    label: "닉네임",
    type: "text",
    placeholder: "닉네임을 입력해주세요",
  },
  password: {
    id: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
    validator: validatePassword,
  },
  passwordCheck: {
    id: "passwordCheck",
    label: "비밀번호 확인",
    type: "password",
    placeholder: "비밀번호를 다시 입력해주세요",
    validator: validatePasswordCheck,
  },
} as const;

const LoginPage = () => {
  const [isValidating, setIsValidating] = useState(false);
  const [hasError, setHasError] = useState<boolean>(true);
  const loginData = useRef<ILoginData>({ email: "", password: "" });
  const isMount = useRef(true);
  const navigate = useNavigate();
  const commonFieldProps = {
    formData: loginData.current,
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

    navigate("/");
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
      <FieldUncontrolled {...fieldMap.password} {...commonFieldProps} />
      <button
        className={clsx(
          "btn primary-btn w-full h-14 rounded-[40px] text-[20px]"
        )}
        type="button"
        onClick={handleStartValidation}
      >
        로그인
      </button>
      <SocialLogin />
      <div className="text-text-grey800 text-[14px] text-center font-medium">
        판다마켓이 처음이신가요?&nbsp;
        <Link className="text-primary border-b-[1.5px] pb-[0.5px]" to="/signup">
          회원가입
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
