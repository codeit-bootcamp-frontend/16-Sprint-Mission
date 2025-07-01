import styles from '@styles/ErrMsg.module.css';
import { useFormContext, useFormState } from 'react-hook-form';

const validRuleObj = {
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
};

function FormInput(props) {
  const { placeholder, name, type, id } = props;
  const { register } = useFormContext(); 
  const { errors } = useFormState({ name });//여기서 name으로 따로 골라와야 개별로 감지하는듯...?
  const error = errors[name];

  return (
    <>
      <input
        {...register(name, validRuleObj[name])}
        className={error && styles.inputErrorBorder}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
      <div className={styles.errorMessage}>{error?.message}</div>
    </>
  );
}

export default FormInput;
