import { ErrorCheck } from "./error.js"
const signUpButton = document.querySelector(".signup-button")
signUpButton.disabled = true
signUpButton.style.backgroundColor = "#9CA3AF"
let emailOk = false
let nicknameOk = false
let passwordOk = false
let passwordCheckOk = false

// 이메일 검증부분 시작

const emailInput = document.querySelector("#email-field")
const nicknameLabel = document.querySelector('label[for="nickname"]')

const warningMessage1 = document.createElement("span")

nicknameLabel.parentNode.insertBefore(warningMessage1, nicknameLabel)

emailInput.addEventListener("focusout", (e) => {
  const result = ErrorCheck("email", e.target.value)
  console.log("passwordInput result : ", result)

  if (result.error) {
    warningMessage1.style.color = result.messageStyle.color
    warningMessage1.style.fontSize = result.messageStyle.fontSize
    warningMessage1.style.marginTop = result.messageStyle.marginTop
    warningMessage1.style.display = result.messageStyle.display
    emailInput.style.border = result.inputBorder
    emailInput.style.marginBottom = 0
    warningMessage1.textContent = result.message
    emailOk = false
    signUpButton.disabled = true
    signUpButton.style.backgroundColor = "#9CA3AF"
  } else {
    warningMessage1.style.color = result.messageStyle.color
    warningMessage1.style.fontSize = result.messageStyle.fontSize
    warningMessage1.style.marginTop = result.messageStyle.marginTop
    warningMessage1.style.display = result.messageStyle.display
    emailInput.style.border = result.inputBorder
    warningMessage1.textContent = result.message
    emailOk = true

    if (emailOk && nicknameOk && passwordOk && passwordCheckOk) {
      signUpButton.disabled = false
      signUpButton.style.backgroundColor = "#3692FF"
    }
  }
})

// 이메일 검증부분 끝

// 닉네임 검증부분 시작

const nicknameInput = document.querySelector("#nickname-field")
const passwordLabel = document.querySelector('label[for="password"]')

const warningMessage2 = document.createElement("span")

passwordLabel.parentNode.insertBefore(warningMessage2, passwordLabel)

nicknameInput.addEventListener("focusout", (e) => {
  const result = ErrorCheck("nickname", e.target.value)
  console.log("passwordInput result : ", result)

  if (result.error) {
    warningMessage2.style.color = result.messageStyle.color
    warningMessage2.style.fontSize = result.messageStyle.fontSize
    warningMessage2.style.marginTop = result.messageStyle.marginTop
    warningMessage2.style.display = result.messageStyle.display
    nicknameInput.style.border = result.inputBorder
    nicknameInput.style.marginBottom = 0
    warningMessage2.textContent = result.message
    nicknameOk = false
    signUpButton.disabled = true
    signUpButton.style.backgroundColor = "#9CA3AF"
  } else {
    warningMessage2.style.color = result.messageStyle.color
    warningMessage2.style.fontSize = result.messageStyle.fontSize
    warningMessage2.style.marginTop = result.messageStyle.marginTop
    warningMessage2.style.display = result.messageStyle.display
    nicknameInput.style.border = result.inputBorder
    warningMessage2.textContent = result.message
    nicknameOk = true

    if (emailOk && nicknameOk && passwordOk && passwordCheckOk) {
      signUpButton.disabled = false
      signUpButton.style.backgroundColor = "#3692FF"
    }
  }
})

// 닉네임 검증부분 끝

// 비밀번호 검증부분 시작

const passwordFieldInput = document.querySelector("#password-field")
const passwordCheckLabel = document.querySelector("#password-check")

const warningMessage3 = document.createElement("span")

passwordCheckLabel.parentNode.insertBefore(warningMessage3, passwordCheckLabel)

