/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const IconButton = ({
  imgSrc,
  imgAlt,
  color,
  radius = "default",
  cssOverride: customStyle,
  onClick,
}) => {
  return (
    <button
      css={[IconButtonStyle({ color, radius }), customStyle]}
      onClick={onClick}
    >
      <img src={imgSrc} alt={imgAlt} />
    </button>
  );
};

export default IconButton;

const IconButtonStyle = ({ color, radius }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  aspect-ratio: 1/1;
  border-radius: ${radius === "round" ? "50%" : "8px"};
  background-color: ${color === "primary"
    ? "var(--primary-color)"
    : "var(--gray400)"};

  img {
    width: 8px;
    aspect-ratio: 1/1;
  }
`;
