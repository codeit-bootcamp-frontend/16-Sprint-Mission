export const validators = {
  email: (emailText) => {
    if (!emailText)
      return { email: { isValid: false, message: '이메일을 입력해주세요' } };
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!emailRegex.test(emailText))
      return { email: { isValid: false, message: '잘못된 이메일 형식입니다' } };
    else return { email: { isValid: true, message: '' } };
  },
  nickname: (nicknameText) => {
    if (!nicknameText)
      return { nickname: { isValid: false, message: '닉네임을 입력해주세요' } };
    else return { nickname: { isValid: true, message: '' } };
  },
  password: (passwordText, passwordVerifyText = passwordText) => {
    if (!passwordText)
      //prettier-ignore
      return { password: { isValid: false, message: '비밀번호를 입력해주세요' }};
    if (passwordText.length < 8)
      //prettier-ignore
      return { password: { isValid: false, message: '비밀번호를 8자 이상 입력해주세요' }};
    else if (passwordText.length >= 8) {
      if (passwordVerifyText === '') {
        return { password: { isValid: true, message: '' } };
      }
      if (passwordText !== passwordVerifyText) {
        return {
          password: { isValid: true, message: '' },
          //prettier-ignore
          passwordVerify: { isValid: false, message: '비밀번호가 일치하지 않습니다' },
        };
      } else if (passwordText === passwordVerifyText) {
        return {
          password: { isValid: true, message: '' },
          passwordVerify: { isValid: true, message: '' },
        };
      }
    }
  },
  passwordVerify: (passwordVerifyText, passwordText) => {
    if (!passwordVerifyText)
      //prettier-ignore
      return { passwordVerify: { isValid: false, message: '비밀번호를 입력해주세요' }};
    else if (passwordVerifyText.length < 8)
      //prettier-ignore
      return { passwordVerify: { isValid: false, message: '비밀번호 8자 이상 입력해주세요' }};
    else if (passwordVerifyText.length >= 8) {
      if (passwordVerifyText !== passwordText)
        //prettier-ignore
        return { passwordVerify: { isValid: false, message: '비밀번호가 일치하지 않습니다' }};
      else return { passwordVerify: { isValid: true, message: '' } };
    }
  },
};
