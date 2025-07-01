/** @jsxImportSource @emotion/react */
import { MouseEvent } from "react";
import { css } from "@emotion/react";
import type { CSSInterpolation } from "@emotion/serialize";

interface IconButtonStyleProps {
  color?: string;
  radius?: string;
  width?: number;
  height?: number;
  hasBgColor?: boolean;
}

interface IconButtonProps extends IconButtonStyleProps {
  type?: "button" | "submit" | "reset" | undefined;
  imgSrc: string;
  imgAlt?: string;
  cssOverride?: CSSInterpolation;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  id?: string;
  title?: string;
}

const IconButton = ({
  type = "button",
  imgSrc,
  imgAlt,
  color,
  radius = "default",
  cssOverride: customStyle,
  className,
  width,
  height,
  hasBgColor = true,
  onClick,
}: IconButtonProps) => {
  return (
    <button
      type={type}
      css={[IconButtonStyle({ color, radius, hasBgColor }), customStyle]}
      className={className}
      onClick={onClick}
    >
      <img src={imgSrc} alt={imgAlt} width={width} height={height} />
    </button>
  );
};

export default IconButton;

const IconButtonStyle = ({
  color,
  radius,
  hasBgColor,
}: IconButtonStyleProps) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  aspect-ratio: 1/1;
  border-radius: ${radius === "round" ? "50%" : "8px"};
  background-color: ${hasBgColor ? "var(--gray400)" : "transparent"};
`;
