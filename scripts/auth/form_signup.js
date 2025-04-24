import { InputEventHandler, inputValidState } from './modules/InputEventHandler.js';

const imgPasswordVisible = document.querySelector('#password .form-icon-password');
const imgPasswordVerifyVisible = document.querySelector('#passwordVerify .form-icon-password');

const formButton = document.querySelector('.form-btn');

//inputValidState에서 사용할 Key 선택
const useValidState = ['email', 'nickname', 'password', 'passwordVerify'];

// 비밀번호 눈 아이콘 클릭 이벤트
function onPasswordIconClick() {
  imgPasswordVisible.classList.toggle('inVisible');
  const inputPassword = document.querySelector(`#password .form-input`);
  if (imgPasswordVisible.classList.contains('inVisible')) inputPassword.type = 'password';
  else inputPassword.type = 'text';
}

// 비밀번호 확인 눈 아이콘 클릭 이벤트
function onPasswordVerifyIconClick() {
  imgPasswordVerifyVisible.classList.toggle('inVisible');
  const inputPasswordVerify = document.querySelector(`#passwordVerify .form-input`);
  if (imgPasswordVerifyVisible.classList.contains('inVisible')) inputPasswordVerify.type = 'password';
  else inputPasswordVerify.type = 'text';
}

// 회원가입 버튼 클릭 이벤트
function onSignupButtonClick(e) {
  e.preventDefault();
  location.href = 'login.html';
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
imgPasswordVerifyVisible.addEventListener('click', onPasswordVerifyIconClick);
formButton.addEventListener('click', onSignupButtonClick);
