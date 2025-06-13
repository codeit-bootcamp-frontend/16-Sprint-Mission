import React from "react";

function AddPriceField(props) {
  const { className, value, checkFilled, name } = props;

  function handleChange(e) {
    checkFilled(name, e.target.value);
  }

  return (
    <div className={className}>
      <label htmlFor="price-input">판매가격</label>
      <input
        onChange={handleChange}
        value={value}
        type="number"
        id="price-input"
        name="price"
        placeholder="판매 가격을 입력해주세요"
      />
    </div>
  );
}

const MemoizedPriceField = React.memo(AddPriceField);
export default MemoizedPriceField;
