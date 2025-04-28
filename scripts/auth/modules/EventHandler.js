// input 상태관리 변수
const inputValidState = {
  email: { isValid: null, message: '' },
  nickname: { isValid: null, message: '' },
  password: { isValid: null, message: '' },
  passwordVerify: { isValid: null, message: '' },
};

const messageObject = {
  email: {
    null: '이메일을 입력해주세요',
    false: '잘못된 이메일 형식입니다',
    true: '',
  },
  nickname: {
    null: '닉네임을 입력해주세요',
    false: '잘못된 이메일 형식입니다',
    true: '',
  },
  password: {
    null: '비밀번호를 입력해주세요',
    false: '비밀번호를 8자 이상 입력해주세요',
    true: '',
  },
  passwordVerify: {
    null: '비밀번호를 입력해주세요',
    false: '비밀번호를 8자 이상 입력해주세요',
    true: '',
  },
  passwordMatch: {
    false: '비밀번호가 일치하지 않습니다',
    true: '',
  },
};

/**
 * 유효성검사 결과값을 InputValidState에 업데이트하는 함수
 * @param {string} stateKey
 */
export const setValidation = (stateKey) => {
  const inputElement = document.querySelector(`#${stateKey} .form-input`);
  let isInputValid = inputValidators[stateKey](inputElement.value);
  let validMessage = messageObject[stateKey][isInputValid];
  if (stateKey === 'passwordVerify' && isInputValid) {
    const passwordText = document.querySelector(`#password .form-input`).value;
    //prettier-ignore
    isInputValid = inputValidators['passwordMatch'](passwordText, inputElement.value);
    validMessage = messageObject['passwordMatch'][isInputValid];
  }
  setState(stateKey, { isValid: isInputValid, message: validMessage });
};

/**
 * 유효성 검사 함수
 */
const inputValidators = {
  email: (emailText) => {
    const emailRegex = new RegExp(
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    );
    if (!emailText) return null;
    return emailRegex.test(emailText);
  },
  nickname: (nicknameText) => {
    return !!nicknameText;
  },
  password: (passwordText) => {
    if (!passwordText) return null;
    return passwordText.length >= 8;
  },
  passwordVerify: (passwordVerifyText) => {
    if (!passwordVerifyText) return null;
    return passwordVerifyText.length >= 8;
  },
  passwordMatch: (passwordText, passwordVerifyText) => {
    return passwordText === passwordVerifyText;
  },
};

/**
 * input 상태관리 변수 값을 불러오는 함수
 * @param {string} [stateKey]
 * @returns 기본값: inputValidState 객체 return / stateKey 지정 시 : stateKey에 해당하는 상태객체 반환
 */
export const getState = (stateKey) => {
  if (stateKey) return inputValidState[stateKey];
  else return inputValidState;
};

/**
 * input 상태관리 변수 값을 지정하는 함수
 * @param {string} changedStateKey 변경 할 stateKey 지정
 * @param {object} changedStateObject 변경 할 stateKey의 값을 객체로 지정({isvalid: true/false, message: ''})
 */
export const setState = (changedStateKey, changedStateObject) => {
  for (const changeditem in changedStateObject) {
    inputValidState[changedStateKey][changeditem] =
      changedStateObject[changeditem];
  }
};

export const deleteState = (stateKey) => {
  delete inputValidState[stateKey];
};
