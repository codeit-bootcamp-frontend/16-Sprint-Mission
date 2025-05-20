import { useEffect, useState } from "react";

import { getProducts } from "../api/ProductApi";
import ProductItem from "./ProductItem";

import styles from "./ProductList.module.css";

function ProductList({ orderBy, pageSize, keyword, page, isBestProduct }) {
  const [items, setItems] = useState([]);

  const handleProduct = async (orderBy) => {
    try {
      const { list } = await getProducts({ orderBy, pageSize, keyword, page });
      setItems([...list]);
    } catch (error) {
      console.error("상품 목록을 가져오는 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    handleProduct(orderBy, pageSize, keyword, page);
  }, [orderBy, pageSize, keyword, page]);

  return (
    <ul className={isBestProduct ? styles.bestItem : styles.allItem}>
      {items.map((item) => (
        <li key={item.id} className={styles.card}>
          <ProductItem item={item} isBestProduct={isBestProduct} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
