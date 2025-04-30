"use strict";
import {
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  validateNickname,
} from "../util/validators.js";
import { updateValidationUI } from "../util/updateValidationUI.js";
import togglePasswordVisible from "./togglePasswordVisible.js";

const form = document.querySelector("#signupForm");
const emailInput = document.querySelector("#userEmail");
const nicknameInput = document.querySelector("#userNickname");
const passwordInput = document.querySelector("#userPassword");
const passwordCheckInput = document.querySelector("#userPasswordChk");
const signupBtn = document.querySelector("#signupBtn");

// 상수 정의
const FORM_INPUT_IDS = {
  EMAIL: emailInput.id,
  PASSWORD: passwordInput.id,
  PASSWORD_CHECK: passwordCheckInput.id,
  NICKNAME: nicknameInput.id,
};

// DOM과 유효성 검사기 연결
const inputValidatorMap = {
  [FORM_INPUT_IDS.EMAIL]: validateEmail,
  [FORM_INPUT_IDS.PASSWORD]: validatePassword,
  [FORM_INPUT_IDS.PASSWORD_CHECK]: validatePasswordMatch,
  [FORM_INPUT_IDS.NICKNAME]: validateNickname,
};

const FORM_SUBMIT_BUTTON = signupBtn;

const REDIRECT_TARGET = "/login.html";

const PASSWORD_TOGGLE_BUTTONS = form.querySelectorAll(".btn-password-visible");

// 각 키의 유효성 검사값 초기화: [input.id, false]
const validatorKey = Object.keys(inputValidatorMap);
const validStateMap = new Map(validatorKey.map((id) => [id, false]));

// 비밀번호 확인 유효성 검사 (비밀번호, 비밀번호 확인 value 연동)
function validatePasswordMatch(input) {
  return validatePasswordCheck(passwordInput, input);
}

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
  form.querySelector(".form-input").focus();
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
