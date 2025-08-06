import FormInput from './FormInput';

function NameField() {
  return (
    <>
      <label htmlFor="user-name">닉네임</label>
      <FormInput
        id="user-name"
        type="text"
        name="user-name"
        placeholder="닉네임을 입력해주세요"
      />
    </>
  );
}

export default NameField;
