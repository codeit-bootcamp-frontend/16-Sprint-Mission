"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";
import InputField from "./InputField";
import PasswordField from "./PasswordField";
import { renderButtonTextByState } from "@/utils/renderButtonTextByState";

const LoginForm = () => {
  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <form className="form">
      <div className="form-logo">
        {/* <Link to="/" aria-label="새로고침">
          <img src={logoImg} alt="판다마켓 로고" width="396" height="132" />
        </Link> */}
      </div>

      <div className="form-contents">
        <InputField
          label="이메일"
          inputId="userEmail"
          type="email"
          name="email"
          placeholder="이메일"
          // onBlur={handleBlur}
          // fieldError={fieldErrors.email}
        />
        <PasswordField
          label="비밀번호"
          inputId="userPassword"
          name="password"
          placeholder="비밀번호"
          // onBlur={handleBlur}
          // fieldError={fieldErrors.password}
        />

        <Button
          type="submit"
          disabled={true}
          variant="primary"
          size="lg"
          onClick={handleSubmit}
        >
          {/* {renderButtonTextByState(isSubmitting, "로그인")} */}로그인
        </Button>

        {/* {submitError && <p>{`${submitError}`}</p>} */}

        {/* <SocialLogin /> */}

        <div className="form-footer">
          판다마켓이 처음이신가요?
          <Link className="form-footer-link" href="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
