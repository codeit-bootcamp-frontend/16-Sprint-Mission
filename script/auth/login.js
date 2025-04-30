"use strict";
import { validateEmail, validatePassword } from "../util/validators.js";
import { updateValidationUI } from "../util/updateValidationUI.js";
import togglePasswordVisible from "./togglePasswordVisible.js";

const form = document.querySelector("#loginForm");
const emailInput = document.querySelector("#userEmail");
const passwordInput = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");

// 상수 정의
const FORM_INPUT_IDS = {
  EMAIL: emailInput.id,
  PASSWORD: passwordInput.id,
};

// DOM과 유효성 검사기 연결
const inputValidatorMap = {
  [FORM_INPUT_IDS.EMAIL]: validateEmail,
  [FORM_INPUT_IDS.PASSWORD]: validatePassword,
};

const FORM_SUBMIT_BUTTON = loginBtn;

const REDIRECT_TARGET = "/items.html";

const PASSWORD_TOGGLE_BUTTONS = form.querySelectorAll(".btn-password-visible");

// 각 키의 유효성 검사값 초기화: [input.id, false]
const validatorKey = Object.keys(inputValidatorMap);
const validStateMap = new Map(validatorKey.map((id) => [id, false]));

// form에 유효성 검사 위임
function delegateFormValidation() {
  form.addEventListener("focusout", handleFormValidation);
}

// 유효성 검사 전, 검사 대상 필터
function handleFormValidation(e) {
  const input = e.target;
  if (!validatorKey.includes(input.id)) return;

  handleFormInputValidation(input);
}

// 유효성 검사
function handleFormInputValidation(input) {
  const validationFunc = inputValidatorMap[input.id];

  if (!validationFunc) return;

  const validationResult = validationFunc(input);
  updateValidationUI(input, validationResult);

  // 변경된 유효성 상태 업데이트
  validStateMap.set(input.id, validationResult.isValid);
  updateSubmitButtonState();
}

// 제출 버튼 상태 변경
function updateSubmitButtonState() {
  const isAllValid = [...validStateMap.values()].every(Boolean);
  FORM_SUBMIT_BUTTON.disabled = !isAllValid;
}

function navigateOnFormSuccess(e) {
  e.preventDefault();
  location.href = REDIRECT_TARGET;
}

function focusFirstInput() {
  const firstInput = form.querySelector(".form-input");
  if (!firstInput) return;
  firstInput.focus();
}

function init() {
  /* 폼 유효성 검사 */
  delegateFormValidation();

  /* 비밀번호 토글 */
  togglePasswordVisible(PASSWORD_TOGGLE_BUTTONS);

  /* 첫번째 input focus 처리 */
  focusFirstInput();

  /* 폼 제출 성공 시 페이지 이동 */
  FORM_SUBMIT_BUTTON.addEventListener("click", navigateOnFormSuccess);
}

window.addEventListener("DOMContentLoaded", init);
