/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Avatar = ({ imgSrc, onClick, className }) => {
  return (
    <button
      css={AvatarStyle}
      className={`avatar ${className}`}
      onClick={onClick}
    >
      <img src={imgSrc} alt="프로필 이미지" />
    </button>
  );
};

export default Avatar;

const AvatarStyle = css`
  width: 40px;
  height: 40px;
`;
