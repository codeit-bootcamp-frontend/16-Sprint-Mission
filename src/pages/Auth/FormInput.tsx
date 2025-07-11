import styles from '@styles/ErrMsg.module.css';
import {
  useFormContext,
  useFormState,
  type FieldErrors,
  type FieldValues,
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
    validate: (value: string, formValues: FieldValues) => {
      return (
        formValues['user-password'] === value || '비밀번호가 일치하지 않습니다.'
      );
    },
  },
};

interface Props {
  placeholder: string;
  name: keyof typeof VALID_RULES;
  type: string;
  id: string;
}

function FormInput(props: Props) {
  const { placeholder, name, type, id } = props;
  const methods = useFormContext();
  type InferredT = typeof methods extends UseFormReturn<infer U> ? U : never;
  //InferredT를 통해 useFormState에 인자로 들어가는 name이 유효한 타입인지 (Path<T>에 해당하는지) 정확히 판단하기 위해 사용
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
