import { InputEventHandler, inputValidState, onPasswordIconClick } from './modules/EventHandler.js';

const formButton = document.querySelector('.form-btn');
const useValidState = ['email', 'password'];

// 로그인 버튼 클릭 이벤트
const onLoginButtonClick = (e) => {
  e.preventDefault();
  location.href = 'items.html';
}

// 이벤트 일괄 등록
for (const stateKey of useValidState) {
  // inputValidState 초기화
  inputValidState[stateKey].isValid = false;
  const inputElement = document.querySelector(`#${stateKey} .form-input`);

  // InputEventHandler 모듈 함수 할당
  inputElement.addEventListener('input', () => InputEventHandler(stateKey));
  inputElement.addEventListener('focusout', () => InputEventHandler(stateKey));
  
  // 눈 모양 아이콘 모듈 함수 할당
  const togglePasswordIcon = document.querySelector(`#${stateKey} .form-icon-password`);
  if(togglePasswordIcon) togglePasswordIcon.addEventListener('click', (e) => onPasswordIconClick(e, stateKey));
}

formButton.addEventListener('click', onLoginButtonClick);
