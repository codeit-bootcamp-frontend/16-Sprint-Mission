import { addItemStore, useSelector } from './addItemStore';

function parsePriceInput(text) {
  const parsedText = Number(text.split(',').join(''));
  return parsedText;
}

function AddPriceField({ name }) {
  const inputValue = useSelector((state) => state.values[name]) || '';
  const updateFieldState = addItemStore((state) => state.updateFieldValue);

  function handleChange(e) {
    const parsedPrice = parsePriceInput(e.target.value);

    if (isNaN(parsedPrice)) return;
    updateFieldState(name, parsedPrice);
  }

  return (
    <div>
      <label htmlFor="price-input">판매가격</label>
      <input
        onChange={handleChange}
        value={inputValue.toLocaleString('ko-KR')}
        type="text"
        id="price-input"
        name="price"
        placeholder="판매 가격을 입력해주세요"
      />
    </div>
  );
}

export default AddPriceField;
