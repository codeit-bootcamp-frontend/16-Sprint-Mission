/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IconButton from "../Button/IconButton";
import closeIcon from "../../../assets/images/ic_close_white.svg";

const Tag = ({ children, isFormTag, onClick }) => {
  return (
    <span css={tagStyle}>
      #{children}
      {isFormTag && (
        <IconButton
          imgSrc={closeIcon}
          imgAlt="첨부 이미지 제거"
          radius="round"
          onClick={onClick}
        />
      )}
    </span>
  );
};

export default Tag;

const tagStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--gray200);
  border-radius: var(--tag-border-radius);
  font-size: 1rem;
`;
