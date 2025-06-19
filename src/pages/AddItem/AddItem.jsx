import AddDescriptionField from './AddDescriptionField';
import AddImageField from './AddImageField';
import { useSelector } from './addItemStore';
import AddPriceField from './AddPriceField';
import AddTagField from './AddTagField';
import AddTitleField from './AddTitleField';
import styles from './styles/AddItem.module.css';

function AddItem() {
  const isReady = useSelector((state) =>
    Object.values(state.isFilled).every((isFilled) => isFilled === true),
  );

  return (
    <main className={styles.addItem}>
      <div className={styles.addItemContainer}>
        <div className={styles.header}>
          <h2>상품 등록하기</h2>
          <button className={isReady ? styles.isActive : null}>등록</button>
        </div>
        <form className={styles.form}>
          <AddImageField />
          <AddTitleField name="title" />
          <AddDescriptionField name="description" />
          <AddPriceField name="price" />
          <AddTagField name="tag" />
        </form>
      </div>
    </main>
  );
}

export default AddItem;
