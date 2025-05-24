/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { InputStyle } from "./Input";

const TagInput = ({ id, placeholder, onAddTag }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      onAddTag(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <input
      type="text"
      id={id}
      css={InputStyle}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
    />
  );
};

export default TagInput;
