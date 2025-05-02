//비밀번호 유효성을 검증하는 파일입니다.
export function validatePassword(value) {
  if (!value) {
    return { valid: false, message: '비밀번호를 입력해주세요.' };
  }
  if (value.length < 8) {
    return { valid: false, message: '비밀번호를 8자 이상 입력해주세요.' };
  }
  return { valid: true, message: '' };
}
