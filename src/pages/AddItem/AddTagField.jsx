import React, { useState } from "react";
import deleteIcon from "@assets/icon/ic_X.png";

function AddTagField(props) {
  const { className, value, checkFilled, name } = props;
  const [tagList, setTagList] = useState([]);

  function handleChange(e) {
    checkFilled(name, e.target.value);
  }

  function handleClick(e) {
    const target = e.target.id;

    setTagList(tagList.filter((_, i) => i !== Number(target)));
  }

  function handleKeyDown(e) {
    if (e.target.value.length === 0) return;
    if (e.key !== "Enter") return;

    setTagList((prevList) => {
      return [...prevList, e.target.value];
    });
    e.target.value = "";
  }

  return (
    <div className={className}>
      <label htmlFor="tag-input">태그</label>
      <input
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={value}
        type="text"
        id="tag-input"
        name="tag"
        placeholder="태그를 입력해주세요"
      />

      <ul>
        {tagList.map((item, i) => {
          return (
            <li key={`tag${i}`}>
              #{item}
              <img
                id={i}
                onClick={handleClick}
                src={deleteIcon}
                alt="태그 삭제 버튼"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const MemoizedTagField = React.memo(AddTagField);
export default MemoizedTagField;
