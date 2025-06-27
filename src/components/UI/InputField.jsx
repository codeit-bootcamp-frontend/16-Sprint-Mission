import styled from 'styled-components';

function InputField({ label, type, placeholder, isTextArea, value, onChange }) {
  return isTextArea ? (
    <StyledContainer>
      <label htmlFor="textarea">{label}</label>
      <textarea
        id="textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={10}
      />
    </StyledContainer>
  ) : (
    <StyledContainer>
      <label htmlFor="input">{label}</label>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledContainer>
  );
}

export default InputField;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
