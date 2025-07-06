/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { InputStyle } from "../Input/Input";
import { validateTags } from "../../../utils/validators";
import debounce from "../../../utils/debounce";
import TagList from "./TagList";

const ADD_TAG_DEBOUNCE_MS = 100;

const TagsInput = ({ id, placeholder, tags, isFormTag, onTagsChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);

  const handleTagsError = () => {
    if (tags.length === 0) {
      setErrorMessage("태그를 1개 이상 등록해주세요.");
    } else {
      setErrorMessage("");
    }
  };

  const handleAddTag = debounce((e) => {
    if (e.key !== "Enter") return;
    if (e.isComposing) return; // 한글 중복 입력 방지
    e.preventDefault();

    const newTag = inputValue.trim();
    const { isValid, message } = validateTags(newTag, tags);

    if (!isValid) {
      setErrorMessage(message);
      return;
    }

    const updatedTags = [...tags, newTag];
    onTagsChange(updatedTags);

    setInputValue("");
    setErrorMessage("");
  }, ADD_TAG_DEBOUNCE_MS);

  const handleRemoveTag = (tag) => {
    const updatedTags = tags.filter((prevTag) => prevTag !== tag);
    onTagsChange(updatedTags);

    if (updatedTags.length === 0) {
      setErrorMessage("태그를 1개 이상 등록해주세요.");
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div css={TagsInputStyle}>
      <input
        type="text"
        id={id}
        css={InputStyle(errorMessage)}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleAddTag}
        onBlur={handleTagsError}
        placeholder={placeholder}
      />
      {errorMessage && <div css={errorMessageStyle}>{errorMessage}</div>}
      <TagList tags={tags} removeTag={handleRemoveTag} isFormTag={isFormTag} />
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

const errorMessageStyle = css`
  display: block;
  margin-left: 16px;
  font-size: 14px;
  font-weight: 600;
  color: var(--error-color);
`;
