import { InputEventHandler, inputValidState, onPasswordIconClick } from './modules/EventHandler.js';

const formButton = document.querySelector('.form-btn');

// 버튼 클릭 이벤트
const onButtonClick = (e) => {
  const formType = document.querySelector(".form-container").dataset.mode;
  if(formType==="login"){
    e.preventDefault();
    location.href = 'items.html';
  }else if(formType==="signup"){
    e.preventDefault();
    location.href = 'login.html';
  }
}

// 이벤트 일괄 등록
for (const stateKey in inputValidState) {
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  if(inputElement) {
    // inputValidState 초기화
    inputValidState[stateKey].isValid = false;

    // InputEventHandler 모듈 함수 할당
    inputElement.addEventListener('input', () => InputEventHandler(stateKey));
    inputElement.addEventListener('focusout', () => InputEventHandler(stateKey));
  }
  
  // 눈 모양 아이콘 모듈 함수 할당
  const togglePasswordIcon = document.querySelector(`#${stateKey} .form-icon-password`);
  if(togglePasswordIcon) togglePasswordIcon.addEventListener('click', (e) => onPasswordIconClick(e, stateKey));
}

formButton.addEventListener('click', onButtonClick);
