/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SectionSubTitle = ({ title, className }) => {
  return (
    <h5 className={className} css={SectionSubTitleStyle}>
      {title}
    </h5>
  );
};

export default SectionSubTitle;

const SectionSubTitleStyle = css`
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: 700;
`;
