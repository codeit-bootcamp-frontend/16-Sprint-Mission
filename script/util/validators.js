"use strict";

function setInvalid(input, message) {
  const inputHintEl = input
    .closest(".form-control")
    .querySelector(".form-input-hint");
  input.classList.add("invalid");
  inputHintEl.textContent = message;
}

function clearInvalid(input) {
  const inputHintEl = input
    .closest(".form-control")
    .querySelector(".form-input-hint");
  input.classList.remove("invalid");
  inputHintEl.textContent = "";
}

const validators = {
  userEmail: function (input) {
    if (input.value.trim().length === 0) {
      setInvalid(input, "이메일을 입력해주세요.");
      return false;
    } else if (!input.checkValidity()) {
      setInvalid(input, "잘못된 이메일 형식입니다.");
      return false;
    } else {
      clearInvalid(input);
      return true;
    }
  },
  userNickname: function (input) {
    if (input.value.trim().length === 0) {
      setInvalid(input, "닉네임을 입력해주세요.");
      return false;
    } else {
      clearInvalid(input);
      return true;
    }
  },
  userPassword: function (input) {
    if (input.value.trim().length === 0) {
      setInvalid(input, "비밀번호를 입력해주세요.");
      return false;
    } else if (input.value.trim().length < 8) {
      setInvalid(input, "비밀번호를 8자 이상 입력해주세요.");
      return false;
    } else {
      clearInvalid(input);
      return true;
    }
  },
  userPasswordChk: function (pwChkInput, pwInput) {
    if (pwInput.value !== pwChkInput.value) {
      setInvalid(pwChkInput, "비밀번호가 일치하지 않습니다.");
      return false;
    } else {
      clearInvalid(pwChkInput);
      return true;
    }
  },
};

function validateInput(input, chkInput) {
  const inputId = input.id;
  return validators[inputId](input, chkInput);
}

export { validateInput };
