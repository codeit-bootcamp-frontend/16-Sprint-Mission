import { useState } from "react";
import Textfield from "./Textfield";
import Tag from "./Tag";
import "./css/TagInput.css";

const TagInput = ({
  tagList,
  isValid,
  message,
  onChange = () => {},
  onAdd = () => {},
  onDelete = () => {},
}) => {
  const [tagInputVal, setTagInputVal] = useState("");
  const onKeyDown = (e) => {
    // 엔터 입력 시 추가
    if (e.key === "Enter") {
      const newVal = e.target.value.replaceAll(" ", "");
      onAdd(newVal);
      setTagInputVal("");
    }
  };

  const onChangeVal = (name, value) => {
    setTagInputVal(value);
    onChange(value);
  };

  const handleOnClickDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="taginput">
      <Textfield
        name="tag"
        value={tagInputVal}
        placeholder="태그를 입력해주세요"
        isValid={isValid}
        message={message}
        onKeyDown={onKeyDown}
        onChange={(e) => onChangeVal(e.target.name, e.target.value)}
        className="taginput__textfield"
      />
      <div className="taginput__list">
        {tagList.map((tag, index) => (
          <Tag
            key={`${tag}-${index}`}
            className="taginput__tag"
            onClickDelete={() => handleOnClickDelete(index)}
          >
            {tag}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
