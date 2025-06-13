import ProductDataProvider from "./ProductDataProvider";
import ProductsAll from "./ProductsAll";
import ProductsFavorite from "./ProductsFavorite";
import styles from "./styles/item.module.css";

function Items() {
  return (
    <main className={styles.items}>
      <div className={styles.items__container}>
        <ProductsFavorite />
        <ProductDataProvider>
          <ProductsAll />
        </ProductDataProvider>
      </div>
    </main>
  );
}

export default Items;
