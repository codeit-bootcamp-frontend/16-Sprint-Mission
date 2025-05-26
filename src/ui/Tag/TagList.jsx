/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tag from "../Tag";

const TagList = ({ tags }) => {
  return (
    <div css={TagListStyle}>
      {tags.map((tag) => (
        <Tag key="tag">{tag}</Tag>
      ))}
    </div>
  );
};

export default TagList;

const TagListStyle = css`
  display: flex;
  gap: 12px;
`;
