/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled/macro";
import { useEffect, useState } from "react";
import { InputStyle } from "../Input/Input";
import { validateTag } from "../../utils/validators";
import Tag from "../Tag";

const TagsInput = ({ id, placeholder, onTagsChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const newTag = inputValue.trim();
    const { isValid, message } = validateTag(newTag, tags);

    if (!isValid) {
      setErrorMessage(message);
      return;
    }

    const updatedTags = [...tags, newTag];
    setTags(updatedTags);
    onTagsChange(updatedTags);
    setInputValue("");
    setErrorMessage("");
  };

  const removeTag = (tag) => {
    const updatedTags = tags.filter((prevTag) => prevTag !== tag);
    setTags(updatedTags);
    onTagsChange(updatedTags);
  };

  useEffect(() => {
    if (tags.length === 0) setErrorMessage("");
  }, [tags]);

  return (
    <div css={TagsInputStyle}>
      <input
        type="text"
        id={id}
        css={InputStyle}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
      />
      {errorMessage && <div css={errorMessageStyle}>{errorMessage}</div>}
      <TagList>
        {tags.map((tag, i) => (
          <Tag key={`tag ${i}`} onClick={() => removeTag(tag)}>
            {tag}
          </Tag>
        ))}
      </TagList>
    </div>
  );
};

export default TagsInput;

const TagsInputStyle = css`
  display: flex;
  flex-direction: column;
  gap: 14px;

  input {
    width: 100%;
  }
`;

const TagList = styled.div`
  display: flex;
  gap: 12px;
`;

const errorMessageStyle = css`
  display: block;
  color: var(--error-color);
`;
