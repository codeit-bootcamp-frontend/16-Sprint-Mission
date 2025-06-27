import { useEffect, useState } from "react";
import { styled } from "styled-components";
import TagList from "./TagList";

function TagInput({ handleTagInput, type, name, placeholder }) {
  const [tags, setTags] = useState([]);
  const [string, setString] = useState("");
  const [id, setId] = useState(0);

  const handleChange = (e) => {
    setString(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === " " && string !== "" && string !== " ") {
      setTags((prev) => [...prev, { id: id, tagName: string }]);
      setString("");
      setId((prev) => prev + 1);
    }
  };

  const deleteTag = (id) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  useEffect(() => {
    handleTagInput(tags);
  }, [tags]);

  return (
    <InputContainer>
      <InputComponent
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={string.trimEnd()}
        type={type}
        name={name}
        placeholder={placeholder}
      />
      <TagList tags={tags} deleteTag={deleteTag} />
    </InputContainer>
  );
}

export default TagInput;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 56px;
`;

const InputComponent = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: var(--gray-100);
  border: 0;
  border-radius: 12px;
  font-size: 16px;
  color: var(--secondary-800);
  padding: 16px 24px;
`;
