/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import closeIcon from "../../assets/images/ic_close_white.svg";

const Tag = ({ children, onClick }) => {
  return (
    <span css={tagStyle}>
      #{children}
      <button css={deleteButtonStyle} type="button" onClick={onClick}>
        <img src={closeIcon} alt="삭제" width="8" height="8" />
      </button>
    </span>
  );
};

export default Tag;

const tagStyle = css`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background-color: var(--gray200);
  border-radius: var(--tag-border-radius);
  font-size: 1rem;
`;

const deleteButtonStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  aspect-ratio: 1/1;
  margin-left: 8px;
  background-color: var(--gray400);
  color: #fff;
  border-radius: 50%;

  img {
    width: 8px;
    aspect-ratio: 1/1;
  }
`;
