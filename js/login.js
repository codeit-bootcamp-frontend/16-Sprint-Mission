document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email')
  const passwordInput = document.getElementById('password')
  const loginButton = document.querySelector('.login_button')

  // 이메일 부분

  emailInput.addEventListener('blur', () => {
    const value = emailInput.value.trim()
    const errorMsg = getOrCreateErrorElement(emailInput)

    if (!value) {
      showError(emailInput, errorMsg, '이메일을 입력해주세요.')
    } else if (!isValidEmail(value)) {
      showError(emailInput, errorMsg, '잘못된 이메일 형식입니다.')
    } else {
      clearError(emailInput, errorMsg)
    }
    updateButtonState()
  })

  // 비밀번호 부분

  passwordInput.addEventListener('blur', () => {
    const value = passwordInput.value.trim()
    const errorMsg = getOrCreateErrorElement(passwordInput)

    if (!value) {
      showError(passwordInput, errorMsg, '비밀번호를 입력해주세요.')
    } else if (value.length < 8) {
      showError(passwordInput, errorMsg, '비밀번호를 8자 이상 입력해주세요.')
    } else {
      clearError(passwordInput, errorMsg)
    }
    updateButtonState()
  })

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

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

  function getOrCreateErrorElement(input) {
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

    const hasEmailError = getOrCreateErrorElement(emailInput).textContent !== ''
    const hasPasswordError =
      getOrCreateErrorElement(passwordInput).textContent !== ''

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
