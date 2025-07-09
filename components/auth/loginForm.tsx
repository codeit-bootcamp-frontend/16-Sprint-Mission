"use client";

import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
import Input from "../input";
import Button from "../button";
import { validateEmail, validatePassword } from "../../lib/validation";

export default function LoginForm() {
  // const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {}
  );
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // email과 password 값이 바뀔 때마다 전체 폼의 유효성을 다시 계산합니다.
    // 이 방식은 기존 코드에서 updateSubmitButtonState()를 중복 호출하던 문제를 해결합니다.
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  const handleEmailBlur = () => {
    if (!email) {
      setErrors((prev) => ({ ...prev, email: "이메일을 입력해주세요" }));
    }

    if (email && !validateEmail(email)) {
      setErrors((prev) => ({ ...prev, email: "잘못된 이메일 형식입니다." }));
    } else {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setErrors((prev) => ({ ...prev, password: "비밀번호를 입력해주세요" }));
    }
    if (password && !validatePassword(password)) {
      setErrors((prev) => ({
        ...prev,
        password: "비밀번호를 8자 이상 입력해주세요.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (isFormValid) {
    //   console.log("로그인 성공:", { email, password });
    //
    //   router.push("/items");
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
      <Input
        id="email"
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={handleEmailBlur}
        error={errors.email}
        required
      />
      <Input
        id="password"
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handlePasswordBlur}
        error={errors.password}
        required
      />
      <Button
        type="submit"
        disabled={!isFormValid}
        className="cursor-pointer w-full h-14 text-[20px] font-semibold text-white rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        로그인
      </Button>
    </form>
  );
}
