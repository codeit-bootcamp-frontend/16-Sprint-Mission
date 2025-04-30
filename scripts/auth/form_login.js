import { validators } from './modules/validators.js';
import { formEventHandler } from './modules/formEventHandler.js';

const form = document.querySelector('#form-login');
const buttonElement = form.querySelector('.form-btn');

const fieldMap = {
  email: validators.email,
  password: validators.password,
};

const onButtonRedirectUrl = 'items.html';
const formInfoObject = {
  form,
  buttonElement,
  fieldMap,
  onButtonRedirectUrl,
};

formEventHandler(formInfoObject);
