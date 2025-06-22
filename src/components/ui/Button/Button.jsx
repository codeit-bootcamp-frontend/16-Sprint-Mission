/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Button = ({
  type = "button",
  variant,
  size,
  round,
  children,
  className = "",
  disabled,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      css={ButtonStyle({ size, variant, round })}
      className={className}
      style={props.style}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

const ButtonStyle = (props) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  ${ButtonStylesMap.size[props.size]}
  ${ButtonStylesMap.variant[props.variant]}
  ${props.round &&
  css`
    border-radius: var(--border-radius-lg);
  `}
`;

const ButtonStylesMap = {
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
    outlined: css`
      background: #fff;
      border: 1px solid var(--gray300);
      color: var(--gray500);
    `,
  },
  round: css`
    border-radius: var(--border-radius-lg);
  `,
};
