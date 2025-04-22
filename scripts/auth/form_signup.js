import {
  emailValidator,
  nicknameValidator,
  passwordValidator,
  passwordMatchValidator,
} from './modules/validator.js';
import inputContainerStyleSelector from './modules/inputContainerStyleSelector.js';
import inputInfoTextSelector from './modules/inputInfoTextSelector.js';

const inputEmail = document.querySelector('#e-mail .form-input');
const inputEmailContainer = document.querySelector(
  '#e-mail .form-input-container'
);
const spanEmail = document.querySelector('#e-mail .form-input-info');

const inputNickname = document.querySelector('#nickname .form-input');
const inputNicknameContainer = document.querySelector(
  '#nickname .form-input-container'
);
const spanNickname = document.querySelector('#nickname .form-input-info');

const inputPassword = document.querySelector('#password .form-input');
const inputPasswordContainer = document.querySelector(
  '#password .form-input-container'
);
const spanPassword = document.querySelector('#password .form-input-info');

const inputVerifyPassword = document.querySelector(
  '#verify_password .form-input'
);
const inputVerifyPasswordContainer = document.querySelector(
  '#verify_password .form-input-container'
);
const spanVerifyPassword = document.querySelector(
  '#verify_password .form-input-info'
);

const imgPasswordVisible = document.querySelector(
  '#password .form-icon-password'
);
const imgVerifyPasswordVisible = document.querySelector(
  '#verify_password .form-icon-password'
);

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
  inputContainerStyleSelector(val, inputEmailContainer);
  spanEmail.textContent = inputInfoTextSelector(val, 'e-mail');
  if (val === 1) spanEmail.classList.add('inVisible');
  else if (val <= 0) spanEmail.classList.remove('inVisible');
  checkValidateInputs();
}

function onNicknameFocusOut(e) {
  inputStatus.nickname = nicknameValidator(e.target.value);
  const val = inputStatus.nickname;
  inputContainerStyleSelector(val, inputNicknameContainer);
  spanNickname.textContent = inputInfoTextSelector(val, 'nickname');
  if (val === 1) spanNickname.classList.add('inVisible');
  else if (val <= 0) spanNickname.classList.remove('inVisible');
  checkValidateInputs();
}

function onPasswordFocusOut(e) {
  inputStatus.password = passwordValidator(e.target.value);
  const val = inputStatus.password;
  inputContainerStyleSelector(val, inputPasswordContainer);
  spanPassword.textContent = inputInfoTextSelector(val, 'password');
  if (val === 1) spanPassword.classList.add('inVisible');
  else if (val <= 0) spanPassword.classList.remove('inVisible');
  checkValidateInputs();
}

function onVerifyPasswordFocusOut(e) {
  inputStatus.passwordVerify = passwordMatchValidator(
    inputPassword.value,
    e.target.value
  );
  const val = inputStatus.passwordVerify;
  inputContainerStyleSelector(val, inputVerifyPasswordContainer);
  spanVerifyPassword.textContent = inputInfoTextSelector(
    val,
    'password_verify'
  );
  if (val === 1) spanVerifyPassword.classList.add('inVisible');
  else if (val <= 0) spanVerifyPassword.classList.remove('inVisible');
  checkValidateInputs();
}

function checkValidateInputs() {
  const isValidateInputs = Object.values(inputStatus).every((v) => v === 1);
  if (isValidateInputs) {
    formButton.disabled = false;
  } else {
    formButton.disabled = true;
  }
}

function onPasswordIcon(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

function onVerifyPasswordIcon(e) {
  e.target.classList.toggle('inVisible');
  if (e.target.classList.contains('inVisible'))
    inputVerifyPassword.type = 'password';
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
