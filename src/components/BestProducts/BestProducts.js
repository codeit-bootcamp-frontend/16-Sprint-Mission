import { useState, useEffect } from "react";
import styles from "./BestProducts.module.css";
import useBestProducts from "../../hooks/useBestProducts";
import { getLimitFromHtmlClass } from "../../utils/getLimitFromHtmlClass";
import ProductCard from "../ProductCard/ProductCard";

function BestProducts({ title, itemsPerDevice }) {
  const [limit, setLimit] = useState(() =>
    getLimitFromHtmlClass(
      itemsPerDevice.desktop,
      itemsPerDevice.tablet,
      itemsPerDevice.mobile
    )
  );

  useEffect(() => {
    const updateLimit = () => {
      const newLimit = getLimitFromHtmlClass(
        itemsPerDevice.desktop,
        itemsPerDevice.tablet,
        itemsPerDevice.mobile
      );
      setLimit(newLimit);
    };

    // 초기 세팅 + resize 감지
    updateLimit();
    window.addEventListener("resize", updateLimit);
    return () => window.removeEventListener("resize", updateLimit);
  }, [itemsPerDevice]);

  const bestProducts = useBestProducts(limit);

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
