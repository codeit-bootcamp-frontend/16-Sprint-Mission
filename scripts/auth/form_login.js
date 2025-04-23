import { emailValidator, passwordValidator } from './modules/validators.js';
import { focusOutHandler, inputStatus } from './modules/focusOutHandler.js'

const inputEmail = document.querySelector('#email .form-input');
const inputPassword = document.querySelector('#password .form-input');

const imgPasswordVisible = document.querySelector('.form-icon-password');

const formButton = document.querySelector('.form-btn');

//inputStatus 초기화
inputStatus.email = -1;
inputStatus.password = -1;

// 이메일 input 태그 focusout 이벤트
function onEmailFocusOut(e) {
  const statusKey = 'email';
  inputStatus[statusKey] = emailValidator(inputEmail.value);
  focusOutHandler(statusKey,formButton);
}

// 비밀번호 input 태그 focusout 이벤트
function onPasswordFocusOut(e) {
  const statusKey = 'password';
  inputStatus[statusKey] = passwordValidator(inputPassword.value);
  focusOutHandler(statusKey,formButton);
}

function onPasswordIconClick(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

function onLoginButtonClick(e) {
  e.preventDefault();
  location.href = 'items.html';
}

inputEmail.addEventListener('focusout', onEmailFocusOut);
inputPassword.addEventListener('focusout', onPasswordFocusOut);
imgPasswordVisible.addEventListener('click', onPasswordIconClick);

formButton.addEventListener('click', onLoginButtonClick);
