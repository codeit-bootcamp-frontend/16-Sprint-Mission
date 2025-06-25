import styled from 'styled-components';

function InputField({ label, type, placeholder, isTextArea, value, onChange }) {
  return isTextArea ? (
    <Container>
      <label htmlFor="textarea">{label}</label>
      <textarea
        id="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={10}
      />
    </Container>
  ) : (
    <Container>
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}

export default InputField;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
