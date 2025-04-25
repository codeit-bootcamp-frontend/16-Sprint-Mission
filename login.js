import { ErrorCheck } from "./error.js"
const loginButton = document.querySelector(".signup-button")
loginButton.disabled = true
loginButton.style.backgroundColor = "#9CA3AF"
let loginOk = false
let passwordOk = false

const emailInput = document.querySelector("#email-field")
const passwordLabel = document.querySelector('label[for="password"]')

const warningMessage1 = document.createElement("span")

passwordLabel.parentNode.insertBefore(warningMessage1, passwordLabel)

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
    loginOk = false
    loginButton.disabled = true
    loginButton.style.backgroundColor = "#9CA3AF"
  } else {
    warningMessage1.style.color = result.messageStyle.color
    warningMessage1.style.fontSize = result.messageStyle.fontSize
    warningMessage1.style.marginTop = result.messageStyle.marginTop
    warningMessage1.style.display = result.messageStyle.display
    emailInput.style.border = result.inputBorder
    warningMessage1.textContent = result.message
    loginOk = true

    if (loginOk && passwordOk) {
      loginButton.disabled = false
      loginButton.style.backgroundColor = "#3692FF"
    }
  }
})

const passwordInput = document.querySelector("#password-field")
const inputWrapper = document.querySelector(".input-wrapper")

const warningMessage2 = document.createElement("span")

inputWrapper.appendChild(warningMessage2, passwordLabel)

passwordInput.addEventListener("focusout", (e) => {
  const result = ErrorCheck("password", e.target.value)
  console.log("passwordInput result : ", result)

  if (result.error) {
    warningMessage2.style.color = result.messageStyle.color
    warningMessage2.style.fontSize = result.messageStyle.fontSize
    warningMessage2.style.marginTop = result.messageStyle.marginTop
    warningMessage2.style.display = result.messageStyle.display
    passwordInput.style.border = result.inputBorder
    passwordInput.style.marginBottom = 0
    warningMessage2.textContent = result.message
    passwordOk = false
    loginButton.disabled = true
    loginButton.style.backgroundColor = "#9CA3AF"
  } else {
    warningMessage2.style.color = result.messageStyle.color
    warningMessage2.style.fontSize = result.messageStyle.fontSize
    warningMessage2.style.marginTop = result.messageStyle.marginTop
    warningMessage2.style.display = result.messageStyle.display
    passwordInput.style.border = result.inputBorder
    warningMessage2.textContent = result.message
    passwordOk = true

    if (loginOk && passwordOk) {
      loginButton.disabled = false
      loginButton.style.backgroundColor = "#3692FF"
    }
  }
})
