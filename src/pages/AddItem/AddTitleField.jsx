import React from "react";

function AddTitleField(props) {
  const { className, value, checkFilled, name } = props;

  function handleChange(e) {
    checkFilled(name, e.target.value);
  }

  return (
    <div className={className}>
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
