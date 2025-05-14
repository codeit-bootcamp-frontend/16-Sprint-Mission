import { enableLoginButton, passwordShowHide } from "./function.js";

let emailCheck = false;
let nicknameCheck = false;
let passwordCheck = false;
let password = "";

const loginButton = document.getElementById("login-button");

// 이메일 유효성 검사 코드
const emailInput = document.getElementById("email-input");
const emailEmptyWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(0);
const emailInvalidWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(1);

emailInput.addEventListener("focusout", (e) => {
  if (e.target.value === "" && e.target.validity.valid === true) {
    emailInput.classList.add("warning-input-border");
    emailEmptyWarningMessage.classList.add("warning-message-active");
    emailCheck = false;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  } else if (e.target.value !== "" && e.target.validity.valid === false) {
    emailInput.classList.add("warning-input-border");
    emailEmptyWarningMessage.classList.remove("warning-message-active");
    emailInvalidWarningMessage.classList.add("warning-message-active");
    emailCheck = false;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  } else {
    emailInput.classList.remove("warning-input-border");
    emailEmptyWarningMessage.classList.remove("warning-message-active");
    emailInvalidWarningMessage.classList.remove("warning-message-active");
    emailCheck = true;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  }
});

// 닉네임 유효성 검사 코드
const nicknameInput = document.getElementById("nickname-input");
const nicknameEmptyWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(2);

nicknameInput.addEventListener("focusout", (e) => {
  if (e.target.value === "") {
    nicknameInput.classList.add("warning-input-border");
    nicknameEmptyWarningMessage.classList.add("warning-message-active");
    nicknameCheck = false;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  } else {
    nicknameInput.classList.remove("warning-input-border");
    nicknameEmptyWarningMessage.classList.remove("warning-message-active");
    nicknameCheck = true;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  }
});

// 비밀번호 유효성 검사 코드
const passwordInput = document.getElementById("password-input");
const passwordEmptyWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(3);
const passwordInvalidWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(4);

passwordInput.addEventListener("focusout", (e) => {
  password = e.target.value;
  if (e.target.value === "") {
    passwordInput.classList.add("warning-input-border");
    passwordEmptyWarningMessage.classList.add("warning-message-active");
    passwordInvalidWarningMessage.classList.remove("warning-message-active");
    passwordCheck = false;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  } else if (e.target.value.length < 8) {
    passwordInput.classList.add("warning-input-border");
    passwordEmptyWarningMessage.classList.remove("warning-message-active");
    passwordInvalidWarningMessage.classList.add("warning-message-active");
    passwordCheck = false;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  } else {
    passwordInput.classList.remove("warning-input-border");
    passwordEmptyWarningMessage.classList.remove("warning-message-active");
    passwordInvalidWarningMessage.classList.remove("warning-message-active");
    passwordCheck = false;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  }
});

// 비밀번호 확인 유효성 검사 코드
const passwordConfirmInput = document.getElementById("password-confirm-input");
const passwordNotConfirmedWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(5);

passwordConfirmInput.addEventListener("focusout", (e) => {
  if (e.target.value !== password) {
    passwordConfirmInput.classList.add("warning-input-border");
    passwordNotConfirmedWarningMessage.classList.add("warning-message-active");
    passwordCheck = false;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  } else {
    passwordConfirmInput.classList.remove("warning-input-border");
    passwordNotConfirmedWarningMessage.classList.remove(
      "warning-message-active"
    );
    passwordCheck = true;
    enableLoginButton(loginButton, emailCheck, nicknameCheck, passwordCheck);
  }
});

// 비밀번호 보이기/숨기기
const passwordShowHideButton = document.querySelectorAll(
  ".password-show-hide-button"
);

passwordShowHideButton.forEach((el) => {
  passwordShowHide(el, el.parentNode.children[0]);
});
