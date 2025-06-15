import React from "react";

function parsePriceInput(text) {
  const parsedText = Number(text.split(",").join(""));
  return parsedText;
}

function AddPriceField(props) {
  const { value, checkFilled, name } = props;

  function handleChange(e) {
    const parsedPrice = parsePriceInput(e.target.value);

    if (isNaN(parsedPrice)) return;
    checkFilled(name, parsedPrice);
  }

  return (
    <div>
      <label htmlFor="price-input">판매가격</label>
      <input
        onChange={handleChange}
        value={value.toLocaleString("ko-KR")}
        type="text"
        id="price-input"
        name="price"
        placeholder="판매 가격을 입력해주세요"
      />
    </div>
  );
}

const MemoizedPriceField = React.memo(AddPriceField);
export default MemoizedPriceField;
