export function emailValidator(emailText) {
  // 빈칸 : -1
  // 이메일 형식 아님: 0
  // 이메일 형식: 1
  const reg_email = new RegExp(
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
  );

  if (emailText.length === 0) return -1;
  else {
    return reg_email.test(emailText) ? 1 : 0;
  }
}

export function nicknameValidator(nicknameText) {
  // 빈칸 : -1
  // 닉네임 형식: 1
  if (nicknameText.length === 0) return -1;
  else if (nicknameText.length > 0) return 1;
}

export function passwordValidator(passwordText) {
  // 빈칸 : -1
  // 비밀번호 형식 아님: 0
  // 비밀번호 형식: 1
  if (passwordText.length === 0) return -1;
  if (passwordText.length < 8 && passwordText.length > 0) return 0;
  else return 1;
}

export function passwordMatchValidator(passwordText, verifyPasswordText) {
  // 불일치 : -2
  // 빈칸 : -1
  // 비밀번호 형식 아님: 0
  // 비밀번호 형식: 1

  if (verifyPasswordText.length < 8 && verifyPasswordText.length > 0) return 0;
  else if (verifyPasswordText.length === 0) return -1;
  else if (passwordText !== verifyPasswordText) return -2;
  else if (passwordText === verifyPasswordText && verifyPasswordText.length > 0)
    return 1;
}