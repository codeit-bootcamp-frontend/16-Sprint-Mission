import { emailValidator, nicknameValidator, passwordValidator, passwordMatchValidator } from './modules/validators.js';
import onFocusOut from './modules/focusOutHandler.js'

const inputEmail = document.querySelector('#email .form-input');
const inputNickname = document.querySelector('#nickname .form-input');
const inputPassword = document.querySelector('#password .form-input');
const inputPasswordVerify = document.querySelector('#passwordVerify .form-input');

const imgPasswordVisible = document.querySelector('#password .form-icon-password');
const imgPasswordVerifyVisible = document.querySelector('#passwordVerify .form-icon-password');

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
  const inputEmailContainer = document.querySelector(`#${statusKey} .form-input-container`);
  const spanStatusEmail = document.querySelector(`#${statusKey} .form-status-info`);
  inputStatus[statusKey] = emailValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputEmailContainer,spanStatusEmail,formButton);
}

// 닉네임 input 태그 focusout 이벤트
function onNicknameFocusOut(e) {
  const statusKey = 'nickname';
  const inputNicknameContainer = document.querySelector(`#${statusKey} .form-input-container`);
  const spanStatusNickname = document.querySelector(`#${statusKey} .form-status-info`);
  inputStatus[statusKey] = nicknameValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputNicknameContainer,spanStatusNickname,formButton);
}

// 비밀번호 input 태그 focusout 이벤트
function onPasswordFocusOut(e) {
  const statusKey = 'password';
  const inputPasswordContainer = document.querySelector(`#${statusKey} .form-input-container`);
  const spanStatusPassword = document.querySelector(`#${statusKey} .form-status-info`);
  inputStatus[statusKey] = passwordValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputPasswordContainer,spanStatusPassword,formButton);
  if (inputStatus.passwordVerify !== -1) onPasswordVerifyFocusOut();
}

// 비밀번호 확인 input 태그 focusout 이벤트
function onPasswordVerifyFocusOut(e) {
  const statusKey = 'passwordVerify';
  const inputPasswordVerifyContainer = document.querySelector(`#${statusKey} .form-input-container`);
  const spanStatusPasswordVerify = document.querySelector(`#${statusKey} .form-status-info`);
  inputStatus[statusKey] = passwordMatchValidator(inputPassword.value,inputPasswordVerify.value);
  onFocusOut(inputStatus,statusKey,inputPasswordVerifyContainer,spanStatusPasswordVerify,formButton);
}

function onPasswordIconClick(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

function onPasswordVerifyIconClick(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPasswordVerify.type = 'password';
  else inputPasswordVerify.type = 'text';
}

function onSignupButtonClick(e) {
  e.preventDefault();
  location.href = 'login.html';
}

inputEmail.addEventListener('focusout', onEmailFocusOut);
inputNickname.addEventListener('focusout', onNicknameFocusOut);
inputPassword.addEventListener('focusout', onPasswordFocusOut);
inputPasswordVerify.addEventListener('focusout', onPasswordVerifyFocusOut);
imgPasswordVisible.addEventListener('click', onPasswordIconClick);
imgPasswordVerifyVisible.addEventListener('click', onPasswordVerifyIconClick);
formButton.addEventListener('click', onSignupButtonClick);
