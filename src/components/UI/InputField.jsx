import styled from 'styled-components';

function InputField({ label, type, placeholder, isTextArea }) {
  return isTextArea ? (
    <Container>
      <label htmlFor="textarea">{label}</label>
      <input
        id="textarea"
        as="textarea"
        placeholder={placeholder}
      />
    </Container>
  ) : (
    <Container>
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
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
