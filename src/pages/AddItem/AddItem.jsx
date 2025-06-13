import styles from "./AddItem.module.css";
import AddImageField from "./AddImageField";
import MemoizedTitleField from "./AddTitleField";
import MemoizedPriceField from "./AddPriceField";
import MemoizedDescriptionField from "./AddDescriptionField";
import MemoizedTagField from "./AddTagField";
import { useAddItem } from "@hooks/useAddItem.js";

function AddItem() {
  const {checkFilled, getInputValues} = useAddItem();

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


// 이름 잘 다듬기
//파일 인풋 비제어 컴포넌트로 추가하기 
//태그 엔터 누르면 지워지기 인풋

  return (
    <main className={styles[`main__add-item`]}>
      <div className={styles[`add-item__container`]}>
        <div className={styles[`add-item__header`]}>
          <h2>상품 등록하기</h2>
          <button className={isReady ? styles.isActive : ""}>등록</button>
        </div>
        <form className={styles[`add-item__form`]}>
          <AddImageField
            checkFilled={checkFilled}
            getInputValues={getInputValues}
            className={styles[`form__field-image`]}
          />
          <MemoizedTitleField
            checkFilled={checkFilled}
            value={titleField.inputValue}
            name="title"
            className={styles[`form__field-title`]}
          />
          <MemoizedDescriptionField
            checkFilled={checkFilled}
            value={descriptionField.inputValue}
            name="description"
            className={styles[`form__field-description`]}
          />
          <MemoizedPriceField
            checkFilled={checkFilled}
            value={priceField.inputValue}
            name="price"
            className={styles[`form__field-price`]}
          />
          <MemoizedTagField
            checkFilled={checkFilled}
            value={tagField.inputValue}
            name="tag"
            className={styles[`form__field-tag`]}
          />
        </form>
      </div>
    </main>
  );
}

export default AddItem;
