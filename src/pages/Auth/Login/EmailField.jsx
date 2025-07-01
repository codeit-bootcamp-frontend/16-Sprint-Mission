import FormInput from '../FormInput';

function EmailField() {
  return (
    <>
      <label htmlFor="user-email">이메일</label>
      <FormInput
        type="text"
        id="user-email"
        name="user-email"
        placeholder="이메일을 입력해주세요"
      />
    </>
  );
}

export default EmailField;
