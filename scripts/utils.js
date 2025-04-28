import { validators } from "./validators.js";

/**
 *  toggle password
 */
export const togglePasswordVisibility = (button) => {
  const targetId = button.getAttribute("data-target");
  const passwordInput = document.getElementById(targetId);

  if (!passwordInput) return;

  const img = button.querySelector("img");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    img.src = "/images/btn_visibility_on_24px.png";
    img.alt = "비밀번호 보이는 중";
  } else {
    passwordInput.type = "password";
    img.src = "/images/btn_none_visibility_on_24px.png";
    img.alt = "비밀번호 숨겨진 상태";
  }
};
/*
 *  Set InputIdsObj
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
 *  Validate User Input
 */
export const validateInputs = (inputEl, inputIdsObjs) => {
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
export const checkAllInputsValid = (inputIdsObjs, submitBtn) => {
  const allValid = Object.values(inputIdsObjs).every((obj) => obj.isValid);
  submitBtn.disabled = !allValid;
};
