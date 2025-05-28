/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormLabel = ({ inputId, children }) => {
  return (
    <label htmlFor={inputId} css={FormLabelStyle}>
      {children}
    </label>
  );
};

export default FormLabel;

const FormLabelStyle = css`
  font-size: 18px;
  font-weight: 700;
`;
