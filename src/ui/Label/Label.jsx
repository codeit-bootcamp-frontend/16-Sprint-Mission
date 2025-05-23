/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Label = ({ inputId, children }) => {
  return (
    <label htmlFor={inputId} css={LabelStyle}>
      {children}
    </label>
  );
};

export default Label;

const LabelStyle = css`
  font-size: 18px;
  font-weight: 700;
`;
