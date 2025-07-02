/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Input = ({ ...props }) => {
  const {
    id,
    type = "text",
    name,
    value,
    placeholder,
    onChange,
    onBlur,
    isError,
  } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      css={InputStyle(isError)}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;

export const InputStyle = (isError) => css`
  width: 100%;
  font-size: 1rem;
  padding: 14px 20px;
  background: var(--gray200);
  border-radius: var(--border-radius-sm);
  border: ${isError ? "1px solid var(--error-color)" : "1px solid transparent"};

  &::placeholder {
    color: var(--gray400);
  }
`;
