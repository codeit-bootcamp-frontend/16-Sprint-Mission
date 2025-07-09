import styled from 'styled-components';
import { useState } from 'react';
import closeEye from '../../assets/images/icons/ic_visibility_off.png';
import openEye from '../../assets/images/icons/ic_visibility_on.png';
import { applyFontStyles } from '../../styles/mixins';
import { ColorTypes, FontTypes } from '../../styles/theme';

function InputField({ label, type, placeholder, isTextArea, value, onChange, onBlur, error, id }) {
  const [isPwVisible, setIsPwVisible] = useState(false);

  if (isTextArea) {
    return (
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
    );
  }

  const inputType = type === 'password' ? (isPwVisible ? 'text' : 'password') : type;

  return (
    <StyledContainer>
      <label htmlFor="input">{label}</label>
      <InputWrapper $hasError={!!error}>
        <input
          id={id}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={
            type === 'email'
              ? 'username'
              : type === 'password'
              ? 'current-password'
              : type === 'nickname'
              ? 'nickname'
              : undefined
          }
        />
        {type === 'password' && (
          <EyeButton
            type="button"
            onClick={() => setIsPwVisible((prev) => !prev)}
            tabIndex={-1}
          >
            <img
              src={isPwVisible ? openEye : closeEye}
              alt={isPwVisible ? '비밀번호 숨기기' : '비밀번호 보기'}
            />
          </EyeButton>
        )}
      </InputWrapper>
      {error && <StyledError>{error}</StyledError>}
    </StyledContainer>
  );
}

export default InputField;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    padding-right: 30px;
    border: 1px solid
      ${({ $hasError, theme }) =>
        $hasError ? theme.colors[ColorTypes.ERROR] : theme.colors[ColorTypes.SECONDARY_GRAY_100]};
  }
`;

const EyeButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    width: 20px;
    height: 18px;
    margin-right: 18px;
  }
`;
const StyledError = styled.p`
  ${applyFontStyles(FontTypes.SEMIBOLD14, ColorTypes.ERROR)}
`;
