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

  // 폼 필드에 이벤트 리스너 등록
  function attachFieldsValidation() {
    const targetFields = validatorKey.map((key) =>
      form.querySelector(`#${key}`)
    );

    targetFields.forEach((field) => {
      field.addEventListener("focusout", handleFieldValidation);
    });
  }

  // 폼 필드 유효성 검사
  function handleFieldValidation(e) {
    const input = e.target;
    const validationFunc = inputValidatorMap[input.id];
    if (!validationFunc) return;

    // 유효성 검사 UI 업데이트
    const validationResult = validationFunc(input);
    updateValidationUI(input, validationResult);

    // 유효성 상태 업데이트
    validStateMap.set(input.id, validationResult.isValid);
    updateSubmitButtonState();

    // 비밀번호, 비밀번호 확인 필드 유효성 검사 연동
    if (e.target.id !== "userPassword") return;
    const inputPasswordCheck = form.querySelector("#userPasswordChk");

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
    attachFieldsValidation();
    formButton.addEventListener("click", handleSubmit);
  }

  init();
}
