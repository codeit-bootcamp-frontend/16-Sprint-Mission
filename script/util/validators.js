/* 이메일 유효성 */
export function validateEmail(input) {
  if (input.value.trim().length === 0) {
    return { isValid: false, message: "이메일을 입력해주세요." };
  }
  if (!input.checkValidity()) {
    return { isValid: false, message: "잘못된 이메일 형식입니다." };
  }
  return { isValid: true, message: "" };
}

/* 비밀번호 유효성 */
export function validatePassword(input) {
  const inputPasswordCheck = document.querySelector("#userPasswordChk");
  // 비밀번호 체크 연동
  if (inputPasswordCheck) {
    if (input.value !== inputPasswordCheck.value) {
      validatePasswordCheck(inputPasswordCheck);
    } else {
      return { isValid: true, message: "" };
    }
  }

  // 비밀번호 유효성 검사
  if (input.value.trim().length === 0) {
    return { isValid: false, message: "비밀번호를 입력해주세요." };
  }
  if (input.value.trim().length < 8) {
    return { isValid: false, message: "비밀번호를 8자 이상 입력해주세요." };
  }
  return { isValid: true, message: "" };
}

/* 비밀번호 확인 유효성 */
export function validatePasswordCheck(input) {
  const inputPassword = document.querySelector("#userPassword");
  if (inputPassword.value !== input.value) {
    return { isValid: false, message: "비밀번호가 일치하지 않습니다." };
  }
  return { isValid: true, message: "" };
}

/* 닉네임 유효성 */
export function validateNickname(input) {
  if (input.value.trim().length === 0) {
    return { isValid: false, message: "닉네임을 입력해주세요." };
  }
  return { isValid: true, message: "" };
}
