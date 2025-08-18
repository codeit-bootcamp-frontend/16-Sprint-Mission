/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Textarea = ({ id, name, placeholder, onChange, onBlur, ...props }) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      css={TextareaStyle(props.maxheight, props.isError)}
      onChange={onChange}
      onBlur={onBlur}
      {...props}
    />
  );
};

export default Textarea;

const TextareaStyle = (
  maxheight = "var(--form-input-max-height)",
  isError = false
) => css`
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 16px 20px;
  background: var(--gray200);
  border-radius: var(--border-radius-sm);
  border: ${isError ? "1px solid var(--error-color)" : "1px solid transparent"};
  resize: none;
  height: var(--form-input-max-height);
  max-height: ${maxheight !== "auto" ? `${maxheight}px` : maxheight};
  line-height: 1.5;

  &::placeholder {
    color: var(--gray400);
  }
`;
