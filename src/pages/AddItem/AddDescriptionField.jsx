import React from "react";

function AddDescriptionField(props) {
  const { className, value, checkFilled, name } = props;


  function handleChange(e) {
    checkFilled(name, e.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor="description-input">상품 소개</label>
      <textarea
        onChange={handleChange}
        value={value}
        type="textarea"
        id="description-input"
        name="description"
        placeholder="상품 소개를 입력해주세요"
      />
    </div>
  );
}

const MemoizedDescriptionField = React.memo(AddDescriptionField);
export default MemoizedDescriptionField;
