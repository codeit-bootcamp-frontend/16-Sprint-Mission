function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export const validationRules = {
  email: [
    { condition: (v) => !v, message: '이메일을 입력해주세요.' },
    {
      condition: (v) => !isValidEmail(v),
      message: '잘못된 이메일 형식입니다.',
    },
  ],
  password: [
    { condition: (v) => !v, message: '비밀번호를 입력해주세요.' },
    {
      condition: (v) => v.length < 8,
      message: '비밀번호를 8자 이상 입력해주세요.',
    },
  ],
  nickname: [{ condition: (v) => !v, message: '닉네임을 입력해주세요.' }],
}

export function validateInput(
  input,
  type,
  validateErrorMessage,
  showError,
  clearError
) {
  const value = input.value.trim()
  const errorEl = validateErrorMessage(input)
  const failed = validationRules[type].find(({ condition }) => condition(value))

  if (failed) {
    showError(input, errorEl, failed.message)
  } else {
    clearError(input, errorEl)
  }
}
