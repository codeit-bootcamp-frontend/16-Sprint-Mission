import { getState, setState, inputEventHandler, onPasswordIconClick, onButtonClick } from './modules/EventHandler.js';

const formButton = document.querySelector('.form-btn');
const inputState = getState();

// 이벤트 일괄 등록
for (const stateKey in inputState) {
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  if(inputElement) {
    // inputValidState 초기화
    setState(stateKey, { isValid: null })

    // inputEventHandler 모듈 함수 할당
    inputElement.addEventListener('input', () => inputEventHandler(stateKey));
    inputElement.addEventListener('focusout', () => inputEventHandler(stateKey));
  }
  
  // 눈 모양 아이콘 모듈 함수 할당
  const togglePasswordIcon = document.querySelector(`#${stateKey} .form-icon-password`);
  if(togglePasswordIcon) togglePasswordIcon.addEventListener('click', (e) => onPasswordIconClick(e, stateKey));
}

formButton.addEventListener('click', onButtonClick);
