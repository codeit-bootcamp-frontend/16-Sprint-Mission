//main.js

import { FormValidator } from '/src/js/components/FormValidator.js';
import { PasswordToggle } from '/src/js/components/PasswordToggle.js';

document.addEventListener('DOMContentLoaded', () => {
  // FormValidator 초기화
  document.querySelectorAll('.login__form, .signup__form').forEach((form) => {
    new FormValidator(form);
  });

  // PasswordToggle 초기화
  document.querySelectorAll('.form-field__toggle-password').forEach((btn) => {
    new PasswordToggle(btn);
    //console.log(btn);
  });
});
