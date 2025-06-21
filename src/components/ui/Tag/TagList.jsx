/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Tag from "./Tag";

const TagList = ({ tags, removeTag, isFormTag }) => {
  return (
    <div className="tag-list" css={TagListStyle}>
      {tags.map((tag, i) => (
        <Tag
          key={`tag ${i}`}
          onClick={() => removeTag(tag)}
          isFormTag={isFormTag}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
};

export default TagList;

const TagListStyle = css`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
