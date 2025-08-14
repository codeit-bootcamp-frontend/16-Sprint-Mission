import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import InputField from "@/components/InputField";
import PasswordField from "@/components/InputField/PasswordField";
import SocialLoginButton from "@/components/SocialLoginButton";
import { renderButtonTextByState } from "@/utils/renderButtonTextByState";
import googleIcon from "../../public/images/ic_google.png";
import kakaoIcon from "../../public/images/ic_kakao.png";
import { SignUpValues } from "@/types/form";
import { useEffect } from "react";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    watch,
    trigger,
  } = useForm<SignUpValues>({
    mode: "onChange",
  });

  // const signUpMutation = useLogin();

  const onSubmit = (data: SignUpValues) => {
    // signUpMutation.mutate(data);
    console.log(data);
  };

  const password = watch("password");
  const passwordCheck = watch("passwordCheck");

  useEffect(() => {
    if (password && passwordCheck.length >= 8) trigger("passwordCheck");
  }, [password, passwordCheck]);

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="이메일을 입력해주세요"
          required
          {...register("email", {
            required: "이메일을 입력해주세요.",
            setValueAs: (v) => v.trim(),
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "이메일 형식으로 작성해주세요.",
            },
          })}
          error={errors.email?.message}
        />

        <InputField
          label="닉네임"
          inputId="nickname"
          placeholder="닉네임을 입력해주세요"
          required
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
            setValueAs: (v) => v.trim(),
          })}
          error={errors.nickname?.message}
        />

        <PasswordField
          label="비밀번호"
          inputId="userPassword"
          placeholder="비밀번호를 입력해주세요"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
            setValueAs: (v) => v.trim(),
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요.",
            },
          })}
          error={errors.password?.message}
          isLogin
        />

        <PasswordField
          label="비밀번호 확인"
          inputId="userPasswordCheck"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          {...register("passwordCheck", {
            required: "비밀번호 확인을 입력해주세요.",
            setValueAs: (v) => v.trim(),
            minLength: {
              value: 8,
              message: "비밀번호를 8자 이상 입력해주세요.",
            },
            validate: (v) => {
              if (v !== watch("password")) {
                return "비밀번호가 일치하지 않습니다.";
              } else {
                return true;
              }
            },
          })}
          error={errors.passwordCheck?.message}
        />

        <Button
          type="submit"
          disabled={!isValid}
          variant="primary"
          size="lg"
          shape="round"
        >
          {renderButtonTextByState(isSubmitting, "회원가입")}
        </Button>

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
          이미 회원이신가요?
          <Link className="form-footer-link" href="/login">
            로그인
          </Link>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
