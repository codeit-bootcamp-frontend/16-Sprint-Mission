import { validators } from "./validators.js";
/* 
    Set InputIdsObj
*/
export const setInputIdsObj = () => {
  const inputIdsObj = {};
  const inputIds = document.querySelectorAll("input");
  for (let inputId of inputIds) {
    inputIdsObj[inputId.id] = { isValid: false, message: "" };
  }
  return inputIdsObj;
};
/* 
    Validate User Input
 */
export const validateInputs = (inputEl,inputIdsObjs) => {
  const { id, value } = inputEl;
  const { isValid, message } = validators[id](value);
  const errMsg = document.getElementById(`${id}-error`);
  inputIdsObjs[id].isValid = isValid ? true : false;
  errMsg.textContent = isValid ? "" : message;
  isValid
    ? inputEl.classList.remove("input-error")
    : inputEl.classList.add("input-error");
};

// 모든 입력값이 유효한지 확인하는 함수
export const checkAllInputsValid = (inputIdsObjs,submitBtn) => {
  const allValid = Object.values(inputIdsObjs).every(obj => obj.isValid);
  submitBtn.disabled = !allValid; 
};