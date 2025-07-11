import { useCallback, useReducer } from 'react';

/*
  리액트 훅 폼 사용 전 폼 관리 할 때 사용하던 커스텀 훅 파일입니다.
  지금은 사용하지 않는 파일인데
  너무 파일 변경 사항이 없는 것 같아서 이 파일도 수정해봤습니다.
*/

type FieldName =
  | 'user-email'
  | 'user-password'
  | 'user-name'
  | 'user-password-check';

interface FieldState {
  value: string;
  error: boolean;
  errorMessage: string;
  isValid: boolean;
}

type FormState = Record<FieldName, FieldState>;

interface Action {
  type: 'UPDATE_FIELD';
  payload: { name: FieldName; value: string };
}

function createInitialFieldState(): FieldState {
  return {
    value: '',
    error: false,
    errorMessage: '',
    isValid: false,
  };
}

const initialState: FormState = {
  'user-email': createInitialFieldState(),
  'user-password': createInitialFieldState(),
  'user-name': createInitialFieldState(),
  'user-password-check': createInitialFieldState(),
};

function validationReducer(state: FormState, action: Action) {
  //state는 validationStates
  switch (action.type) {
    case 'UPDATE_FIELD': {
      const { name, value } = action.payload;
      const validator = validRuleObj[name];
      const isValid = validator.isValid(value, state['user-password'].value); //인자 두개 받는 경우는 passwordCheck밖에 없으니
      const errMsg = isValid ? '' : validator.getErrorMessage(value);

      return {
        ...state,
        [name]: {
          value,
          error: !isValid,
          errorMessage: errMsg,
          isValid: isValid,
        },
      };
    }
    default:
      return state;
  }
}

export function useValidate() {
  const [validationStates, dispatch] = useReducer(
    validationReducer,
    initialState,
  );

  const validate = useCallback((name: FieldName, value: string) => {
    //name: 추가할 인풋 이름
    dispatch({ type: 'UPDATE_FIELD', payload: { name, value } });
  }, []);

  const getFieldState = useCallback(
    (name: FieldName) => {
      return validationStates[name];
    },
    [validationStates],
  );

  return { getFieldState, validate };
}

//  그냥 바깥에 빼는게 나을 것 같음
export function checkAllValid(...args: FieldState[]) {
  // 기존에 checkAllValid(getFieldState('user-email'),...)처럼 호출
  return args.every((item) => item.isValid);
  //emailState={...,isValid:true}
}

const validRuleObj = {
  'user-email': {
    isValid(value: string) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    },
    getErrorMessage(value: string) {
      return value ? '잘못된 이메일입니다.' : '이메일을 입력해주세요';
    },
  },
  'user-password': {
    isValid(value: string) {
      return value.length >= 8;
    },
    getErrorMessage(value: string) {
      return value.length == 0
        ? '비밀번호를 입력해주세요.'
        : '비밀번호를 8자 이상 입력해주세요.';
    },
  },
  'user-name': {
    isValid(value: string) {
      return Boolean(value);
    },
    getErrorMessage() {
      return '닉네임을 입력해주세요';
    },
  },
  'user-password-check': {
    isValid(value: string, pwValue: string) {
      return pwValue === value && value.length !== 0;
    },
    getErrorMessage() {
      return '비밀번호가 일치하지 않습니다.';
    },
  },
};
