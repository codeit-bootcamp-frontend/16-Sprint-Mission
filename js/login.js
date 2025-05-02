import authFormUtils from "./utils/authFormUtils.js";

// DOM elements
const inputEmail = document.querySelector("#email");
const inputPw = document.querySelector("#password");
const detailEmail = document.querySelector(".email-detail");
const detailPw = document.querySelector(".password-detail");
const togglePw = document.querySelector(".toggle-visibility");
const loginBtn = document.querySelector(".login-btn");

// variables
const inputTags = document.querySelectorAll(".login-form input");
const verifiationList = (() => {
  const map = {};
  inputTags.forEach((el) => {
    map[el.id] = false;
  });

  return map;
})();

// function
const verifyInputs = () => {
  authFormUtils.verify(verifiationList)
    ? authFormUtils.enableBtn(loginBtn)
    : authFormUtils.disableBtn(loginBtn);
};

// initialize
/**
 * 뒤로 가기 등 페이지를 복구했을 때, 브라우저가 입력값을 복원하는 과정에서 요구사항의 focusout 이벤트가 발생하지 않음.
 * 따라서, pageshow 이벤트 발생 후 email 값이 있는 경우 (입력값이 복원된 경우) 강제로 focusout 이벤트 실행
 */
window.addEventListener("pageshow", () => {
  if (inputEmail.value) inputEmail.dispatchEvent(new Event("focusout"));
});

// events
inputEmail.addEventListener("focusout", (e) => {
  const isCorrect = authFormUtils.isCorrectEmail(e.target.value);

  if (!e.target.value) {
    authFormUtils.changeDetail(e, detailEmail, "이메일을 입력해주세요");
    verifiationList.email = false;
  } else if (!isCorrect) {
    authFormUtils.changeDetail(e, detailEmail, "잘못된 이메일 형식입니다.");
    verifiationList.email = false;
  } else {
    authFormUtils.changeDetail(e, detailEmail);
    verifiationList.email = true;
  }

  verifyInputs();
});

inputPw.addEventListener("focusout", (e) => {
  const isCorrect = authFormUtils.isCorrectPw(e.target.value);

  if (!e.target.value) {
    authFormUtils.changeDetail(e, detailPw, "비밀번호를 입력해주세요");
    verifiationList.password = false;
  } else if (!isCorrect) {
    authFormUtils.changeDetail(e, detailPw, "비밀번호를 8자 이상 입력해주세요");
    verifiationList.password = false;
  } else {
    authFormUtils.changeDetail(e, detailPw);
    verifiationList.password = true;
  }

  authFormUtils.verify(verifiationList)
    ? authFormUtils.enableBtn(loginBtn)
    : authFormUtils.disableBtn(loginBtn);

  verifyInputs();
});

togglePw.addEventListener("click", (e) => {
  if (inputPw.type === "password") {
    inputPw.type = "text";
    e.target.src = "../img/icon/btn_visibility_on_24px.png";
    e.target.alt = "비밀번호 표시 켜짐";
    e.target.setAttribute("aria-pressed", "true");
  } else {
    inputPw.type = "password";
    e.target.src = "../img/icon/btn_visibility_off_24px.png";
    e.target.alt = "비밀번호 표시 꺼짐";
    e.target.setAttribute("aria-pressed", "false");
  }
});
