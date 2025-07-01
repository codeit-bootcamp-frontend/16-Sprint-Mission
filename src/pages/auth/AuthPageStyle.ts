/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const AuthPageStyle = css`
  /* auth 폼 공통 */
  .form-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .form-label {
    display: block;
    margin-bottom: 1rem;
    font-size: var(--form-label-font-size);
    font-weight: 700;
    color: var(--gray800);
  }

  .form-input {
    width: 100%;
    padding: 15px 24px;
    background: var(--gray100);
    border-radius: var(--border-radius-sm);
    font-size: 16px;
    line-height: 26px;
  }
  .form-input.invalid {
    border: 1px solid var(--error-color);
  }

  .form-input-hint {
    display: block;
    margin: 8px 0 0 16px;
    font-size: 14px;
    font-weight: 600;
    color: var(--error-color);
  }

  .visible-wrap .form-input {
    padding-right: 60px;
  }

  .form-logo img {
    height: auto;
  }

  .form-contents {
    display: flex;
    flex-direction: column;
    gap: var(--form-contents-gap);
    width: 100%;
  }

  .visible-wrap {
    position: relative;
  }

  .form .btn-lg {
    width: 100%;
  }

  .btn-password-visible {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
    width: 24px;
    height: 24px;
    z-index: 1;
    background: url("/images/ic_visibility_off.svg") no-repeat center;
  }
  .btn-password-visible.on {
    background: url("/images/ic_visibility_on.svg") no-repeat center;
  }

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

  /* 간편 로그인 */
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

  /*================ 반응형 ================*/
  /* Tablet */
  @media (min-width: 640px) {
    .form {
      max-width: 640px;
    }

    .form-logo {
      width: 396px;
    }

    .easy-login {
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    .form {
      max-width: 40rem;
    }
  }
`;

export default AuthPageStyle;
