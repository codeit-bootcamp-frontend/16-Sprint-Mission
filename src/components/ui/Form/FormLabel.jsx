/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormLabel = ({ inputId, children, size, className }) => {
  return (
    <label
      htmlFor={inputId}
      css={FormLabelStyle({ size })}
      className={className}
    >
      {children}
    </label>
  );
};

export default FormLabel;

const FormLabelStyle = ({ size }) => css`
  margin-bottom: 1rem;
  font-size: ${size === "xs" ? 16 : 18}px;
  font-weight: 700;
`;
