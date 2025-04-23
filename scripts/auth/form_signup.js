import { emailValidator, nicknameValidator, passwordValidator, passwordMatchValidator } from './modules/validators.js';
import { focusOutHandler, inputStatus } from './modules/focusOutHandler.js'

const inputEmail = document.querySelector('#email .form-input');
const inputNickname = document.querySelector('#nickname .form-input');
const inputPassword = document.querySelector('#password .form-input');
const inputPasswordVerify = document.querySelector('#passwordVerify .form-input');

const imgPasswordVisible = document.querySelector('#password .form-icon-password');
const imgPasswordVerifyVisible = document.querySelector('#passwordVerify .form-icon-password');

const formButton = document.querySelector('.form-btn');

// inputStatus 초기화
inputStatus.email = -1;
inputStatus.nickname = -1;
inputStatus.password = -1;
inputStatus.passwordVerify = -1;

// 이메일 input 태그 focusout 이벤트
function onEmailFocusOut(e) {
  const statusKey = 'email';
  inputStatus[statusKey] = emailValidator(inputEmail.value);
  focusOutHandler(statusKey,formButton);
}

// 닉네임 input 태그 focusout 이벤트
function onNicknameFocusOut(e) {
  const statusKey = 'nickname';
  inputStatus[statusKey] = nicknameValidator(inputNickname.value);
  focusOutHandler(statusKey,formButton);
}

// 비밀번호 input 태그 focusout 이벤트
function onPasswordFocusOut(e) {
  const statusKey = 'password';
  inputStatus[statusKey] = passwordValidator(inputPassword.value);
  focusOutHandler(statusKey,formButton);
  if (inputStatus.passwordVerify !== -1) onPasswordVerifyFocusOut();
}

// 비밀번호 확인 input 태그 focusout 이벤트
function onPasswordVerifyFocusOut(e) {
  const statusKey = 'passwordVerify';
  inputStatus[statusKey] = passwordMatchValidator(inputPassword.value,inputPasswordVerify.value);
  focusOutHandler(statusKey,formButton);
}

// 비밀번호 눈 아이콘 클릭 이벤트
function onPasswordIconClick(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

// 비밀번호 확인 눈 아이콘 클릭 이벤트
function onPasswordVerifyIconClick(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPasswordVerify.type = 'password';
  else inputPasswordVerify.type = 'text';
}

// 회원가입 버튼 클릭 이벤트
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
