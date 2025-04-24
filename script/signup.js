"use strict";
import { validateInput } from "./util/validators.js";

const form = document.querySelector(".form");
const emailInput = document.querySelector("#userEmail");
const nicknameInput = document.querySelector("#userNickname");
const passwordInput = document.querySelector("#userPassword");
const passwordChkInput = document.querySelector("#userPasswordChk");
const signupBtn = document.querySelector("#signupBtn");

/* 로그인 폼 유효성 검사 */
function createLoginValidator() {
  let emailValid = false;
  let nicknameValid = false;
  let passwordValid = false;
  let passwordChkValid = false;

  return function formValidate(e) {
    switch (e.target.id) {
      case "userEmail":
        emailValid = validateInput(emailInput);
        break;
      case "userNickname":
        nicknameValid = validateInput(nicknameInput);
        break;
      case "userPassword":
        passwordValid = validateInput(passwordInput);
        break;
      case "userPasswordChk":
        passwordChkValid = validateInput(passwordChkInput, passwordInput);
        break;
    }

    signupBtn.disabled = !(
      emailValid &&
      nicknameValid &&
      passwordValid &&
      passwordChkValid
    );
  };
}

const loginValidate = createLoginValidator();
form.addEventListener("focusout", loginValidate);

/* UX: 페이지 진입 시 첫번째 input focus 처리 */
window.addEventListener("DOMContentLoaded", () => {
  emailInput.focus();
});

/* 회원가입 버튼 클릭 시 'login'으로 이동 */
signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "/login.html";
});
