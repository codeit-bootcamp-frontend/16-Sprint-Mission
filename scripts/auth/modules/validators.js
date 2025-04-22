/**
 * emailValidator: 이메일 주소 유효성 검사 함수
 * @param {string} emailText 유효성 검사를 진행할 텍스트
 * @returns 공백: -1 | 유효성 검사 불일치: 0 | 유효성 검사 일치: 1
 */
export function emailValidator(emailText) {

  const reg_email = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  );

  if (emailText.length === 0) return -1;
  else {
    return reg_email.test(emailText) ? 1 : 0;
  }
}

/**
 * nicknameValidator: 닉네임 유효성 검사 후 결과값을 반환하는 함수
 * @param {string} nicknameText 유효성 검사를 진행할 텍스트
 * @returns 공백: -1 | 유효성 검사 일치: 1
 */
export function nicknameValidator(nicknameText) {
  // 빈칸 : -1
  // 닉네임 형식: 1
  if (nicknameText.length === 0) return -1;
  else if (nicknameText.length > 0) return 1;
}

/**
 * passwordValidator: 비밀번호 유효성 검사 후 결과값을 반환하는 함수
 * @param {string} passwordText 유효성 검사를 진행할 텍스트
 * @returns 공백: -1 | 유효성 검사 불일치: 0 | 유효성 검사 일치: 1
 */
export function passwordValidator(passwordText) {
  if (passwordText.length === 0) return -1;
  if (passwordText.length < 8 && passwordText.length > 0) return 0;
  else return 1;
}

/**
 * passwordMatchValidator: 비밀번호확인 유효성 검사, 비밀번호란과 일치 비교 후 결과값을 반환하는 함수
 * @param {string} passwordText 유효성 검사를 진행할 텍스트(비밀번호)
 * @param {string} verifyPasswordText 유효성 검사를 진행할 텍스트(비밀번호 확인)
 * @returns 비교 불일치: -2 | 공백: -1 | 유효성 검사 불일치: 0 | 유효성 검사 일치: 1
 */
export function passwordMatchValidator(passwordText, verifyPasswordText) {

  if (verifyPasswordText.length < 8 && verifyPasswordText.length > 0) return 0;
  else if (verifyPasswordText.length === 0) return -1;
  else if (passwordText !== verifyPasswordText) return -2;
  else if (passwordText === verifyPasswordText && verifyPasswordText.length > 0)
    return 1;
}