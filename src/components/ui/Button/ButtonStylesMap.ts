/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const primaryBase = css`
  background: var(--primary-color);
  color: #fff;

  &:hover {
    background: var(--primary-hover-color);
  }

  &:active {
    background: var(--primary-click-color);
  }
`;

export const styles = {
  size: {
    sm: css`
      padding: 12px 24px;
      font-size: 16px;
      border-radius: var(--border-radius-xs);
    `,
    lg: css`
      padding: 12px;
      border-radius: var(--border-radius-lg);
      font-size: 20px;
      font-weight: 600;
      line-height: 32px;
    `,
  },
  variant: {
    primary: css`
      ${primaryBase}
    `,
    outlined: css`
      background: #fff;
      border: 1px solid var(--gray300);
      color: var(--gray500);

      &:hover {
        border: 1px solid var(--primary-color);
      }
    `,
    bottomPrimary: css`
      ${primaryBase};
      padding: 14px 40px;
      font-size: 18px;
      gap: 8px;
    `,
    bannerPrimary: css`
      ${primaryBase};
      width: 356px;
    `,
  },
  round: css`
    border-radius: var(--border-radius-lg);
  `,
};
