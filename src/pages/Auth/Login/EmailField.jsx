import { useFormContext, useFormState } from 'react-hook-form';
import FormInput from '../FormInput';

function EmailField() {
  // const {
  //   register,
  //   formState: { errors },
  // } = useFormContext(); //이렇게 한번에 구독하면 formState전체를 받아와서 개별 구독이 안되는듯??
  const { register } = useFormContext(); //이렇게 따로 해야 개별구독하네
  const { errors } = useFormState({ name: 'user-email' });

  return (
    <>
      <label htmlFor="user-email">이메일</label>
      <FormInput
        errors={errors}
        register={register}
        type="text"
        id="user-email"
        name="user-email"
        placeholder="이메일을 입력해주세요"
      />
    </>
  );
}

export default EmailField;
