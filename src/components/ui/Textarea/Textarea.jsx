/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Textarea = ({ id, name, placeholder, onChange, onBlur, ...props }) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      css={TextareaStyle(props.maxHeight)}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default Textarea;

const TextareaStyle = (maxHeight) => css`
  font-size: 1rem;
  padding: 16px 20px;
  background: var(--gray200);
  border-radius: var(--border-radius-sm);
  border: none;
  resize: none;
  height: var(--form-input-max-height);
  max-height: ${maxHeight !== "auto" ? `${maxHeight}px` : maxHeight};

  &::placeholder {
    color: var(--gray400);
  }
`;
