import React from "react";

function AddTitleField(props) {
  const { value, checkFilled, name } = props;

  function handleChange(e) {
    checkFilled(name, e.target.value);
  }

  return (
    <div>
      <label htmlFor="title-input">상품명</label>
      <input
        onChange={handleChange}
        value={value}
        type="text"
        id="title-input"
        name="title"
        placeholder="상품명을 입력해주세요"
      />
    </div>
  );
}

const MemoizedTitleField = React.memo(AddTitleField);
export default MemoizedTitleField;
