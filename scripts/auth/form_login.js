import { emailValidator, passwordValidator } from './modules/validators.js';
import onFocusOut from './modules/focusOutHandler.js'

const inputEmail = document.querySelector('#e-mail .form-input');
const inputPassword = document.querySelector('#password .form-input');

const imgPasswordVisible = document.querySelector('.form-icon-password');

const formButton = document.querySelector('.form-btn');

const inputStatus = {
  email: 0,
  password: 0,
};

// 이메일 input 태그 focusout 이벤트
function onEmailFocusOut(e) {
  const statusKey = 'email';
  const inputEmailContainer = document.querySelector('#e-mail .form-input-container');
  const spanStatusEmail = document.querySelector('#e-mail .form-status-info');
  inputStatus[statusKey] = emailValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputEmailContainer,spanStatusEmail,formButton);
}

// 비밀번호 input 태그 focusout 이벤트
function onPasswordFocusOut(e) {
  const statusKey = 'password';
  const inputPasswordContainer = document.querySelector('#password .form-input-container');
  const spanStatusPassword = document.querySelector('#password .form-status-info');
  inputStatus[statusKey] = passwordValidator(e.target.value);
  onFocusOut(inputStatus,statusKey,inputPasswordContainer,spanStatusPassword,formButton);
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
