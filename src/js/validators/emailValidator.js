//이메일 유효성을 검증하는 파일입니다.
//adress@domain.domain2 형태 검증
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value) {
  if (!value) {
    return { valid: false, message: '이메일을 입력해주세요.' };
  }
  if (!EMAIL_REGEX.test(value)) {
    return { valid: false, message: '잘못된 이메일 형식입니다.' };
  }
  return { valid: true, message: '' };
}
