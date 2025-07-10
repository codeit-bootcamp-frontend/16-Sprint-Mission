import styles from '@styles/ErrMsg.module.css';
import {
  useFormContext,
  useFormState,
  type FieldErrors,
  type UseFormReturn,
} from 'react-hook-form';
import clsx from 'clsx';

//레지스터 등록용
const VALID_RULES = {
  'user-email': {
    required: '이메일을 입력해주세요',
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: '이메일 형식에 맞지 않습니다.',
    },
  },
  'user-password': {
    required: '비밀번호를 입력해주세요.',
    minLength: {
      value: 8,
      message: '비밀번호를 8자 이상 입력해주세요.',
    },
  },
  'user-name': {
    required: '이름을 입력해주세요.',
  },
  'user-password-check': {
    required: '비밀번호를 다시 입력해주세요.',
  },
};

interface Props {
  placeholder: string;
  name: keyof typeof VALID_RULES;
  type: string;
  id: string;
  validatePwCheck?: (value: string) => string;
}

function FormInput(props: Props) {
  const { placeholder, name, type, id, validatePwCheck } = props;
  const methods = useFormContext();
  type InferredT = typeof methods extends UseFormReturn<infer U> ? U : never;
  //원래 useFormContext가 프로바이더 내려줄 때 알아서 useForm<T>안에 넣어줬던 타입을 찾아오는 거 같은데
  //그러면 name을 프롭으로 받을 때 무조건 Path<T>로 받아야 useFormState({name})에서 에러가 안 뜨더라구요...
  //그럼 Props<T>로 받아야 Path<T>로 설정해줄 수 있는데 
  //이러면 이 컴포넌트 호출 할 때마다 <T>를 또 붙여줘야하니까
  //보기 지저분할 것 같아서 이런 식으로 T를 따로 추론해서 넣어봤습니다...
  const { errors } = useFormState<InferredT>({ name }); //여기서 name으로 따로 골라와야 개별로 감지

  function getErrorMessage(errors: FieldErrors) {
    const errMsg = errors[name]?.message;
    const result = errMsg && typeof errMsg === 'string' ? errMsg : '';

    return result;
  }

  return (
    <>
      <input
        {...methods.register(name, {
          ...VALID_RULES[name],
          validate: validatePwCheck || undefined, //프롭에 validatePwCheck 없으면 undefined로
        })}
        className={clsx({ [styles.inputErrorBorder]: getErrorMessage(errors) })}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <div role="alert" className={styles.errorMessage}>
        {getErrorMessage(errors)}
      </div>
    </>
  );
}

export default FormInput;
