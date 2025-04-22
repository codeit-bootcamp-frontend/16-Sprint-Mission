import { emailValidator, passwordValidator } from './modules/validator.js';
import inputContainerStyleSelector from './modules/inputContainerStyleSelector.js';
import inputInfoTextSelector from './modules/inputInfoTextSelector.js';

const inputEmail = document.querySelector('#e-mail .form-input');
const inputEmailContainer = document.querySelector('#e-mail .form-input-container');
const spanEmail = document.querySelector('#e-mail .form-input-info');

const inputPassword = document.querySelector('#password .form-input');
const inputPasswordContainer = document.querySelector('#password .form-input-container');
const spanPassword = document.querySelector('#password .form-input-info');

const imgPasswordVisible = document.querySelector('.form-icon-password');

const formButton = document.querySelector('.form-btn');

const inputStatus = {
  email: 0,
  password: 0,
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

function onPasswordFocusOut(e) {
  inputStatus.password = passwordValidator(e.target.value);
  const val = inputStatus.password;
  inputContainerStyleSelector(val, inputPasswordContainer);
  spanPassword.textContent = inputInfoTextSelector(val, 'password');
  if (val === 1) spanPassword.classList.add('inVisible');
  else if (val <= 0) spanPassword.classList.remove('inVisible');
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

function onLoginButton(e) {
  e.preventDefault();
  location.href = 'items.html';
}

inputEmail.addEventListener('focusout', onEmailFocusOut);
inputPassword.addEventListener('focusout', onPasswordFocusOut);
imgPasswordVisible.addEventListener('click', onPasswordIcon);

formButton.addEventListener('click', onLoginButton);
