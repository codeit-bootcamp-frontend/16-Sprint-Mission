"use strict";

/* 유효성 상태 설정 */
function setValid(input, valid = true, msg) {
  const inputHintEl = input
    .closest(".form-control")
    .querySelector(".form-input-hint");

  if (!valid) {
    input.classList.add("invalid");
    inputHintEl.textContent = msg;
    return;
  }

  input.classList.remove("invalid");
  inputHintEl.textContent = "";
}

/* 이메일 유효성 */
function validateEmail(input) {
  if (input.value.trim().length === 0) {
    setValid(input, false, "이메일을 입력해주세요.");
    return false;
  }

  if (!input.checkValidity()) {
    setValid(input, false, "잘못된 이메일 형식입니다.");
    return false;
  }

  setValid(input);
  return true;
}

/* 비밀번호 유효성 */
function validatePassword(input, chkInput) {
  // 비밀번호 체크 연동
  if (chkInput) {
    if (input.value !== chkInput.value) {
      validatePasswordChk(input, chkInput);
    } else {
      setValid(chkInput);
    }
  }

  // 비밀번호 유효성 검사
  if (input.value.trim().length === 0) {
    setValid(input, false, "비밀번호를 입력해주세요.");
    return false;
  }

  if (input.value.trim().length < 8) {
    setValid(input, false, "비밀번호를 8자 이상 입력해주세요.");
    return false;
  }

  setValid(input);
  return true;
}

/* 비밀번호 확인 유효성 */
function validatePasswordChk(input, chkInput) {
  if (input.value !== chkInput.value) {
    setValid(chkInput, false, "비밀번호가 일치하지 않습니다.");
    return false;
  }

  setValid(chkInput);
  return true;
}

/* 닉네임 유효성 */
function validateNickname(input) {
  if (input.value.trim().length === 0) {
    setValid(input, false, "닉네임을 입력해주세요.");
    return false;
  }

  setValid(input);
  return true;
}

export {
  validateEmail,
  validatePassword,
  validatePasswordChk,
  validateNickname,
};
