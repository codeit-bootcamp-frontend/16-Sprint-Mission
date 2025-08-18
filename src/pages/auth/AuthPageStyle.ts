/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BREAKPOINTS } from "@/constants/responsive";

const AuthPageStyle = css`
  .form {
    max-width: 400px;
    padding: 0 16px;
  }

  .form-logo {
    display: flex;
    justify-content: center;
    width: 100%;
    margin: 0 0 2.5rem;

    img {
      max-width: 198px;
    }
  }

  .form-footer {
    display: flex;
    justify-content: center;
    gap: 4px;
    font-size: 14px;
    font-weight: 500;
    color: var(--gray800);
  }

  .form-footer-link {
    text-decoration: underline;
    color: var(--primary-color);
    font-size: 14px;
  }

  .login .form-container {
    padding: 80px 0;
  }

  .signup .form-container {
    padding-top: var(--form-padding-top);
    padding-bottom: 178px;
  }

  @media (min-width: 640px) {
    .form {
      max-width: 640px;
    }

    .form-logo {
      img {
        max-width: 396px;
      }
    }
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    .form {
      max-width: 40rem;
    }
  }
`;

export default AuthPageStyle;
