import { useCallback, useReducer } from 'react';

/*
  리액트 훅 폼 사용 전 폼 관리 할 때 사용하던 커스텀 훅 파일입니다.
  지금은 사용하지 않는 파일인데
  너무 파일 변경 사항이 없는 것 같아서 이 파일도 수정해봤습니다.
*/

interface ValidationStates {
  values: { [key: string]: string };
  errors: { [key: string]: boolean };
  errorMessages: { [key: string]: string };
  isValid: { [key: string]: boolean };
}

interface Action {
  type: 'set_validationState';
  payload: { name: string; value: string };
}

interface validRules {
  [key: string]: {
    isValid: (value: string, pwValue?: string) => boolean;
    getErrorMessage: (value: string) => string;
  };
}

const initialValidationStates: ValidationStates = {
  //앞으로 해당 인풋들 다 여기에 한번에 저장 키:밸류로
  values: {},
  errors: {},
  errorMessages: {},
  isValid: {},
};

function validationReducer(state: ValidationStates, action: Action) {
  //state는 validationStates
  switch (action.type) {
    case 'set_validationState': {
      const { name, value } = action.payload;
      const validator = validRuleObj[name];
      const isValid = validator.isValid(value, state.values['user-password']);
      const errMsg = isValid ? '' : validator.getErrorMessage(value);

      return {
        //여기서 새로 만들어서 set해주기
        values: { ...state.values, [name]: value },
        errors: { ...state.errors, [name]: !isValid },
        errorMessages: { ...state.errorMessages, [name]: errMsg },
        isValid: { ...state.isValid, [name]: isValid },
      };
    }
    default:
      return state;
  }
}

export function useValidate() {
  const [validationStates, dispatch] = useReducer(
    validationReducer,
    initialValidationStates,
  );

  const validate = useCallback((name: string, value: string) => {
    //name: 추가할 인풋 이름
    dispatch({ type: 'set_validationState', payload: { name, value } });
  }, []);

  const getFieldState = useCallback(
    (name: string) => {
      return {
        value: validationStates.values[name] || '',
        error: validationStates.errors[name] || false,
        errorMessage: validationStates.errorMessages[name] || '',
        isValid: validationStates.isValid[name] || false, //초기에만 false로 주기
      };
    },
    [validationStates],
  );

  return { getFieldState, validate };
}

//useCallback으로 해도 어차피 isValid변할 때마다 다시 만들거면
//  그냥 바깥에 빼는게 나을 것 같음
export function checkAllValid(...args: ValidationStates[]) {
  return args.every((item) => item.isValid);
}

const validRuleObj: validRules = {
  'user-email': {
    isValid(value) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    getErrorMessage(value) {
      return value ? '잘못된 이메일입니다.' : '이메일을 입력해주세요';
    },
  },
  'user-password': {
    isValid(value) {
      return value.length >= 8;
    },
    getErrorMessage(value) {
      return value.length == 0
        ? '비밀번호를 입력해주세요.'
        : '비밀번호를 8자 이상 입력해주세요.';
    },
  },
  'user-name': {
    isValid(value) {
      return Boolean(value);
    },
    getErrorMessage() {
      return '닉네임을 입력해주세요';
    },
  },
  'user-password-check': {
    isValid(value, pwValue) {
      return pwValue === value && value.length !== 0;
    },
    getErrorMessage() {
      return '비밀번호가 일치하지 않습니다.';
    },
  },
};
