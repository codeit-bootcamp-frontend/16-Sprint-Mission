// 에러 메세지 생성 함수
const formEl = document.querySelector(".member-box__form");

const VALIDATION_RULE = {
  nickname: {
    noValue: {
      msg: "닉네임을 입력해주세요.",
    },
  },
  email: {
    noValue: {
      msg: "이메일을 입력해주세요.",
    },
    validation: {
      pattern:
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
      msg: "잘못된 이메일 형식입니다.",
    },
  },
  password: {
    noValue: {
      msg: "비밀번호를 입력해주세요.",
    },
    validation: {
      pattern: /^[0-9a-zA-Z]{8}/,
      msg: "비밀번호를 8자 이상 입력해주세요.",
    },
  },
  passwordConfirm: {
    noValue: {
      msg: "비밀번호를 입력해주세요.",
    },
    validation: {
      msg: "비밀번호가 일치하지 않습니다.",
    },
  },
};

// 에러 메세지 생성
function createErrorMsg(text, inputBox) {
  // 에러 메세지 중복 생성 방지
  if (inputBox.querySelector(".error-msg")) return;

  const msg = document.createElement("p");
  msg.textContent = text;
  msg.classList.add("error-msg");
  inputBox.classList.add("isError");
  inputBox.append(msg);
}

// input에 값 입력시 isError / isPass 초기화
function changeInputReset(e) {
  const inputBox = e.target.closest(".form__input-box");

  if (inputBox.classList.contains("isError")) {
    inputBox.classList.remove("isError");
    inputBox.querySelector(".error-msg").remove();
  }

  if (inputBox.classList.contains("isPass")) {
    inputBox.classList.remove("isPass");
  }
}

// 페이지내의 전체 input validation 통과했는지 확인
function checkAllPass() {
  const inputs = document.querySelectorAll(".member-box__form .input");
  const submitBtn = document.querySelector(
    ".member-box__form .form__submitBtn"
  );
  const isAllPass = Array.from(inputs).every((input) =>
    input.closest(".form__input-box").classList.contains("isPass")
  );

  submitBtn.disabled = !isAllPass;
}

// 항목별 validation 검사 :: 닉네임
function checkValidationNickname(value) {
  if (value.length) return true;
  return false;
}

// 항목별 validation 검사 :: 이메일
function checkValidationEmail(value) {
  return VALIDATION_RULE.email.validation.pattern.test(value);
}

// 항목별 validation 검사 :: 패스워드
function checkValidationPassword(value) {
  return VALIDATION_RULE.password.validation.pattern.test(value);
}

// 항목별 validation 검사 :: 패스워드 확인
function checkValidationPasswordConfirm(value) {
  const password = document.querySelector("#password");
  return password.value === value;
}

// validation 검사
function checkValidation({ target }) {
  if (!target.classList.contains("input")) return;
  const targetValue = target.value;
  const targetId = target.id;
  const inputBox = target.closest(".form__input-box");
  let isValidation;

  // 값이 없는지 확인
  if (!target.value.length) {
    // 값이 없으면,
    createErrorMsg(VALIDATION_RULE[targetId].noValue.msg, inputBox);
    checkAllPass();
    return;
  }

  // 항목별 validation 검사
  switch (targetId) {
    case "nickname":
      isValidation = checkValidationNickname(targetValue);
      break;
    case "email":
      isValidation = checkValidationEmail(targetValue);
      break;
    case "password":
      isValidation = checkValidationPassword(targetValue);
      break;
    case "passwordConfirm":
      isValidation = checkValidationPasswordConfirm(targetValue);
      break;
  }

  if (!isValidation) {
    // 항목별 validation 실패시
    createErrorMsg(VALIDATION_RULE[targetId].validation.msg, inputBox);
  } else {
    // 항목별 validation 통과시
    inputBox.classList.add("isPass");
  }
  checkAllPass();
}

function togglePassword(e) {
  if (!e.target.closest(".input-box__toggle")) return;
  const pwBox = e.target.closest(".input-box__input");
  const inputBox = pwBox.querySelector(".input");
  if (pwBox.classList.contains("pw_show")) {
    pwBox.classList.remove("pw_show");
    inputBox.setAttribute("type", "password");
  } else {
    pwBox.classList.add("pw_show");
    inputBox.setAttribute("type", "input");
  }
}

formEl.addEventListener("input", changeInputReset);
formEl.addEventListener("focusout", checkValidation);
formEl.addEventListener("click", togglePassword);
