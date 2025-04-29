import { validators } from './validation.js';

// 상태
const formState = {};

// UI 조작
function updateFieldUI(target, { isValid, message }) {
  if (isValid) {
    target.classList.remove('error');
    target.parentElement.nextElementSibling.innerHTML = '';
  } else {
    target.classList.add('error');
    target.parentElement.nextElementSibling.innerHTML = message;
  }
}

// 폼 제출 버튼 상태 업데이트
const updateSubmitButton = (button) => {
  const isFormValid = Object.values(formState).every((field) => field.isValid);
  if (isFormValid) {
    button.classList.remove('disabled');
    if (button.getAttribute('id') === 'login-btn') {
      button.setAttribute('onclick', "location.href='/items.html'");
    } else {
      button.setAttribute('onclick', "location.href='/login.html'");
    }
  } else {
    button.classList.add('disabled');
    button.setAttribute('onclick', '');
  }
};

// 비밀번호 노출 조작
function updatePasswordImg(e) {
  const pw = e.target.previousElementSibling;
  const pwImg = e.target;

  if (pw.getAttribute('type') === 'password') {
    pw.setAttribute('type', 'text');
    pwImg.setAttribute('src', 'images/Icon_pwopen.png');
  } else {
    pw.setAttribute('type', 'password');
    pwImg.setAttribute('src', 'images/Icon_pwclose.png');
  }
}

// 이벤트 핸들러
const handleInputChange = (e) => {
  const { name, value } = e.target;
  const validation = validators[name](value);

  // 상태 업데이트
  formState[name] = validation;

  // UI 업데이트
  updateFieldUI(e.target, validation);
  updateSubmitButton(document.querySelector('.long-btn.login'));
};

// 이벤트 리스너 등록
document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('blur', handleInputChange);
});
document.querySelectorAll('.img-password').forEach((img) => {
  img.addEventListener('click', updatePasswordImg);
});
