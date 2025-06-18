/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = ({
  type = "button",
  variant,
  size,
  children,
  className = "",
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      css={[styles.size[size], styles.variant[variant]]}
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

const styles = {
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
      background: var(--primary-color);
      color: #fff;

      &:hover {
        background: var(--primary-hover-color);
      }

      &:active {
        background: var(--primary-click-color);
      }
    `,
  },
};
