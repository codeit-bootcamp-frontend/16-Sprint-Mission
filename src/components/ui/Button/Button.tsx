/** @jsxImportSource @emotion/react */
import { ReactNode, MouseEvent, CSSProperties } from "react";
import { css } from "@emotion/react";
import { styles } from "./ButtonStylesMap";

type Size = keyof typeof styles.size; // 'sm' | 'lg', ...
type Variant = keyof typeof styles.variant; // 'primary' | 'secondary', ...

interface ButtonStyleProps {
  size?: Size;
  variant?: Variant;
  round?: string;
}

interface ButtonProps extends ButtonStyleProps {
  id?: string;
  type?: "button" | "submit" | undefined;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}

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
}: ButtonProps) => {
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

const ButtonStyle = (props: ButtonStyleProps) => css`
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

  ${props.size && styles.size[props.size]}
  ${props.variant && styles.variant[props.variant]}
  ${props.round &&
  css`
    border-radius: var(--border-radius-lg);
  `}
`;
