import type { FormEvent } from 'react';
import AuthField from '../../../components/AuthField/AuthField';
import Button from '../../../components/Button/Button';
import { useFormField } from '../../../hooks/useFormField';
import type { FieldKey } from '../../../utils/validators';
import { useNavigate } from 'react-router-dom';

const INITIAL_FIELDS: FieldKey[] = ['email', 'password'];

const SignInForm = () => {
  const { values, valids, hints, isSubmitEnable, handleInputChange, handleInputBlur } =
    useFormField(INITIAL_FIELDS);

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <AuthField>
        <AuthField.label htmlFor='email'>이메일</AuthField.label>
        <AuthField.input
          id='email'
          placeholder='이메일을 입력해주세요'
          ariaLabel='이메일 입력 칸'
          type='email'
          autocomplete='email'
          value={values.email}
          valid={valids.email}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
        <AuthField.hint>{hints.email}</AuthField.hint>
      </AuthField>
      <AuthField>
        <AuthField.label htmlFor='email'>비밀번호</AuthField.label>
        <AuthField.input
          id='password'
          placeholder='비밀번호를 입력해주세요'
          ariaLabel='비밀번호 입력 칸'
          type='password'
          autocomplete='current-password'
          value={values.password}
          valid={valids.password}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
        />
        <AuthField.hint>{hints.password}</AuthField.hint>
      </AuthField>
      <Button
        className='h-[56px] w-full rounded-[40px] text-[20px]/[32px]'
        disabled={!isSubmitEnable}
      >
        로그인
      </Button>
    </form>
  );
};

export default SignInForm;
