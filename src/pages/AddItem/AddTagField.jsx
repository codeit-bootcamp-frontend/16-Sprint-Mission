import React, { useEffect } from "react";
import deleteIcon from "@assets/icon/ic_X.png";
import styles from "./styles/AddTagField.module.css";

function AddTagField(props) {
  const { value, updateFieldState, name, tagList, setTagList } = props;

  function handleChange(e) {
    updateFieldState(name, e.target.value);
  }

  useEffect(() => {
    updateFieldState("tag", value, tagList);
  }, [tagList]);

  function handleClick(e) {
    const target = e.target.dataset.index;

    setTagList(tagList.filter((_, i) => i !== Number(target)));
  }

  function handleKeyDown(e) {
    if (e.target.value.length === 0) return;
    if (e.key !== "Enter") return;

    setTagList((prevList) => {
      return [...prevList, e.target.value];
    });
  }

  return (
    <div className={styles.tagField}>
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
            <li key={`${item + i}`}>
              #{item}
              <img
                data-index={i}
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
