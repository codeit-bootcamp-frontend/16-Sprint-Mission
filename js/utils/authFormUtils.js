import { MIN_PW_LEN } from "../constant/constant.js";

export const isCorrectEmail = (str) => {
  const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(str);
};

export const isCorrectNickname = (str) => {
  return true;
};

export const isCorrectPw = (pw) => {
  return MIN_PW_LEN <= pw.length;
};

export const changeDetail = (event, detailElement, text = "") => {
  const action = text ? "add" : "remove";
  const action2 = !text ? "add" : "remove";
  event.target.classList[action]("incorrect-input");
  event.target.classList[action2]("correct-input");
  detailElement.textContent = text;
  text
    ? detailElement.classList.remove("hidden")
    : detailElement.classList.add("hidden");
};

export const verify = (verifiationList) => {
  const verifiations = Object.values(verifiationList);
  return verifiations.includes(false) ? false : true;
};

export const disableBtn = (btnElement) => {
  btnElement.disabled = true;
};

export const enableBtn = (btnElement) => {
  btnElement.disabled = false;
};

const authFormUtils = {
  isCorrectEmail,
  isCorrectNickname,
  isCorrectPw,
  changeDetail,
  verify,
  disableBtn,
  enableBtn,
};
export default authFormUtils;
