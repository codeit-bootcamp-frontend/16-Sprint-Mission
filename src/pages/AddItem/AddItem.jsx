import { useAddItem } from "@hooks/useAddItem.js";
import MemoizedDescriptionField from "./AddDescriptionField";
import AddImageField from "./AddImageField";
import MemoizedPriceField from "./AddPriceField";
import MemoizedTagField from "./AddTagField";
import MemoizedTitleField from "./AddTitleField";
import styles from "./styles/AddItem.module.css";

function AddItem() {
  const { checkFilled, getInputValues } = useAddItem();

  // const validField = ["title", "description", "price", "tag"];

  const titleField = getInputValues("title");
  const descriptionField = getInputValues("description");
  const priceField = getInputValues("price");
  const tagField = getInputValues("tag");

  let isReady =
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
          <AddImageField
            checkFilled={checkFilled}
            getInputValues={getInputValues}
          />
          <MemoizedTitleField
            checkFilled={checkFilled}
            value={titleField.inputValue}
            name="title"
          />
          <MemoizedDescriptionField
            checkFilled={checkFilled}
            value={descriptionField.inputValue}
            name="description"
          />
          <MemoizedPriceField
            checkFilled={checkFilled}
            value={priceField.inputValue}
            name="price"
          />
          <MemoizedTagField
            checkFilled={checkFilled}
            value={tagField.inputValue}
            name="tag"
          />
        </form>
      </div>
    </main>
  );
}

export default AddItem;
