import styles from "./BestProducts.module.css";
import useBestProducts from "../../hooks/useBestProducts";
import ProductCard from "../ProductCard/ProductCard";

function BestProducts({ title, itemsPerDevice }) {
 
  const bestProducts = useBestProducts(itemsPerDevice);

  return (
    <section className={styles.contents}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.productGrid}>
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default BestProducts;
