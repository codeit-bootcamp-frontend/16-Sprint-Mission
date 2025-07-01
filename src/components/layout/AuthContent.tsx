/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { PageContentType } from "./PageContent";
import { BREAKPOINTS } from "@/constants/responsive";

const AuthContent = ({ children, className }: PageContentType) => {
  return (
    <section css={AuthContentStyle} className={className}>
      {children}
    </section>
  );
};

export default AuthContent;

const AuthContentStyle = css`
  /* mobile */
  max-width: 400px;
  margin: 0 auto;
  padding: 0 16px;

  .form-logo {
    width: 198px;
    margin: 0 0 2.5rem;
  }

  .form-footer {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
  }

  .form-footer-link {
    text-decoration: underline;
    color: var(--primary-color);
    font-size: 14px;
  }

  .easy-login {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 8px 0;
    padding: 16px 24px;
    border-radius: var(--border-radius-xs);
    background: var(--background-blue-light);
    font-size: 16px;
    color: var(--gray800);
  }

  .easy-login-icons {
    display: flex;
    gap: 1rem;
  }

  /* tablet */
  @media (min-width: 640px) {
    max-width: 640px;

    .form-logo {
      width: 396px;
    }

    .easy-login {
      margin: 0;
    }
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    max-width: 40rem;
  }

  /* desktop */
  @media (min-width: ${BREAKPOINTS.desktop}px) {
    .login .form-container {
      padding-top: 0;
    }
  }
`;
