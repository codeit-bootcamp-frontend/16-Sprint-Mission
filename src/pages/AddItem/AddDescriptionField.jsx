import { useAddItemStore, useSelector } from './addItemStore';
import styles from './styles/AddDescriptionField.module.css';

function AddDescriptionField({ name }) {
  const inputValue = useSelector((state) => state.values[name]) || '';
  const updateFieldState = useAddItemStore((state) => state.updateFieldValue);

  function handleChange(e) {
    updateFieldState(name, e.target.value);
  }

  return (
    <div className={styles.descriptionField}>
      <label htmlFor="description-input">상품 소개</label>
      <textarea
        onChange={handleChange}
        value={inputValue}
        id="description-input"
        name="description"
        placeholder="상품 소개를 입력해주세요"
      />
    </div>
  );
}

export default AddDescriptionField;
