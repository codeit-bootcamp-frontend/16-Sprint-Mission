/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const FormStyle = css`
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
  }

  .form-input-hint {
    display: block;
    margin: 8px 0 0 16px;
    font-size: 14px;
    font-weight: 600;
    color: var(--error-color);
  }
`;

export const FormHeaderStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    margin-bottom: 0;
  }
`;

export default FormStyle;
