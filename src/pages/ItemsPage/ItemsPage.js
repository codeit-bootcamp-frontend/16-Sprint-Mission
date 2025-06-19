import styles from "./ItemsPage.module.scss";
import AllProductArea from "../../components/AllProductArea/AllProductArea";
import BestProductArea from "../../components/BestProductArea/BestProductArea";

const ItemsPage = () => {
  return (
    <div id="container" className={styles.itemsPage}>
      <div className={styles.itemsPage__inner}>
        <section className={styles.itemsPage__section}>
          <BestProductArea />
        </section>
        <section className={styles.itemsPage__section}>
          <AllProductArea />
        </section>
      </div>
    </div>
  );
};

export default ItemsPage;
