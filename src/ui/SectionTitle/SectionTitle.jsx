/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SectionTitle = ({ title, className }) => {
  return (
    <h4 className={className} css={SectionTitleStyle}>
      {title}
    </h4>
  );
};

export default SectionTitle;

const SectionTitleStyle = css`
  width: auto;
  margin-bottom: 1rem;
  margin-right: auto;
  font-size: 20px;
  font-weight: 700;
`;
