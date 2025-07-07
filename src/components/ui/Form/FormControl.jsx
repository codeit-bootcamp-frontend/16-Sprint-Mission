/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormControl = ({ children }) => {
  return <div css={FormControlStyle}>{children}</div>;
};

export default FormControl;

const FormControlStyle = css`
  display: flex;
  flex-direction: column;
`;
