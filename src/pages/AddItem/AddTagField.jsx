import React, { useEffect, useState } from "react";
import deleteIcon from "@assets/icon/ic_X.png";
import styles from './styles/AddTagField.module.css'

function AddTagField(props) {
  const { value, checkFilled, name } = props;
  const [tagList, setTagList] = useState([]);

  function handleChange(e) {
    checkFilled(name, e.target.value);
  }
  // => 이걸 단순 문자열의 길이X taglist가 현재 배열이니까 tagList.length

  useEffect(()=>{
    //태그리스트 변경 시 유효한 상태인지 다시 평가
    checkFilled('tag', value)

    //엔터 눌러서 태그리스트에 추가되면 인풋 칸 초기화
    checkFilled('tag', value, true)
  },[tagList])


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
