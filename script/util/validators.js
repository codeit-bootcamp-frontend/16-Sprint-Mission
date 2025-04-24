"use strict";

function setInvalid(input, message) {
  const inputHintEl = input
    .closest(".form-control")
    .querySelector(".form-input-hint");
  input.classList.add("invalid");
  inputHintEl.textContent = message;
}

function clearInvalid(input) {
  const inputHintEl = input
    .closest(".form-control")
    .querySelector(".form-input-hint");
  input.classList.remove("invalid");
  inputHintEl.textContent = "";
}

function validateEmail(emailInput) {
  if (emailInput.value.trim().length === 0) {
    setInvalid(emailInput, "이메일을 입력해주세요.");
    return false;
  } else if (!emailInput.checkValidity()) {
    setInvalid(emailInput, "잘못된 이메일 형식입니다.");
    return false;
  } else {
    clearInvalid(emailInput);
    return true;
  }
}

function validatePassword(passwordInput) {
  if (passwordInput.value.trim().length === 0) {
    setInvalid(passwordInput, "비밀번호를 입력해주세요.");
    return false;
  } else if (passwordInput.value.trim().length < 8) {
    setInvalid(passwordInput, "비밀번호를 8자 이상 입력해주세요.");
    return false;
  } else {
    clearInvalid(passwordInput);
    return true;
  }
}

function validatePasswordCheck() {}

export { validateEmail, validatePassword };
