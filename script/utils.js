// 상태 객체
const state = {
  emailValid: false,
  pwValid: false,
  passwordMatchValid: false,
  nickNameValid: false,
};

// 상태 업데이트
const setValidationState = (key, isValid) => {
  state[key] = isValid;
};

// 이메일 유효성 확인
const checkValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

// input 조건 확인 함수
export const validInput = {
  email: (input) => {
    const val = input.value.trim();
    if (!val) {
      setValidationState("emailValid", false);
      return { isValid: false, msg: "이메일을 입력해주세요." };
    }
    if (!checkValidEmail(val)) {
      setValidationState("emailValid", false);
      return { isValid: false, msg: "잘못된 이메일 형식입니다." };
    }
    setValidationState("emailValid", true);
    return { isValid: true, msg: "" };
  },

  pw: (input) => {
    const val = input.value;
    if (!val) {
      setValidationState("pwValid", false);
      return { isValid: false, msg: "비밀번호를 입력해주세요." };
    }
    if (val.length < 8) {
      setValidationState("pwValid", false);
      return { isValid: false, msg: "비밀번호를 8자 이상 입력해주세요." };
    }
    setValidationState("pwValid", true);
    return { isValid: true, msg: "" };
  },

  pwChk: (input, pwValue) => {
    const val = input.value;
    if (val.length < 8) {
      setValidationState("passwordMatchValid", false);
      return { isValid: false, msg: "비밀번호를 8자 이상 입력해주세요." };
    }
    if (val !== pwValue) {
      setValidationState("passwordMatchValid", false);
      return { isValid: false, msg: "비밀번호가 일치하지 않습니다." };
    }
    setValidationState("passwordMatchValid", true);
    return { isValid: true, msg: "" };
  },

  nickname: (input) => {
    const val = input.value.trim();
    if (!val) {
      setValidationState("nickNameValid", false);
      return { isValid: false, msg: "닉네임을 입력해주세요." };
    }
    setValidationState("nickNameValid", true);
    return { isValid: true, msg: "" };
  },
};

// UI 업데이트 함수
export const updateValidationUI = (inputEle, warningMsg, { isValid, msg }) => {
  inputEle.classList.toggle("input-error", !isValid);
  warningMsg.innerHTML = msg;
};

// 비밀번호 보기 토글
export const togglePasswordVisibility = (buttonEl, inputEl) => {
  const isActive = buttonEl.classList.toggle("on");
  inputEl.setAttribute("type", isActive ? "text" : "password");
  return isActive;
};

// 버튼 활성화 체크 함수
export const checkButtonActivation = (targetEle, pageChk) => {
  const keys =
    pageChk === "login" ? ["emailValid", "pwValid"] : Object.keys(state);

  const isAllValid = keys.every((key) => state[key]);
  targetEle.disabled = !isAllValid;
};
