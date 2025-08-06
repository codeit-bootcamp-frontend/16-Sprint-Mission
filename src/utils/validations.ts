const EMAIL_REG = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

export const validateEmail = (emailValue: string) => {
  if (EMAIL_REG.test(emailValue)) {
    return { isValid: true, errorMsg: null };
  } else {
    return { isValid: false, errorMsg: "잘못된 이메일 형식입니다" };
  }
};

export const validatePassword = (passwordValue: string) => {
  if (passwordValue.length < 8) {
    return { isValid: false, errorMsg: "비밀번호를 8자 이상 입력해주세요" };
  } else {
    return { isValid: true, errorMsg: null };
  }
};

//passwordcheckvalue는 isEmpty로 undefined값이 사전에 필터링
export const validatePasswordCheck = (
  passwordCheckValue: string,
  comparisonValue: string | undefined
) => {
  if (comparisonValue !== passwordCheckValue) {
    return { isValid: false, errorMsg: "비밀번호가 일치하지 않습니다" };
  } else {
    return { isValid: true, errorMsg: null };
  }
};
