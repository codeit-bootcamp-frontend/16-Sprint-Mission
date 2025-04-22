import { emailValidator, nicknameValidator, passwordValidator, passwordMatchValidator } from './modules/validators.js';
import { inputContainerStyleSelector, inputStatusStyleSelector } from './modules/styleSelectors.js';
import inputStatusTextSelector from './modules/inputStatusTextSelector.js';

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

function onEmailFocusOut(e) {
  inputStatus.email = emailValidator(e.target.value);
  const val = inputStatus.email;
  spanStatusEmail.textContent = inputStatusTextSelector(val, 'e-mail');
  inputContainerStyleSelector(val, inputEmailContainer);
  inputStatusStyleSelector(val,spanStatusEmail);
  checkValidateInputs();
}

function onNicknameFocusOut(e) {
  inputStatus.nickname = nicknameValidator(e.target.value);
  const val = inputStatus.nickname;
  spanStatusNickname.textContent = inputStatusTextSelector(val, 'nickname');
  inputContainerStyleSelector(val, inputNicknameContainer);
  inputStatusStyleSelector(val,spanStatusNickname);
  checkValidateInputs();
}

function onPasswordFocusOut(e) {
  inputStatus.password = passwordValidator(e.target.value);
  const val = inputStatus.password;
  spanStatusPassword.textContent = inputStatusTextSelector(val, 'password');
  inputContainerStyleSelector(val, inputPasswordContainer);
  inputStatusStyleSelector(val,spanStatusPassword);
  checkValidateInputs();
}

function onVerifyPasswordFocusOut(e) {
  inputStatus.passwordVerify = passwordMatchValidator(inputPassword.value,e.target.value);
  const val = inputStatus.passwordVerify;
  spanStatusVerifyPassword.textContent = inputStatusTextSelector(val,'password_verify');
  inputContainerStyleSelector(val, inputVerifyPasswordContainer);
  inputStatusStyleSelector(val,spanStatusVerifyPassword);
  checkValidateInputs();
}

function checkValidateInputs() {
  formButton.disabled = !Object.values(inputStatus).every((v) => v === 1);
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
