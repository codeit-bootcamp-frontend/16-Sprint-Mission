// 함수 정의
/*
    Validators
*/
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validators = {
  email: (value) => {
    if (!value) return { isValid: false, message: "이메일을 입력해주세요." };
    if (!emailRegex.test(value))
      return { isValid: false, message: "이메일 형식에 맞지 않습니다." };
    return { isValid: true, message: "" };
  },
  nickname: (value) => {
    if (!value) return { isValid: false, message: "닉네임을 입력해주세요." };
    return { isValid: true, message: "" };
  },
  password: (value) => {
    if (!value) return { isValid: false, message: "비밀번호를 입력해주세요." };
    if (value.length < 8)
      return { isValid: false, message: "비밀번호를 8자리 이상 입력해주세요." };
    return { isValid: true, message: "" };
  },
  confirmPassword: (value) => {
    const passwordValue = document.getElementById("password").value;
    if (!value)
      return { isValid: false, message: "비밀번호를 한번 더 입력해주세요." };
    if (value.length < 8)
      return { isValid: false, message: "비밀번호를 8자리 이상 입력해주세요." };
    if (value !== passwordValue)
      return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
    return { isValid: true, message: "" };
  },
};
