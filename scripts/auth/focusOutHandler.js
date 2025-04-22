import { inputContainerStyleSelector, inputStatusStyleSelector } from './modules/styleSelectors.js';
import inputStatusTextSelector from './modules/inputStatusTextSelector.js';

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