/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Textarea = ({ ...props }) => {
  const { id, name, placeholder, onChange } = props;
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      css={TextareaStyle}
      onChange={onChange}
    />
  );
};

export default Textarea;

const TextareaStyle = css`
  font-size: 1rem;
  padding: 16px 20px;
  background: var(--gray200);
  border-radius: var(--border-radius-sm);
  border: none;
  height: var(--form-input-max-height);
  resize: none;

  &::placeholder {
    color: var(--gray400);
  }
`;
