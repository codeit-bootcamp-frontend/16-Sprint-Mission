import { inputContainerStyleSelector, inputStatusStyleSelector } from './selectorModules/styleSelectors.js';
import { inputStatusTextSelector } from './selectorModules/textSelectors.js';

export const inputStatus = {
  email: 1,
  nickname: 1,
  password: 1,
  passwordVerify: 1,
};

/**
 * onFocusOut: form의 input에서 focusout 이벤트 발생 시 관련 요소의 정보를 입력받아 이벤트를 처리하는 함수
 * @param {object} inputStatus form내부 모든 input 요소의 validators 반환값이 저장된 객체
 * @param {string} statusKey inputStatus 중 이벤트가 발생한 input 요소의 key
 * @param {element} formButton focusout 이벤트가 발생 되었을 때 활성화/비활성화를 적용할 form의 버튼
 * @returns 반환값 없음, 요소에 직접 스타일 및 텍스트 적용
 */
export function focusOutHandler(statusKey,formButton){
  const statusVal = inputStatus[statusKey];
  const inputContainerElement = document.querySelector(`#${statusKey} .form-input-container`);
  const spanStatusElement = document.querySelector(`#${statusKey} .form-status-info`);
  spanStatusElement.textContent = inputStatusTextSelector(statusVal, statusKey);
  inputContainerStyleSelector(statusVal, inputContainerElement);
  inputStatusStyleSelector(statusVal, spanStatusElement);
  checkValidateInputs(formButton,inputStatus);
}

function checkValidateInputs(Button, inputStatus){
  Button.disabled = !Object.values(inputStatus).every((v) => v === 1);
}