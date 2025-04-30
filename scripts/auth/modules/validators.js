export const validators = {
  email: (emailText) => {
    //prettier-ignore
    const emailRegex = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i);
    if (!emailText) return { isValid: false, message: '이메일을 입력해주세요' };
    if (emailRegex.test(emailText)) return { isValid: true, message: '' };
    else return { isValid: false, message: '잘못된 이메일 형식입니다' };
  },
  nickname: (nicknameText) => {
    if (nicknameText) return { isValid: true, message: '' };
    else return { isValid: false, message: '닉네임을 입력해주세요' };
  },
  password: (passwordText) => {
    if (passwordText.length < 8)
      return { isValid: false, message: '비밀번호를 8자 이상 입력해주세요' };
    else if (passwordText.length >= 8) return { isValid: true, message: '' };
  },
  passwordVerify: (passwordVerifyText, passwordText) => {
    if (passwordVerifyText.length < 8)
      return { isValid: false, message: '비밀번호를 8자 이상 입력해주세요' };
    else if (passwordVerifyText.length >= 8) {
      if (passwordVerifyText === passwordText)
        return { isValid: true, message: '' };
      else return { isValid: false, message: '비밀번호가 일치하지 않습니다' };
    }
  },
};
