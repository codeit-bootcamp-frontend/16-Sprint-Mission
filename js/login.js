import { validateInput } from './ValidationRules.js'

document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email')
  const passwordInput = document.getElementById('password')
  const loginButton = document.querySelector('.login_button')

  // 이메일 부분

  emailInput.addEventListener('blur', () => {
    validateInput(
      emailInput,
      'email',
      validateErrorMessage,
      showError,
      clearError
    )
    updateButtonState()
  })

  // 비밀번호 부분

  passwordInput.addEventListener('blur', () => {
    validateInput(
      passwordInput,
      'password',
      validateErrorMessage,
      showError,
      clearError
    )
    updateButtonState()
  })

  function showError(input, errorElement, message) {
    const wrapper = input.closest('.login_password_wrap') || input
    wrapper.classList.add('error')
    errorElement.textContent = message
    errorElement.style.display = 'block'
  }

  function clearError(input, errorElement) {
    const wrapper = input.closest('.login_password_wrap') || input
    wrapper.classList.remove('error')
    errorElement.textContent = ''
    errorElement.style.display = 'none'
  }

  function validateErrorMessage(input) {
    let wrapper = input.closest('.login_password_wrap') || input
    let next = wrapper.nextElementSibling
    if (!next || !next.classList.contains('error-message')) {
      const error = document.createElement('p')
      error.className = 'error-message'
      error.style.color = 'red'
      error.style.fontSize = '14px'
      error.style.marginTop = '4px'
      wrapper.parentNode.insertBefore(error, wrapper.nextSibling)
      return error
    }
    return next
  }

  function updateButtonState() {
    const emailValue = emailInput.value.trim()
    const passwordValue = passwordInput.value.trim()

    const hasEmailError = validateErrorMessage(emailInput).textContent !== ''
    const hasPasswordError =
      validateErrorMessage(passwordInput).textContent !== ''

    const isValid =
      emailValue && passwordValue && !hasEmailError && !hasPasswordError

    loginButton.disabled = !isValid

    if (isValid) {
      loginButton.classList.add('active')
    } else {
      loginButton.classList.remove('active')
    }
  }

  emailInput.addEventListener('input', updateButtonState)
  passwordInput.addEventListener('input', updateButtonState)

  const loginForm = document.querySelector('.login_form_container')

  loginForm.addEventListener('submit', function (e) {
    e.preventDefault() // 폼 제출 방지
    if (!loginButton.disabled) {
      window.location.href = '/items.html'
    }
  })
  updateButtonState()
})
