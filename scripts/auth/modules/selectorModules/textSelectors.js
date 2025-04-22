const email_blank = '이메일을 입력해주세요';
const email_typeErr = '잘못된 이메일 형식입니다';
const email_valid = '';

const nickname_blank = '닉네임을 입력해주세요';
const nickname_typeErr = '';
const nickname_valid = '';

const password_blank = '비밀번호를 입력해주세요';
const password_typeErr = '비밀번호를 8자 이상 입력해주세요';
const password_valid = '';

const password_verify_mismatch = '비밀번호가 일치하지 않습니다';
const password_verify_blank = '비밀번호를 입력해주세요';
const password_verify_typeErr = '비밀번호를 8자 이상 입력해주세요';
const password_verify_valid = '';

export function inputStatusTextSelector(val, inputType) {
  if (inputType === 'email') {
    switch (val) {
      case -1:
        return email_blank;
      case 0:
        return email_typeErr;
      case 1:
        return email_valid;
    }
  } else if (inputType === 'nickname') {
    switch (val) {
      case -1:
        return nickname_blank;
      case 0:
        return nickname_typeErr;
      case 1:
        return nickname_valid;
    }
  } else if (inputType === 'password') {
    switch (val) {
      case -1:
        return password_blank;
      case 0:
        return password_typeErr;
      case 1:
        return password_valid;
    }
  } else if (inputType === 'passwordVerify') {
    switch (val) {
      case -2:
        return password_verify_mismatch;
      case -1:
        return password_verify_blank;
      case 0:
        return password_verify_typeErr;
      case 1:
        return password_verify_valid;
    }
  }
  return;
}
