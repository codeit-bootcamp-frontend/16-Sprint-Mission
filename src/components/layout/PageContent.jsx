/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const PageContent = ({ children }) => {
  return <section css={PageContentStyle}>{children}</section>;
};

export default PageContent;

const PageContentStyle = css`
  /* mobile */
  width: 100%;
  margin: 0 auto;
  padding: 16px;

  /* tablet */
  @media (min-width: 600px) {
    padding: 24px;
  }

  /* desktop */
  @media (min-width: 1280px) {
    width: var(--page-content-width);
    margin: 24px auto;
    padding: 0;
    padding-bottom: 60px;
  }

  .page-footer {
    margin-top: 64px;
    text-align: center;
  }
`;
