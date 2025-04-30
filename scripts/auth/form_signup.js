import { validators } from './modules/validators.js';
import { formEventHandler } from './modules/formEventHandler.js';

const form = document.querySelector('#form-signup');
const buttonElement = form.querySelector('.form-btn');

const fieldMap = {
  email: validators.email,
  nickname: validators.nickname,
  password: validators.password,
  passwordVerify: (passwordVerifyText) => {
    const passwordText = form.querySelector('#password .form-input').value;
    return validators.passwordVerify(passwordVerifyText, passwordText);
  },
};

const onButtonRedirectUrl = 'login.html';

const formInfoObject = {
  form,
  buttonElement,
  fieldMap,
  onButtonRedirectUrl,
};

formEventHandler(formInfoObject);
