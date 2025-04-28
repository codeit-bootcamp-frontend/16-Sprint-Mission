import {
  deleteState,
  getState,
  setValidation,
} from './modules/EventHandler.js';

const formButton = document.querySelector('.form-btn');

const inputEventHandler = (stateKey) => {
  const inputValidState = getState();
  setValidation(stateKey);
  if (
    stateKey === 'password' &&
    !!inputValidState['passwordVerify'] &&
    inputValidState['passwordVerify'].isValid !== null
  )
    inputEventHandler('passwordVerify');
  updateUIByState(stateKey);
  setButtonState();
};

const onPasswordIconClick = (e, stateKey) => {
  e.target.classList.toggle('inVisible');
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  if (e.target.classList.contains('inVisible')) inputElement.type = 'password';
  else inputElement.type = 'text';
};

/**
 * 버튼 클릭 이벤트 지정 함수
 */
const onButtonClick = (e) => {
  const formType = document.querySelector('.form-container').dataset.mode;
  if (formType === 'login') {
    e.preventDefault();
    location.href = 'items.html';
  } else if (formType === 'signup') {
    e.preventDefault();
    location.href = 'login.html';
  }
};

const updateUIByState = (stateKey) => {
  const inputValidState = getState();
  //prettier-ignore
  const inputContainerElement = document.querySelector(`#${stateKey} .form-input-container`);
  //prettier-ignore
  const spanStateElement = document.querySelector(`#${stateKey} .form-status-info`);
  if (inputValidState[stateKey].isValid) {
    inputContainerElement.classList.add('valid');
    inputContainerElement.classList.remove('inValid');
    spanStateElement.classList.add('inVisible');
  } else {
    inputContainerElement.classList.add('inValid');
    inputContainerElement.classList.remove('valid');
    spanStateElement.classList.remove('inVisible');
  }
  spanStateElement.textContent = inputValidState[stateKey].message;
};

const setButtonState = () => {
  const inputValidState = getState();
  const formButton = document.querySelector('.form-btn');
  formButton.disabled = !Object.values(inputValidState).every((v) => v.isValid);
};

// 이벤트 일괄 등록
for (const stateKey in getState()) {
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  if (inputElement) {
    // inputEventHandler 모듈 함수 할당
    //prettier-ignore
    inputElement.addEventListener('input', () => inputEventHandler(stateKey));
    //prettier-ignore
    inputElement.addEventListener('focusout', () => inputEventHandler(stateKey));
  } else {
    deleteState(stateKey);
  }

  // 눈 모양 아이콘 모듈 함수 할당
  //prettier-ignore
  const passwordIcon = document.querySelector(`#${stateKey} .form-icon-password`);
  if (passwordIcon)
    //prettier-ignore
    passwordIcon.addEventListener('click', (e) => onPasswordIconClick(e, stateKey));
}

formButton.addEventListener('click', onButtonClick);
