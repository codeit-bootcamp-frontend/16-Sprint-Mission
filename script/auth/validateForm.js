"use strict";
import { updateValidationUI } from "../util/updateValidationUI.js";
import { validatePasswordCheck } from "../util/validators.js";

export default function validateForm({
  form,
  formButton,
  inputValidatorMap,
  onSubmitRedirectUrl,
}) {
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

    // 유효성 검사 UI 업데이트
    const validationResult = validationFunc(input);
    updateValidationUI(input, validationResult);

    // 유효성 상태 업데이트
    validStateMap.set(input.id, validationResult.isValid);
    updateSubmitButtonState();

    // 비밀번호, 비밀번호 확인 필드 유효성 검사 연동
    const inputPasswordCheck = document.querySelector("#userPasswordChk");
    if (inputPasswordCheck?.value) {
      const result = validatePasswordCheck(inputPasswordCheck);
      updateValidationUI(inputPasswordCheck, result);

      // 비밀번호 확인 필드 유효성 상태도 업데이트
      validStateMap.set(inputPasswordCheck.id, result.isValid);
    }
  }

  // 제출 버튼 상태 변경
  function updateSubmitButtonState() {
    const isAllValid = [...validStateMap.values()].every(Boolean);
    formButton.disabled = !isAllValid;
  }

  // 모두 유효할 경우, 폼 제출
  function handleSubmit(e) {
    e.preventDefault();
    location.href = onSubmitRedirectUrl;
  }

  function init() {
    delegateFormValidation();
    formButton.addEventListener("click", handleSubmit);
  }

  init();
}
