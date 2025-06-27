/** @jsxImportSource @emotion/react */
import { BREAKPOINTS } from "@/constants/responsive";
import { css } from "@emotion/react";

const Divider = (props) => {
  return <hr css={DividerStyle} style={props.style}></hr>;
};

export default Divider;

const DividerStyle = css`
  border: none;
  background-color: var(--gray300);
  height: 1px;
  margin-bottom: 16px;

  @media (min-width: ${BREAKPOINTS.desktop}px) {
    margin-bottom: 24px;
  }
`;
