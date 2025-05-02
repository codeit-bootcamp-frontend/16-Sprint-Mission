//main.js
//todo: formValidator를 import 하여 login, signup form에 이벤트 연결
import { FormValidator } from '/src/js/components/FormValidatorClass.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('.login__form');
  if (loginForm) new FormValidator(loginForm);

  const signupForm = document.querySelector('.signup__form');
  if (signupForm) new FormValidator(signupForm);
});
