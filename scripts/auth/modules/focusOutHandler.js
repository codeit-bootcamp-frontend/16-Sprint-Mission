import { inputContainerStyleSelector, inputStatusStyleSelector } from './selectorModules/styleSelectors.js';
import { inputStatusTextSelector } from './selectorModules/textSelectors.js';

/**
 * onFocusOut: form의 input에서 focusout 이벤트 발생 시 관련 요소의 정보를 입력받아 이벤트를 처리하는 함수
 * @param {object} inputStatus form내부 모든 input 요소의 validators 반환값이 저장된 객체
 * @param {string} statusKey inputStatus 중 이벤트가 발생한 input 요소의 key
 * @param {element} inputContainerElement focusout 이벤트가 발생된 요소의 input-container 요소
 * @param {element} spanStatusElement focusout 이벤트가 발생 되었을 때 메시지를 표시할 span 요소
 * @param {element} formButton focusout 이벤트가 발생 되었을 때 활성화/비활성화를 적용할 form의 버튼
 * @returns 반환값 없음, 요소에 직접 스타일 및 텍스트 적용
 */
export default function onFocusOut(inputStatus,statusKey,inputContainerElement, spanStatusElement,formButton){
  const val = inputStatus[statusKey];
  spanStatusElement.textContent = inputStatusTextSelector(val, statusKey);
  inputContainerStyleSelector(val, inputContainerElement);
  inputStatusStyleSelector(val, spanStatusElement);
  checkValidateInputs(formButton,inputStatus);
}

function checkValidateInputs(Button, statusObject){
  Button.disabled = !Object.values(statusObject).every((v) => v === 1);
}