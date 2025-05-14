import { enableLoginButton } from "./function.js";

let emailCheck = false;
let passwordCheck = false;

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
    enableLoginButton(loginButton, emailCheck, passwordCheck);
  } else if (e.target.value !== "" && e.target.validity.valid === false) {
    emailInput.classList.add("warning-input-border");
    emailEmptyWarningMessage.classList.remove("warning-message-active");
    emailInvalidWarningMessage.classList.add("warning-message-active");
    emailCheck = false;
    enableLoginButton(loginButton, emailCheck, passwordCheck);
  } else {
    emailInput.classList.remove("warning-input-border");
    emailEmptyWarningMessage.classList.remove("warning-message-active");
    emailInvalidWarningMessage.classList.remove("warning-message-active");
    emailCheck = true;
    enableLoginButton(loginButton, emailCheck, passwordCheck);
  }
});

// 비밀번호 유효성 검사 코드
const passwordInput = document.getElementById("password-input");
const passwordEmptyWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(2);
const passwordInvalidWarningMessage = document
  .getElementsByClassName("warning-message")
  .item(3);

passwordInput.addEventListener("focusout", (e) => {
  if (e.target.value === "") {
    passwordInput.classList.add("warning-input-border");
    passwordEmptyWarningMessage.classList.add("warning-message-active");
    passwordInvalidWarningMessage.classList.remove("warning-message-active");
    passwordCheck = false;
    enableLoginButton(loginButton, emailCheck, passwordCheck);
  } else if (e.target.value.length < 8) {
    passwordInput.classList.add("warning-input-border");
    passwordEmptyWarningMessage.classList.remove("warning-message-active");
    passwordInvalidWarningMessage.classList.add("warning-message-active");
    passwordCheck = false;
    enableLoginButton(loginButton, emailCheck, passwordCheck);
  } else {
    passwordInput.classList.remove("warning-input-border");
    passwordEmptyWarningMessage.classList.remove("warning-message-active");
    passwordInvalidWarningMessage.classList.remove("warning-message-active");
    passwordCheck = true;
    enableLoginButton(loginButton, emailCheck, passwordCheck);
  }
});
