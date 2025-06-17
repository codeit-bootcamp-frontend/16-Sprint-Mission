import { useState } from 'react';
import { useAddItemFormState } from '@hooks/useAddItemFormState .js';
import AddDescriptionField from './AddDescriptionField';
import AddImageField from './AddImageField';
import AddPriceField from './AddPriceField';
import AddTagField from './AddTagField';
import AddTitleField from './AddTitleField';
import styles from './styles/AddItem.module.css';

function AddItem() {
  const { updateFieldState, getFieldState } = useAddItemFormState();
  const [tagList, setTagList] = useState([]); //추후 요청 보낼 때 여기서 보내야하니까 프롭으로 내려주기
  const titleField = getFieldState('title');
  const descriptionField = getFieldState('description');
  const priceField = getFieldState('price');
  const tagField = getFieldState('tag');

  const isReady =
    titleField.isPassed &&
    descriptionField.isPassed &&
    priceField.isPassed &&
    tagField.isPassed;

  return (
    <main className={styles.addItem}>
      <div className={styles.addItemContainer}>
        <div className={styles.header}>
          <h2>상품 등록하기</h2>
          <button className={isReady ? styles.isActive : null}>등록</button>
        </div>
        <form className={styles.form}>
          <AddImageField />
          <AddTitleField
            updateFieldState={updateFieldState}
            value={titleField.inputValue}
            name="title"
          />
          <AddDescriptionField
            updateFieldState={updateFieldState}
            value={descriptionField.inputValue}
            name="description"
          />
          <AddPriceField
            updateFieldState={updateFieldState}
            value={priceField.inputValue}
            name="price"
          />
          <AddTagField
            updateFieldState={updateFieldState}
            value={tagField.inputValue}
            name="tag"
            tagList={tagList}
            setTagList={setTagList}
          />
        </form>
      </div>
    </main>
  );
}

export default AddItem;
