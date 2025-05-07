// 에러 메세지 생성 함수
const formEl = document.querySelector(".member-box__form");
const submitBtn = document.querySelector(".member-box__form .form__submitBtn");

// 빈값일 때 메세지 지정
const EMPTY_MSG = {
  nickname: "닉네임을 입력해주세요.",
  email: "이메일을 입력해주세요.",
  password: "비밀번호를 입력해주세요.",
  passwordConfirm: "비밀번호를 입력해주세요.",
};

// validation 규칙
const VALIDATION_RULE = {
  nickname: {
    isValid: function (value) {
      return !!value.length;
    },
    failedMsg: null,
  },
  email: {
    isValid: function (value) {
      const PATTERN =
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
      return PATTERN.test(value);
    },
    failedMsg: "잘못된 이메일 형식입니다.",
  },
  password: {
    isValid: function (value) {
      const PATTERN = /^[0-9a-zA-Z]{8}/;
      return PATTERN.test(value);
    },
    failedMsg: "비밀번호를 8자 이상 입력해주세요.",
  },
  passwordConfirm: {
    isValid: function (value) {
      const password = document.querySelector("#password");
      return password.value === value;
    },
    failedMsg: "비밀번호가 일치하지 않습니다.",
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

// input에 값 입력시 isError / isValid 초기화
function changeInputReset(e) {
  const inputBox = e.target.closest(".form__input-box");

  if (inputBox.classList.contains("isError")) {
    inputBox.classList.remove("isError");
    inputBox.querySelector(".error-msg").remove();
  }

  if (inputBox.classList.contains("isValid")) {
    inputBox.classList.remove("isValid");
  }
}

// 페이지내의 전체 input validation 통과했는지 확인
function checkAllPass() {
  const inputs = document.querySelectorAll(".member-box__form .input");
  const isAllPass = Array.from(inputs).every((input) =>
    input.closest(".form__input-box").classList.contains("isValid")
  );

  submitBtn.disabled = !isAllPass;
}

// 빈값 검사
function checkEmpty(name, inputBox) {
  if (!EMPTY_MSG[name]) return; // EMPTY_MSG에 유효한 값이 있는지 확인

  createErrorMsg(EMPTY_MSG[name], inputBox);
}

// validation 검사
function checkValidation(value, name, inputBox) {
  if (!VALIDATION_RULE[name]) return; // VALIDATION_RULE에 유효한 값이 있는지 확인

  const isValid = VALIDATION_RULE[name].isValid(value); // isValid 검사

  if (!isValid) {
    // 항목별 validation 실패시
    createErrorMsg(VALIDATION_RULE[name].failedMsg, inputBox);
  } else {
    // 항목별 validation 통과시
    inputBox.classList.add("isValid");
  }
}

// focusout 핸들링 함수
function handleFocusOut({ target }) {
  if (!target.classList.contains("input")) return;
  const { value, name } = target;
  const inputBox = target.closest(".form__input-box");

  if (!value.length) {
    // 값이 없으면,
    checkEmpty(name, inputBox);
  } else {
    // 값이 있으면,
    checkValidation(value, name, inputBox);
  }

  // 전체 input 유효성 통과헀는지 검사
  checkAllPass();
}

function togglePassword(e) {
  if (!e.target.closest(".input-box__toggle")) return;
  const pwBox = e.target.closest(".input-box__input");
  const inputBox = pwBox.querySelector(".input");
  const isShow = pwBox.classList.contains("pw_show");
  pwBox.classList.toggle("pw_show");
  inputBox.setAttribute("type", isShow ? "password" : "text");
}

function movePage(e) {
  location.href = e.target.dataset.moveLink;
}

formEl.addEventListener("input", changeInputReset);
formEl.addEventListener("focusout", handleFocusOut);
formEl.addEventListener("click", togglePassword);
submitBtn.addEventListener("click", movePage);
