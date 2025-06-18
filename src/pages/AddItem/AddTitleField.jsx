import { addItemStore, useSelector } from './addItemStore';

function AddTitleField({ name }) {
  const inputValue = useSelector((state) => state.values[name]) || '';
  const updateFieldState = addItemStore((state) => state.updateFieldValue);

  function handleChange(e) {
    updateFieldState(name, e.target.value);
  }

  return (
    <div>
      <label htmlFor="title-input">상품명</label>
      <input
        onChange={handleChange}
        value={inputValue}
        type="text"
        id="title-input"
        name="title"
        placeholder="상품명을 입력해주세요"
      />
    </div>
  );
}

export default AddTitleField;
