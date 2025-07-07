
export const EMAIL_REGEXP = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
export const MIN_PASSWORD_LENGTH = 8;
export const MIN_NICKNAME_LENGTH = 2;
export const MAX_NICKNAME_LENGTH = 20;

export function validateEmail(email: string): boolean {
  return email.length > 0 && EMAIL_REGEXP.test(email);
}

export function validateNickname(nickname: string): boolean {
  return (
    nickname.length >= MIN_NICKNAME_LENGTH &&
    nickname.length <= MAX_NICKNAME_LENGTH
  );
}

export function validatePassword(password: string): boolean {
  return password.length >= MIN_PASSWORD_LENGTH;
}

export function validatePasswordConfirm(
  passwordConfirm: string,
  originalPassword: string
): boolean {
  return passwordConfirm === originalPassword;
}
