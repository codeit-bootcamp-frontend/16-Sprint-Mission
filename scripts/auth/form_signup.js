import { emailValidator, nicknameValidator, passwordValidator, passwordMatchValidator } from './modules/validators.js';
import onFocusOut from './modules/focusOutHandler.js'

const inputEmail = document.querySelector('#e-mail .form-input');
const inputNickname = document.querySelector('#nickname .form-input');
const inputPassword = document.querySelector('#password .form-input');
const inputVerifyPassword = document.querySelector('#verify_password .form-input');

const imgPasswordVisible = document.querySelector('#password .form-icon-password');
const imgVerifyPasswordVisible = document.querySelector('#verify_password .form-icon-password');

const formButton = document.querySelector('.form-btn');

const inputStatus = {
  email: -1,
  nickname: -1,
  password: -1,
  passwordVerify: -1,
};

// 이메일 input 태그 focusout 이벤트
function onEmailFocusOut(e) {
  const statusKey = 'email';
  const inputEmailContainer = document.querySelector('#e-mail .form-input-container');
  const spanStatusEmail = document.querySelector('#e-mail .form-status-info');
  inputStatus[statusKey] = emailValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputEmailContainer,spanStatusEmail,formButton);
}

// 닉네임 input 태그 focusout 이벤트
function onNicknameFocusOut(e) {
  const statusKey = 'nickname';
  const inputNicknameContainer = document.querySelector('#nickname .form-input-container');
  const spanStatusNickname = document.querySelector('#nickname .form-status-info');
  inputStatus[statusKey] = nicknameValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputNicknameContainer,spanStatusNickname,formButton);
}

// 비밀번호 input 태그 focusout 이벤트
function onPasswordFocusOut(e) {
  const statusKey = 'password';
  const inputPasswordContainer = document.querySelector('#password .form-input-container');
  const spanStatusPassword = document.querySelector('#password .form-status-info');
  inputStatus[statusKey] = passwordValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputPasswordContainer,spanStatusPassword,formButton);
  if (inputStatus.passwordVerify !== -1) onVerifyPasswordFocusOut();
}

// 비밀번호 확인 input 태그 focusout 이벤트
function onVerifyPasswordFocusOut(e) {
  const statusKey = 'passwordVerify';
  const inputVerifyPasswordContainer = document.querySelector('#verify_password .form-input-container');
  const spanStatusVerifyPassword = document.querySelector('#verify_password .form-status-info');
  inputStatus[statusKey] = passwordMatchValidator(inputPassword.value,inputVerifyPassword.value);
  onFocusOut(inputStatus,statusKey,inputVerifyPasswordContainer,spanStatusVerifyPassword,formButton);
}

function onPasswordIconClick(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

function onVerifyPasswordIconClick(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputVerifyPassword.type = 'password';
  else inputVerifyPassword.type = 'text';
}

function onSignupButtonClick(e) {
  e.preventDefault();
  location.href = 'login.html';
}

inputEmail.addEventListener('focusout', onEmailFocusOut);
inputNickname.addEventListener('focusout', onNicknameFocusOut);
inputPassword.addEventListener('focusout', onPasswordFocusOut);
inputVerifyPassword.addEventListener('focusout', onVerifyPasswordFocusOut);
imgPasswordVisible.addEventListener('click', onPasswordIconClick);
imgVerifyPasswordVisible.addEventListener('click', onVerifyPasswordIconClick);
formButton.addEventListener('click', onSignupButtonClick);