passwordFieldInput.addEventListener("focusout", (e) => {
  const result = ErrorCheck("password", e.target.value)
  console.log("passwordWordInput result : ", result)

  if (result.error) {
    warningMessage3.style.color = result.messageStyle.color
    warningMessage3.style.fontSize = result.messageStyle.fontSize
    warningMessage3.style.marginTop = result.messageStyle.marginTop
    warningMessage3.style.display = result.messageStyle.display
    passwordFieldInput.style.border = result.inputBorder
    passwordFieldInput.style.marginBottom = 0
    warningMessage3.textContent = result.message
    passwordOk = false
    signUpButton.disabled = true
    signUpButton.style.backgroundColor = "#9CA3AF"
  } else {
    warningMessage3.style.color = result.messageStyle.color
    warningMessage3.style.fontSize = result.messageStyle.fontSize
    warningMessage3.style.marginTop = result.messageStyle.marginTop
    warningMessage3.style.display = result.messageStyle.display
    passwordFieldInput.style.border = result.inputBorder
    warningMessage3.textContent = result.message
    passwordOk = true

    if (emailOk && nicknameOk && passwordOk && passwordCheckOk) {
      signUpButton.disabled = false
      signUpButton.style.backgroundColor = "#3693FF"
    }
  }
})

// 비밀번호 검증 끝

// 비밀번호 검증부분 시작

const passwordCheckFieldInput = document.querySelector("#password-check-field")
const socialSection = document.querySelector(".signup-button")

const warningMessage4 = document.createElement("span")

socialSection.parentNode.insertBefore(warningMessage4, socialSection)

passwordCheckFieldInput.addEventListener("focusout", (e) => {
  const result = ErrorCheck("passwordCheck", {
    password1: e.target.value,
    password2: passwordFieldInput.value,
  })
  console.log("passwordWordInput result : ", result)

  if (result.error) {
    warningMessage4.style.color = result.messageStyle.color
    warningMessage4.style.fontSize = result.messageStyle.fontSize
    warningMessage4.style.marginTop = result.messageStyle.marginTop
    warningMessage4.style.display = result.messageStyle.display
    passwordCheckFieldInput.style.border = result.inputBorder
    passwordCheckFieldInput.style.marginBottom = 0
    warningMessage4.textContent = result.message
    passwordCheckOk = false
    signUpButton.disabled = true
    signUpButton.style.backgroundColor = "#9CA3AF"
  } else {
    warningMessage4.style.color = result.messageStyle.color
    warningMessage4.style.fontSize = result.messageStyle.fontSize
    warningMessage4.style.marginTop = result.messageStyle.marginTop
    warningMessage4.style.display = result.messageStyle.display
    passwordCheckFieldInput.style.border = result.inputBorder
    warningMessage4.textContent = result.message
    passwordCheckOk = true

    if (emailOk && nicknameOk && passwordOk && passwordCheckOk) {
      signUpButton.disabled = false
      signUpButton.style.backgroundColor = "#3693FF"
    }
  }
})

// 비밀번호 검증 끝

const passwordEyeInput = document.querySelector("#password-field")
const eyeIconWrapper = document.querySelector(".icon-eye")
const eyeIcon = document.querySelector("#eye-icon")
const togglePasswordSpan = document.querySelector(".toggle-password")
togglePasswordSpan.style.display = "none"

eyeIconWrapper.addEventListener("click", () => {
  const isPasswordVisible = passwordEyeInput.type === "text"

  if (isPasswordVisible) {
    // 비밀번호 감추기
    passwordEyeInput.type = "password"
    eyeIcon.style.display = "block"
    togglePasswordSpan.style.display = "none"
  } else {
    // 비밀번호 보이기
    passwordEyeInput.type = "text"
    eyeIcon.style.display = "none"
    togglePasswordSpan.style.display = "inline" // span은 inline
  }
})

const passwordCheckEyeInput = document.querySelector("#password-check-field")
const eye2IconWrapper = document.querySelector(".icon-eye2")
const eye2Icon = document.querySelector("#eye-icon2")
const toggleCheckPasswordSpan = document.querySelector(".toggle-check-password")
toggleCheckPasswordSpan.style.display = "none"

eye2IconWrapper.addEventListener("click", () => {
  const isPasswordVisible = passwordCheckEyeInput.type === "text"

  if (isPasswordVisible) {
    // 비밀번호 감추기
    passwordCheckEyeInput.type = "password"
    eye2Icon.style.display = "block"
    toggleCheckPasswordSpan.style.display = "none"
  } else {
    // 비밀번호 보이기
    passwordCheckEyeInput.type = "text"
    eye2Icon.style.display = "none"
    toggleCheckPasswordSpan.style.display = "inline" // span은 inline
  }
})
