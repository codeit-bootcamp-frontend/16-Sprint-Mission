"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import InputField from "@/components/InputField";
import PasswordField from "@/components/InputField/PasswordField";
import SocialLoginButton from "@/components/SocialLoginButton";
import { renderButtonTextByState } from "@/utils/renderButtonTextByState";
import googleIcon from "../../public/images/ic_google.png";
import kakaoIcon from "../../public/images/ic_kakao.png";

const LoginForm = () => {
  const handleSubmit = () => {
    console.log("test");
  };

  return (
    <form className="auth-form">
      <Link href="/" aria-label="새로고침" className="auth-form-logo">
        <Image
          src="/images/logo.svg"
          alt="판다마켓 로고"
          width={396}
          height={132}
          priority
        />
      </Link>

      <div className="form-controls">
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
          shape="round"
          onClick={handleSubmit}
        >
          {/* {renderButtonTextByState(isSubmitting, "로그인")} */}로그인
        </Button>

        {/* {submitError && <p>{`${submitError}`}</p>} */}

        <div className="flex justify-between items-center my-2 md:my-0 py-4 px-6 rounded-xl bg-primary-light text-gray-800">
          <span className="text-gray-800">간편 로그인하기</span>

          <div className="flex gap-4 justify-self-end">
            <SocialLoginButton
              href="https://www.google.com"
              title="클릭 시 구글 계정으로 로그인 합니다."
              ariaLabel="구글 계정으로 로그인하기"
              imgSrc={googleIcon}
              imgAlt="구글 아이콘"
            />

            <SocialLoginButton
              href="https://www.kakaocorp.com/page"
              title="클릭 시 카카오 계정으로 로그인 합니다."
              ariaLabel="카카오 계정으로 로그인하기"
              imgSrc={kakaoIcon}
              imgAlt="카카오 아이콘"
            />
          </div>
        </div>

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
