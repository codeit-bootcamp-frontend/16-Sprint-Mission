/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styles } from "./ButtonStylesMap";

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
  transition: background-color 0.3s, border 0.3s;

  ${!props.variant &&
  css`
    &:hover {
      background-color: var(--gray300);
    }
  `}

  ${styles.size[props.size]}
  ${styles.variant[props.variant]}
  ${props.round &&
  css`
    border-radius: var(--border-radius-lg);
  `}
`;
