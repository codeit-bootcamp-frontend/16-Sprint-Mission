import AddDescriptionField from './AddDescriptionField';
import AddImageField from './AddImageField';
import { useSelector } from './addItemStore';
import AddPriceField from './AddPriceField';
import AddTagField from './AddTagField';
import AddTitleField from './AddTitleField';
import styles from './styles/AddItem.module.css';

function AddItem() {
  const titleFilled = useSelector((state) => state.isFilled.title) || false;
  const descriptionFilled =
    useSelector((state) => state.isFilled.description) || false;
  const priceFilled = useSelector((state) => state.isFilled.price) || false;
  const tagFilled = useSelector((state) => state.isFilled.tag) || false;

  const isReady = titleFilled && descriptionFilled && priceFilled && tagFilled;

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
