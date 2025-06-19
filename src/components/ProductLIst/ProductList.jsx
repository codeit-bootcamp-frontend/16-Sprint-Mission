import { useEffect, useState } from "react";

import { getProducts } from "../../api/ProductApi";
import ProductItem from "./ProductItem.jsx";

import styles from "./ProductList.module.css";

function ProductList({  orderBy, pageSize, keyword, page, type = "small" }) {
  const [items, setItems] = useState([]);

  const handleProduct = async () => {
    try {
      const { list } = await getProducts({ orderBy, pageSize, keyword, page });
      setItems(list);
    } catch (error) {
      console.error("상품 목록을 가져오는 중 오류 발생:", error);
      setItems([]);
    }
  };

  useEffect(() => {
    handleProduct();
  }, [orderBy, pageSize, keyword, page]);

  return (
    <ul className={styles[type]}>
      {items.map((item) => (
        <li key={item.id} className={styles.card}>
          <ProductItem item={item} type={type} />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
