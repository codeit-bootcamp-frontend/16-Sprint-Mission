import { emailValidator, passwordValidator } from './modules/validators.js';
import { inputContainerStyleSelector, inputStatusStyleSelector } from './modules/styleSelectors.js';
import inputStatusTextSelector from './modules/inputStatusTextSelector.js';

const inputEmail = document.querySelector('#e-mail .form-input');
const inputEmailContainer = document.querySelector('#e-mail .form-input-container');
const spanStatusEmail = document.querySelector('#e-mail .form-status-info');

const inputPassword = document.querySelector('#password .form-input');
const inputPasswordContainer = document.querySelector('#password .form-input-container');
const spanStatusPassword = document.querySelector('#password .form-status-info');

const imgPasswordVisible = document.querySelector('.form-icon-password');

const formButton = document.querySelector('.form-btn');

const inputStatus = {
  email: 0,
  password: 0,
};

function onEmailFocusOut(e) {
  inputStatus.email = emailValidator(e.target.value);
  const val = inputStatus.email;
  spanStatusEmail.textContent = inputStatusTextSelector(val, 'e-mail');
  inputContainerStyleSelector(val, inputEmailContainer);
  inputStatusStyleSelector(val,spanStatusEmail);
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
