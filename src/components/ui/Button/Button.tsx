/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { styles } from "./ButtonStylesMap";
import { ButtonProps } from "@/types/button";

const Button = ({
  type = "button",
  variant,
  size,
  shape,
  children,
  className = "",
  disabled,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      css={[
        baseStyle,
        size && styles.size[size],
        variant && styles.variant[variant],
        shape && styles.shape[shape],
        !variant && defaultHoverStyle,
      ]}
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

const baseStyle = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: background-color 0.3s, border 0.3s;
`;

const defaultHoverStyle = css`
  &:hover {
    background-color: var(--gray300);
  }
`;
