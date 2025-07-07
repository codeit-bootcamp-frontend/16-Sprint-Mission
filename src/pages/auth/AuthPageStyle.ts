/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BREAKPOINTS } from "@/constants/responsive";
import FormStyle from "@/components/Form/FormStyle";

const AuthPageStyle = css`
  ${FormStyle};

  /*================ 로그인, 회원가입 ================*/
  .form {
    max-width: 400px;
    padding: 0 16px;
  }

  .form-logo {
    width: 198px;
    margin: 0 0 2.5rem;
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

  /* 로그인 */
  .login .form-container {
    padding: 80px 0;
  }

  /* 회원가입 */
  .signup .form-container {
    padding-top: var(--form-padding-top);
    padding-bottom: 178px;
  }

  /*================ 반응형 ================*/
  /* Tablet */
  @media (min-width: 640px) {
    .form {
      max-width: 640px;
    }

    .form-logo {
      width: 396px;
    }
  }

  @media (min-width: ${BREAKPOINTS.tablet}px) {
    .form {
      max-width: 40rem;
    }
  }
`;

export default AuthPageStyle;
