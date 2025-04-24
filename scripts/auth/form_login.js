import { InputEventHandler, inputValidState } from './modules/InputEventHandler.js';

const imgPasswordVisible = document.querySelector('.form-icon-password');
const formButton = document.querySelector('.form-btn');
const useValidState = ['email', 'password'];

// 비밀번호 눈 아이콘 클릭 이벤트
function onPasswordIconClick(e) {
  imgPasswordVisible.classList.toggle('inVisible');
  const inputPassword = document.querySelector(`#password .form-input`);
  if (imgPasswordVisible.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

// 로그인 버튼 클릭 이벤트
function onLoginButtonClick(e) {
  e.preventDefault();
  location.href = 'items.html';
}

// input focusout 이벤트 일괄 등록
for (const stateKey of useValidState) {
  // inputValidState 초기화
  inputValidState[stateKey].isValid = false;
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  // InputEventHandler 모듈 함수 할당
  inputElement.addEventListener('input', () => InputEventHandler(stateKey));
  inputElement.addEventListener('focusout', () => InputEventHandler(stateKey));
}

imgPasswordVisible.addEventListener('click', onPasswordIconClick);
formButton.addEventListener('click', onLoginButtonClick);
