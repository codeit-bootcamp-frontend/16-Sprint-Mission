"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "../input";
import Button from "../button";
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirm,
  MIN_NICKNAME_LENGTH,
  MAX_NICKNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
} from "../../lib/validation";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [errors, setErrors] = useState<{
    email?: string;
    nickname?: string;
    password?: string;
    passwordConfirm?: string;
  }>({});

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isEmailValid = validateEmail(email);
    const isNicknameValid = validateNickname(nickname);
    const isPasswordValid = validatePassword(password);
    const isPasswordConfirmValid = validatePasswordConfirm(
      passwordConfirm,
      password
    );

    setIsFormValid(
      isEmailValid &&
        isNicknameValid &&
        isPasswordValid &&
        isPasswordConfirmValid
    );
  }, [email, nickname, password, passwordConfirm]);

  const handleBlur = (field: string) => {
    let errorMsg: string | undefined;
    switch (field) {
      case "email":
        if (!email) errorMsg = `이메일을 입력해주세요`;
        if (email && !validateEmail(email))
          errorMsg = "잘못된 이메일 형식입니다.";
        break;
      case "nickname":
        if (!nickname) errorMsg = `닉네임을 입력해주세요`;
        if (nickname && !validateNickname(nickname))
          errorMsg = `닉네임은 ${MIN_NICKNAME_LENGTH} ~ ${MAX_NICKNAME_LENGTH}자 사이여야 합니다.`;
        break;
      case "password":
        if (!password) errorMsg = `비밀번호를 입력해주세요`;
        if (password && !validatePassword(password))
          errorMsg = `비밀번호를 ${MIN_PASSWORD_LENGTH}자 이상 입력해주세요.`;
        break;
      case "passwordConfirm":
        if (!passwordConfirm) errorMsg = `비밀번호가 일치하지 않습니다.`;
        if (
          passwordConfirm &&
          !validatePasswordConfirm(passwordConfirm, password)
        )
          errorMsg = "비밀번호가 일치하지 않습니다.";
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: errorMsg }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("회원가입 성공:", { email, nickname, password });
      // 성공 시 로그인 페이지로 이동 (기존 코드: window.location.href = '/login.html')
      router.push("/auth/login");
    }
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
        onBlur={() => handleBlur("email")}
        error={errors.email}
        required
      />
      <Input
        id="nickname"
        label="닉네임"
        type="text"
        placeholder="닉네임을 입력해주세요"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        onBlur={() => handleBlur("nickname")}
        error={errors.nickname}
        required
      />
      <Input
        id="password"
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => handleBlur("password")}
        error={errors.password}
        required
      />
      <Input
        id="password-confirm"
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        onBlur={() => handleBlur("passwordConfirm")}
        error={errors.passwordConfirm}
        required
      />
      <Button
        type="submit"
        disabled={!isFormValid}
        className="cursor-pointer w-full h-14 text-[20px] font-semibold text-gray-100 rounded-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        회원가입
      </Button>
    </form>
  );
}
