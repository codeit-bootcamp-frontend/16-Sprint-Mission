"use strict";

function setInvalid(input, message) {
  const inputHintEl = input
    .closest(".form-control")
    .querySelector(".form-input-hint");
  input.classList.add("invalid");
  inputHintEl.textContent = message;
}

function setValid(input) {
  const inputHintEl = input
    .closest(".form-control")
    .querySelector(".form-input-hint");
  input.classList.remove("invalid");
  inputHintEl.textContent = "";
}

function validateEmail(input) {
  if (input.value.trim().length === 0) {
    setInvalid(input, "이메일을 입력해주세요.");
    return false;
  } else if (!input.checkValidity()) {
    setInvalid(input, "잘못된 이메일 형식입니다.");
    return false;
  } else {
    setValid(input);
    return true;
  }
}

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
    setInvalid(input, "비밀번호를 입력해주세요.");
    return false;
  } else if (input.value.trim().length < 8) {
    setInvalid(input, "비밀번호를 8자 이상 입력해주세요.");
    return false;
  } else {
    setValid(input);
    return true;
  }
}

function validatePasswordChk(input, chkInput) {
  if (input.value !== chkInput.value) {
    setInvalid(chkInput, "비밀번호가 일치하지 않습니다.");
    return false;
  } else {
    setValid(chkInput);
    return true;
  }
}

function validateNickname(input) {
  if (input.value.trim().length === 0) {
    setInvalid(input, "닉네임을 입력해주세요.");
    return false;
  } else {
    setValid(input);
    return true;
  }
}

export {
  validateEmail,
  validatePassword,
  validatePasswordChk,
  validateNickname,
};
