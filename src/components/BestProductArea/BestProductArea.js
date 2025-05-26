import ProductList from "../ProductList/ProductList";
import styles from "./BestProductArea.module.scss";

const BestProductArea = () => {
  return (
    <>
      <h2 className={styles.bestProductArea__title}>베스트 상품</h2>
      <div className={styles.bestProductArea__content}>
        <ProductList type="best" />
      </div>
    </>
  );
};

export default BestProductArea;
