import { emailValidator, nicknameValidator, passwordValidator, passwordMatchValidator } from './modules/validators.js';
import onFocusOut from './modules/focusOutHandler.js'

const inputEmail = document.querySelector('#e-mail .form-input');
const inputEmailContainer = document.querySelector('#e-mail .form-input-container');
const spanStatusEmail = document.querySelector('#e-mail .form-status-info');

const inputNickname = document.querySelector('#nickname .form-input');
const inputNicknameContainer = document.querySelector('#nickname .form-input-container');
const spanStatusNickname = document.querySelector('#nickname .form-status-info');

const inputPassword = document.querySelector('#password .form-input');
const inputPasswordContainer = document.querySelector('#password .form-input-container');
const spanStatusPassword = document.querySelector('#password .form-status-info');

const inputVerifyPassword = document.querySelector('#verify_password .form-input');
const inputVerifyPasswordContainer = document.querySelector('#verify_password .form-input-container');
const spanStatusVerifyPassword = document.querySelector('#verify_password .form-status-info');

const imgPasswordVisible = document.querySelector('#password .form-icon-password');
const imgVerifyPasswordVisible = document.querySelector('#verify_password .form-icon-password');

const formButton = document.querySelector('.form-btn');

const inputStatus = {
  email: 0,
  nickname: 0,
  password: 0,
  passwordVerify: 0,
};

// 이메일 input 태그 focusout 이벤트
function onEmailFocusOut(e) {
  const statusKey = 'email';
  inputStatus[statusKey] = emailValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputEmailContainer,spanStatusEmail,formButton);
}

// 닉네임 input 태그 focusout 이벤트
function onNicknameFocusOut(e) {
  const statusKey = 'nickname';
  inputStatus[statusKey] = nicknameValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputNicknameContainer,spanStatusNickname,formButton);
}

// 비밀번호 input 태그 focusout 이벤트
function onPasswordFocusOut(e) {
  const statusKey = 'password';
  inputStatus[statusKey] = passwordValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputPasswordContainer,spanStatusPassword,formButton);
  if (inputVerifyPasswordContainer.classList.length > 1) onVerifyPasswordFocusOut();
}

// 비밀번호 확인 input 태그 focusout 이벤트
function onVerifyPasswordFocusOut(e) {
  const statusKey = 'passwordVerify';
  inputStatus[statusKey] = passwordMatchValidator(inputPassword.value,inputVerifyPassword.value);
  onFocusOut(inputStatus,statusKey,inputVerifyPasswordContainer,spanStatusVerifyPassword,formButton);
}

function onPasswordIcon(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

function onVerifyPasswordIcon(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputVerifyPassword.type = 'password';
  else inputVerifyPassword.type = 'text';
}

function onSignupButton(e) {
  e.preventDefault();
  location.href = 'login.html';
}

inputEmail.addEventListener('focusout', onEmailFocusOut);
inputNickname.addEventListener('focusout', onNicknameFocusOut);
inputPassword.addEventListener('focusout', onPasswordFocusOut);
inputVerifyPassword.addEventListener('focusout', onVerifyPasswordFocusOut);
imgPasswordVisible.addEventListener('click', onPasswordIcon);
imgVerifyPasswordVisible.addEventListener('click', onVerifyPasswordIcon);
formButton.addEventListener('click', onSignupButton);
