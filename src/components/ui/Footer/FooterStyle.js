/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FooterStyle = css`
  background: var(--gray900);
  color: var(--gray200);

  .footer-container {
    display: flex;
    justify-content: space-between;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: var(--footer-padding);
    flex-wrap: wrap;
    gap: 24px;
    font-size: 16px;
  }

  .copyright {
    order: 3;
    width: 100%;
    padding-top: 36px;
    color: var(--gray400);
  }

  .footer-menu {
    display: flex;
    gap: 30px;
  }

  .sns {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;

export default FooterStyle;
