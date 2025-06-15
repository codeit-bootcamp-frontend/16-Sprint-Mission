import React from "react";
import styles from './styles/AddDescriptionField.module.css'

function AddDescriptionField(props) {
  const {value, checkFilled, name } = props;

  function handleChange(e) {
    checkFilled(name, e.target.value);
  }

  return (
    <div className={styles.descriptionField}>
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
