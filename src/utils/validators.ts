export type FieldKey = 'email' | 'nickname' | 'password' | 'passwordVerify';

interface ValidationType {
  isValid: boolean;
  message: string;
}

export type ValidationResultType = {
  [key in FieldKey]?: ValidationType;
};

interface Validators {
  email: (emailText: string) => ValidationResultType;
  nickname: (nicknameText: string) => ValidationResultType;
  password: (passwordText: string, passwordVerifyText?: string) => ValidationResultType;
  passwordVerify: (passwordVerifyText: string, passwordText?: string) => ValidationResultType;
}

export const validators: Validators = {
  email: (emailText) => {
    if (!emailText) return { email: { isValid: false, message: '이메일을 입력해주세요' } };
    const emailRegex =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return !emailRegex.test(emailText)
      ? { email: { isValid: false, message: '잘못된 이메일 형식입니다' } }
      : { email: { isValid: true, message: '' } };
  },
  nickname: (nicknameText) => {
    return !nicknameText
      ? { nickname: { isValid: false, message: '닉네임을 입력해주세요' } }
      : { nickname: { isValid: true, message: '' } };
  },
  password: (passwordText, passwordVerifyText) => {
    if (!passwordText) {
      return { password: { isValid: false, message: '비밀번호를 입력해주세요' } };
    }
    if (passwordText.length < 8) {
      return { password: { isValid: false, message: '비밀번호를 8자 이상 입력해주세요' } };
    }
    if (!passwordVerifyText) {
      return { password: { isValid: true, message: '' } };
    }
    if (passwordText !== passwordVerifyText) {
      return {
        password: { isValid: true, message: '' },
        passwordVerify: { isValid: false, message: '비밀번호가 일치하지 않습니다' },
      };
    }
    return {
      password: { isValid: true, message: '' },
      passwordVerify: { isValid: true, message: '' },
    };
  },
  passwordVerify: (passwordVerifyText, passwordText) => {
    if (!passwordVerifyText)
      return { passwordVerify: { isValid: false, message: '비밀번호를 입력해주세요' } };
    if (passwordVerifyText.length < 8)
      return { passwordVerify: { isValid: false, message: '비밀번호 8자 이상 입력해주세요' } };
    if (passwordVerifyText.length >= 8 && passwordVerifyText !== passwordText) {
      return { passwordVerify: { isValid: false, message: '비밀번호가 일치하지 않습니다' } };
    }
    return { passwordVerify: { isValid: true, message: '' } };
  },
};
