/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormLabel = ({ inputId, children, size }) => {
  return (
    <label htmlFor={inputId} css={FormLabelStyle({ size })}>
      {children}
    </label>
  );
};

export default FormLabel;

const FormLabelStyle = ({ size }) => css`
  font-size: ${size === "xs" ? 16 : 18}px;
  font-weight: 700;
`;
