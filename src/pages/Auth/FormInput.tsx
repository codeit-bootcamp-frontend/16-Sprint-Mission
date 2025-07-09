import styles from '@styles/ErrMsg.module.css';
import {
  useFormContext,
  useFormState,
  type FieldErrors,
} from 'react-hook-form';
import clsx from 'clsx';

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
  validatePwCheck?: (value: string) => boolean | string;
}

function FormInput(props: Props) {
  const { placeholder, name, type, id, validatePwCheck } = props;
  const { register } = useFormContext();
  const { errors } = useFormState({ name }); //여기서 name으로 따로 골라와야 개별로 감지하는듯...?

  function getErrorMessage(errors: FieldErrors) {
    const errMsg = errors[name]?.message;
    const result = errMsg && typeof errMsg === 'string' ? errMsg : '';

    return result;
  }

  return (
    <>
      <input
        {...register(name, {
          ...VALID_RULES[name],
          validate: validatePwCheck || undefined, //프롭에 validatePwCheck 없으면 undefined로
        })}
        className={clsx({ [styles.inputErrorBorder]: errors[name] })}
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
