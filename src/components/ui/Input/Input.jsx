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
  } = props;
  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      css={InputStyle}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;

export const InputStyle = css`
  font-size: 1rem;
  padding: 14px 20px;
  background: var(--gray200);
  border-radius: var(--border-radius-sm);

  &::placeholder {
    color: var(--gray400);
  }
`;
